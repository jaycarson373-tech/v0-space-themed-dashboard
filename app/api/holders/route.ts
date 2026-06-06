import { NextResponse } from "next/server"
import type { Holder, HoldersResponse } from "@/lib/types"

// Refresh server cache every 15 minutes
export const revalidate = 900

const HELIUS_API_KEY = process.env.HELIUS_API_KEY
const TOKEN_MINT = process.env.NEXT_PUBLIC_TOKEN_MINT
const TOKEN_PROGRAM = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"

type RpcAccount = {
  pubkey: string
  account: { data: [string, string] }
}

function readUInt64LE(buf: Buffer, offset: number): number {
  // amounts fit safely well within Number range for display purposes
  const lo = buf.readUInt32LE(offset)
  const hi = buf.readUInt32LE(offset + 4)
  return hi * 0x100000000 + lo
}

async function rpc<T>(url: string, method: string, params: unknown[]): Promise<T> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", id: "spcx", method, params }),
    next: { revalidate },
  })
  if (!res.ok) throw new Error(`RPC ${method} failed: ${res.status}`)
  const json = await res.json()
  if (json.error) throw new Error(`RPC ${method} error: ${json.error.message}`)
  return json.result as T
}

function buildMock(): HoldersResponse {
  const total = 690_000_000_000
  const holders: Holder[] = []
  let remaining = 0.62 // top 100 hold ~62% in this simulation
  const weights: number[] = []
  for (let i = 0; i < 100; i++) {
    // descending power-law-ish distribution
    weights.push(1 / Math.pow(i + 1.5, 1.15))
  }
  const weightSum = weights.reduce((a, b) => a + b, 0)
  for (let i = 0; i < 100; i++) {
    const percent = (weights[i] / weightSum) * remaining * 100
    holders.push({
      rank: i + 1,
      owner: mockAddress(i),
      amount: (percent / 100) * total,
      percent,
    })
  }
  return {
    mint: TOKEN_MINT ?? "SPCX6900MintAddressNotConfigured1111111111111",
    symbol: "SPCX6900",
    name: "SpaceX 6900",
    decimals: 6,
    totalSupply: total,
    holderCount: 8421,
    topHolders: holders,
    fetchedAt: Date.now(),
    isLive: false,
    note: TOKEN_MINT
      ? "Showing simulated data — live fetch unavailable."
      : "Showing simulated holder data.",
  }
}

const MOCK_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz123456789"
function mockAddress(seed: number): string {
  let s = ""
  let x = seed * 2654435761
  for (let i = 0; i < 44; i++) {
    x = (x * 1103515245 + 12345) & 0x7fffffff
    s += MOCK_CHARS[x % MOCK_CHARS.length]
  }
  return s
}

export async function GET() {
  if (!HELIUS_API_KEY || !TOKEN_MINT) {
    return NextResponse.json(buildMock())
  }

  const url = `https://mainnet.helius-rpc.com/?api-key=${HELIUS_API_KEY}`

  try {
    // 1. Token supply + decimals
    const supply = await rpc<{ value: { amount: string; decimals: number } }>(
      url,
      "getTokenSupply",
      [TOKEN_MINT],
    )
    const decimals = supply.value.decimals
    const factor = Math.pow(10, decimals)
    const totalSupply = Number(supply.value.amount) / factor

    // 2. All token accounts for this mint (dataSize 165, memcmp mint at offset 0)
    const accounts = await rpc<RpcAccount[]>(url, "getProgramAccounts", [
      TOKEN_PROGRAM,
      {
        encoding: "base64",
        filters: [{ dataSize: 165 }, { memcmp: { offset: 0, bytes: TOKEN_MINT } }],
      },
    ])

    // 3. Aggregate balances by owner
    const byOwner = new Map<string, number>()
    for (const acc of accounts) {
      const buf = Buffer.from(acc.account.data[0], "base64")
      if (buf.length < 72) continue
      const owner = buf.subarray(32, 64)
      const ownerStr = bs58encode(owner)
      const raw = readUInt64LE(buf, 64)
      if (raw <= 0) continue
      byOwner.set(ownerStr, (byOwner.get(ownerStr) ?? 0) + raw / factor)
    }

    const sorted = [...byOwner.entries()].sort((a, b) => b[1] - a[1])
    const topHolders: Holder[] = sorted.slice(0, 100).map(([owner, amount], i) => ({
      rank: i + 1,
      owner,
      amount,
      percent: totalSupply > 0 ? (amount / totalSupply) * 100 : 0,
    }))

    const payload: HoldersResponse = {
      mint: TOKEN_MINT,
      symbol: "SPCX6900",
      name: "SpaceX 6900",
      decimals,
      totalSupply,
      holderCount: byOwner.size,
      topHolders,
      fetchedAt: Date.now(),
      isLive: true,
    }
    return NextResponse.json(payload)
  } catch (err) {
    const mock = buildMock()
    mock.note = `Live fetch failed (${err instanceof Error ? err.message : "unknown"}). Showing simulated data.`
    return NextResponse.json(mock)
  }
}

// Minimal base58 encoder (Bitcoin alphabet) for Solana pubkeys
const B58 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
function bs58encode(bytes: Uint8Array): string {
  let zeros = 0
  while (zeros < bytes.length && bytes[zeros] === 0) zeros++
  const digits: number[] = []
  for (let i = zeros; i < bytes.length; i++) {
    let carry = bytes[i]
    for (let j = 0; j < digits.length; j++) {
      const x = digits[j] * 256 + carry
      digits[j] = x % 58
      carry = Math.floor(x / 58)
    }
    while (carry > 0) {
      digits.push(carry % 58)
      carry = Math.floor(carry / 58)
    }
  }
  let out = ""
  for (let i = 0; i < zeros; i++) out += "1"
  for (let i = digits.length - 1; i >= 0; i--) out += B58[digits[i]]
  return out
}
