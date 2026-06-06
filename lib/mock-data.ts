import type { Holder } from "./types"

// ─────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH FOR MOCK DASHBOARD DATA
// Replace these values with live API/database reads later.
// The 15-minute epoch runner should populate this exact shape.
// ─────────────────────────────────────────────────────────────

export const TOKEN = {
  symbol: "SPCX6900",
  name: "SPCX6900",
  network: "Solana",
  contract: "SPCXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx6900",
  totalSupply: 690_000_000_000,
  burnRate: "1% / tx",
  lpStatus: "Locked",
}

export const MARKET = {
  marketCap: 6_942_000,
  price: 0.00001006,
  change24h: 69.42,
  totalHolders: 4206,
  topHolderCount: 100,
}

// Market ticker strip — SPCX6900 glows green, everything else red.
export const TICKER_ITEMS = [
  { symbol: "SPX500", change: -99, up: false },
  { symbol: "SPCX6900", change: 69000, up: true },
  { symbol: "MSFT", change: -99, up: false },
  { symbol: "NVDA", change: -99, up: false },
  { symbol: "AAPL", change: -99, up: false },
  { symbol: "BRK.B", change: -99, up: false },
  { symbol: "JPM", change: -99, up: false },
  { symbol: "META", change: -99, up: false },
  { symbol: "AMZN", change: -99, up: false },
  { symbol: "GOOG", change: -99, up: false },
]

function genWallet(seed: number): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz123456789"
  let out = ""
  let n = seed * 2654435761
  for (let i = 0; i < 44; i++) {
    n = (n * 1103515245 + 12345) & 0x7fffffff
    out += chars[n % chars.length]
  }
  return out
}

function flightClass(rank: number): string {
  if (rank === 1) return "COMMANDER"
  if (rank <= 3) return "FIRST"
  if (rank <= 10) return "BUSINESS"
  if (rank <= 50) return "PREMIUM"
  return "ECONOMY"
}

// Top 100 holders, deterministic mock with a realistic decay curve.
export const TOP_HOLDERS: Holder[] = Array.from({ length: 100 }, (_, i) => {
  const rank = i + 1
  const base = 5.4 * Math.pow(0.94, i) + 0.05
  const percent = Number(base.toFixed(3))
  const amount = Math.floor((percent / 100) * TOKEN.totalSupply)
  return {
    rank,
    owner: genWallet(rank),
    amount,
    percent,
    flightClass: flightClass(rank),
  }
})

export const TOP_100_CONTROL = Number(
  TOP_HOLDERS.reduce((sum, h) => sum + h.percent, 0).toFixed(2),
)

// ── Epoch runner state ──────────────────────────────────────
export const EPOCH_STEPS = [
  "Monitoring creator fees",
  "Claiming creator fees",
  "Buying SPCX",
  "Snapshotting holders",
  "Calculating eligible recipients",
  "Sending payouts",
  "Confirming transactions",
  "Updating dashboard ledger",
  "Epoch complete",
] as const

export const EPOCH = {
  number: 1337,
  currentStepIndex: 5, // 0-based → "Sending payouts"
  intervalMs: 15 * 60 * 1000,
  lastUpdated: Date.now() - 3 * 60 * 1000,
  nextEpochAt: Date.now() + 12 * 60 * 1000,
}

export const PAYOUTS = {
  recipientsThisRound: 3120,
  spcxPaidThisRound: 1_204.55,
  spcxPaidAllTime: 482_339.18,
  pendingPool: 88.42,
}

export const RECENT_SIGNATURES = [
  { sig: "5KJp9aQx7Tn2bV3cWm8dLf4gHr6sYz1uXe0oNpQ2RtAuBvCwDxEyFzG", status: "confirmed", ts: Date.now() - 40_000 },
  { sig: "3Hg7bRt5Mn8kP2qWx9cLd4fJr6sYz1uXe0oNpA2BtCuDvEwFxGyHzJ1", status: "confirmed", ts: Date.now() - 95_000 },
  { sig: "9Lp2cQx4Tn7bV5cWm1dLf8gHr3sYz6uXe9oNpQ0RtKuBvDwExFyGzH2", status: "confirmed", ts: Date.now() - 150_000 },
  { sig: "2Mq8dRt6Nn9kP4qWx2cLd5fJr7sYz3uXe1oNpB4BtEuFvGwHxJyKzL3", status: "pending", ts: Date.now() - 12_000 },
  { sig: "7Np4eQx2Tn5bV8cWm3dLf6gHr9sYz2uXe4oNpC6RtMuBvFwGxHyJzK4", status: "confirmed", ts: Date.now() - 220_000 },
]

export const ACTIVITY_LOG = [
  { ts: Date.now() - 12_000, msg: "Payout batch 3/4 broadcast (820 recipients)" },
  { ts: Date.now() - 60_000, msg: "SPCX buy filled: 1,204.55 SPCX @ market" },
  { ts: Date.now() - 130_000, msg: "Holder snapshot captured at block 298,441,920" },
  { ts: Date.now() - 190_000, msg: "Creator fees claimed: 6.91 SOL" },
  { ts: Date.now() - 240_000, msg: "Epoch 1337 initialized" },
]

export const ERROR_LOG = [
  { ts: Date.now() - 88_000, level: "warn", msg: "RPC latency spike (1,420ms) — retried via fallback node" },
]
