import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { MarketTicker } from "@/components/market-ticker"
import { EpochRunner } from "@/components/epoch-runner"
import { Panel, Stat } from "@/components/panel"
import { HoldersTable } from "@/components/holders-table"
import { SiteFooter } from "@/components/site-footer"
import {
  MARKET,
  TOKEN,
  TOP_HOLDERS,
  TOP_100_CONTROL,
  PAYOUTS,
  RECENT_SIGNATURES,
  ACTIVITY_LOG,
  ERROR_LOG,
} from "@/lib/mock-data"
import { formatNumber, shortenAddress, timeAgo } from "@/lib/format"
import { ArrowLeft, AlertTriangle, Activity } from "lucide-react"

export const metadata = {
  title: "SPCX6900 | Mission Control Dashboard",
  description:
    "Live SPCX6900 mission-control dashboard. Epoch runner, payouts, and the top 100 flight manifest.",
}

export default function DashboardPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <SiteHeader />
      <MarketTicker />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Home
            </Link>
            <h1 className="mt-3 font-mono text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Mission Control
            </h1>
            <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">
              <span className="text-[var(--color-negative)]">{"// "}</span>
              Mock telemetry. The 15-minute epoch runner will write live data here.
            </p>
          </div>
          <div className="border border-border bg-card px-4 py-2 font-mono text-[11px] tracking-wide text-muted-foreground">
            CONTRACT{" "}
            <span className="text-foreground">{shortenAddress(TOKEN.contract, 6)}</span>
          </div>
        </div>

        {/* Epoch runner */}
        <div className="mt-8">
          <EpochRunner />
        </div>

        {/* Market stats */}
        <div className="mt-4">
          <Panel label="Market // SPCX6900">
            <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-5">
              <div className="bg-card">
                <Stat label="Market Cap" value={`$${formatNumber(MARKET.marketCap)}`} />
              </div>
              <div className="bg-card">
                <Stat label="Price" value={`$${MARKET.price.toFixed(8)}`} />
              </div>
              <div className="bg-card">
                <Stat
                  label="24h Change"
                  value={`+${MARKET.change24h}%`}
                  accent="positive"
                />
              </div>
              <div className="bg-card">
                <Stat label="Total Holders" value={formatNumber(MARKET.totalHolders)} />
              </div>
              <div className="bg-card">
                <Stat label="Top Holders" value={MARKET.topHolderCount} />
              </div>
            </div>
          </Panel>
        </div>

        {/* Payouts */}
        <div className="mt-4">
          <Panel label="Payout Ledger // This Round">
            <div className="grid grid-cols-2 gap-px bg-border lg:grid-cols-4">
              <div className="bg-card">
                <Stat label="Recipients This Round" value={formatNumber(PAYOUTS.recipientsThisRound)} />
              </div>
              <div className="bg-card">
                <Stat
                  label="SPCX Paid This Round"
                  value={formatNumber(PAYOUTS.spcxPaidThisRound)}
                  accent="positive"
                />
              </div>
              <div className="bg-card">
                <Stat label="SPCX Paid All-Time" value={formatNumber(PAYOUTS.spcxPaidAllTime)} />
              </div>
              <div className="bg-card">
                <Stat label="Pending Pool" value={`${PAYOUTS.pendingPool} SOL`} />
              </div>
            </div>
          </Panel>
        </div>

        {/* Holders + signatures */}
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.7fr_1fr]">
          <Panel
            label="Flight Manifest // Top 100"
            right={
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Control {TOP_100_CONTROL}%
              </span>
            }
          >
            <div className="max-h-[520px] overflow-y-auto">
              <HoldersTable holders={TOP_HOLDERS} />
            </div>
          </Panel>

          <Panel label="Recent Signatures">
            <ul className="divide-y divide-border/60">
              {RECENT_SIGNATURES.map((s) => (
                <li key={s.sig} className="px-4 py-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs text-foreground">
                      {shortenAddress(s.sig, 6)}
                    </span>
                    <span
                      className={`font-mono text-[10px] uppercase tracking-[0.16em] ${
                        s.status === "confirmed"
                          ? "text-[var(--color-positive)]"
                          : "text-[var(--color-negative)]"
                      }`}
                    >
                      {s.status}
                    </span>
                  </div>
                  <div className="mt-1 font-mono text-[10px] text-muted-foreground">
                    {timeAgo(s.ts)}
                  </div>
                </li>
              ))}
            </ul>
          </Panel>
        </div>

        {/* Activity + error logs */}
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <Panel
            label="Activity Log"
            right={<Activity className="h-3.5 w-3.5 text-muted-foreground" />}
          >
            <ul className="divide-y divide-border/60">
              {ACTIVITY_LOG.map((a, i) => (
                <li key={i} className="flex items-start gap-3 px-4 py-2.5">
                  <span className="mt-0.5 font-mono text-[10px] tabular-nums text-muted-foreground">
                    {timeAgo(a.ts)}
                  </span>
                  <span className="font-mono text-xs leading-relaxed text-foreground">
                    {a.msg}
                  </span>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel
            label="Error Log"
            right={<AlertTriangle className="h-3.5 w-3.5 text-[var(--color-negative)]" />}
          >
            {ERROR_LOG.length === 0 ? (
              <div className="px-4 py-6 font-mono text-xs text-muted-foreground">
                No errors this epoch.
              </div>
            ) : (
              <ul className="divide-y divide-border/60">
                {ERROR_LOG.map((e, i) => (
                  <li key={i} className="flex items-start gap-3 px-4 py-2.5">
                    <span
                      className={`mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] ${
                        e.level === "warn"
                          ? "text-[var(--color-negative)]"
                          : "text-muted-foreground"
                      }`}
                    >
                      {e.level}
                    </span>
                    <span className="font-mono text-xs leading-relaxed text-muted-foreground">
                      {e.msg}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </Panel>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
