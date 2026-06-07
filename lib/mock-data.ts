import type { Holder } from "./types"

// ─────────────────────────────────────────────────────────────
// CONFIG + LIVE-DATA PLACEHOLDERS
// No fabricated metrics. Every value below is either:
//   (a) static config / copy (interval, policy, process steps), or
//   (b) a null/empty placeholder the 15-minute epoch runner fills in.
// Wire real API/DB reads into the `*_LIVE` getters later.
// ─────────────────────────────────────────────────────────────

export const HAS_LIVE_DATA = false

export const TOKEN = {
  symbol: "SPCX6900",
  name: "SPCX6900",
  network: "Solana",
  contract: null as string | null, // set to mint address at launch
}

// Distribution schedule (real mechanism, not fabricated data)
export const EPOCH_INTERVAL_MS = 15 * 60 * 1000

// Returns the next wall-clock 15-minute boundary.
export function nextEpochBoundary(now = Date.now()): number {
  return Math.ceil(now / EPOCH_INTERVAL_MS) * EPOCH_INTERVAL_MS
}

// Vault headline metrics — null until the runner reports them.
export const VAULT: {
  totalAirdropped: number | null
  eligibleHolders: number | null
  pendingPool: number | null
  totalBought: number | null
} = {
  totalAirdropped: null,
  eligibleHolders: null,
  pendingPool: null,
  totalBought: null,
}

// Market metrics — null until a price feed is connected.
export const MARKET: {
  marketCap: number | null
  price: number | null
  change24h: number | null
  totalHolders: number | null
} = {
  marketCap: null,
  price: null,
  change24h: null,
  totalHolders: null,
}

// Per-round distribution summary — null until first epoch settles.
export const DISTRIBUTION: {
  roundsToday: number | null
  recipientsThisRound: number | null
  paidThisRound: number | null
  paidAllTime: number | null
  feesClaimedSol: number | null
} = {
  roundsToday: null,
  recipientsThisRound: null,
  paidThisRound: null,
  paidAllTime: null,
  feesClaimedSol: null,
}

// Top holders — empty until a holder snapshot is taken.
export const TOP_HOLDERS: Holder[] = []
export const TOP_100_CONTROL: number | null = null

// Process the runner executes each epoch (descriptive, not data).
export const EPOCH_STEPS = [
  "Monitoring creator fees",
  "Claiming creator fees",
  "Buying SPCX",
  "Snapshotting holders",
  "Calculating eligible recipients",
  "Sending payouts",
  "Confirming transactions",
  "Updating dashboard ledger",
] as const

// How the vault works (static explainer copy).
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
    body: "The bought SPCX is airdropped pro-rata to every eligible holder — on-chain, automatic, and verifiable — every 15 minutes.",
  },
]

// Ledger lifecycle stages (process explainer, not transaction data).
export const LEDGER_STAGES = [
  { id: "pending", label: "Pending", desc: "Fees accruing in vault" },
  { id: "snapshot", label: "Snapshot", desc: "Holder balances captured" },
  { id: "buy", label: "Buy", desc: "SPCX market buy executed" },
  { id: "distribution", label: "Distribution", desc: "Pro-rata payouts sent" },
] as const

// Live feeds — empty until the runner writes to them.
export const RECENT_SIGNATURES: { sig: string; status: string; ts: number }[] = []
export const ACTIVITY_LOG: { ts: number; msg: string }[] = []
export const ERROR_LOG: { ts: number; level: string; msg: string }[] = []
