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
  contract: "SPCX6900vAuLtxxxxxxxxxxxxxxxxxxxxxxxxxxx6900",
  totalSupply: 690_000_000_000,
}

export const MARKET = {
  marketCap: 6_942_000,
  price: 0.00001006,
  change24h: 69.42,
  totalHolders: 512_408,
}

// Vault headline stats (homepage + dashboard cards)
export const VAULT = {
  totalAirdropped: 482_339.18, // SPCX distributed all-time
  eligibleHolders: 498_120,
  pendingPool: 88.42, // SPCX waiting for next round
  totalBought: 612_904.55, // SPCX bought from creator fees all-time
}

// Distribution / epoch summary
export const DISTRIBUTION = {
  roundsToday: 71,
  recipientsThisRound: 3120,
  paidThisRound: 1_204.55,
  paidAllTime: 482_339.18,
  feesClaimedSol: 6.91,
}

// Market ticker strip — SPCX6900 glows green, legacy markets bleed red.
export const TICKER_ITEMS = [
  { symbol: "SPX500", change: -2.1, up: false },
  { symbol: "SPCX6900", change: 69.42, up: true },
  { symbol: "BTC", change: -1.4, up: false },
  { symbol: "NVDA", change: -3.2, up: false },
  { symbol: "AAPL", change: -0.9, up: false },
  { symbol: "TSLA", change: -4.6, up: false },
  { symbol: "SOL", change: 5.8, up: true },
  { symbol: "META", change: -1.1, up: false },
  { symbol: "AMZN", change: -0.7, up: false },
  { symbol: "GOOG", change: -1.9, up: false },
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

function tier(rank: number): string {
  if (rank === 1) return "FOUNDER"
  if (rank <= 3) return "ANCHOR"
  if (rank <= 10) return "MAJOR"
  if (rank <= 50) return "SENIOR"
  return "HOLDER"
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
    flightClass: tier(rank),
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

// Distribution policy — creator fees → buy → distribute
export const POLICY = [
  {
    id: "01",
    title: "Creator fees accrue",
    body: "Every SPCX6900 transaction routes creator fees into the vault wallet on Solana. Nothing is skimmed for the team.",
  },
  {
    id: "02",
    title: "100% buys SPCX",
    body: "When the epoch fires, the full fee balance is claimed and market-bought into SPCX automatically. No discretion, no delay.",
  },
  {
    id: "03",
    title: "Distributed to holders",
    body: "The bought SPCX is airdropped pro-rata to every eligible holder — 500K+ wallets — every 15 minutes, on-chain and verifiable.",
  },
]

// Ledger process states (homepage ledger preview)
export const LEDGER_STAGES = [
  { id: "pending", label: "Pending", desc: "Fees accruing in vault", state: "done" },
  { id: "snapshot", label: "Snapshot", desc: "Holder balances captured", state: "done" },
  { id: "buy", label: "Buy", desc: "SPCX market buy executed", state: "active" },
  { id: "distribution", label: "Distribution", desc: "Pro-rata payouts sent", state: "queued" },
] as const

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
