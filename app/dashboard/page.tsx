import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { MarketTicker } from "@/components/market-ticker"
import { EpochRunner } from "@/components/epoch-runner"
import { Panel, Stat } from "@/components/panel"
import { HoldersTable } from "@/components/holders-table"
import { EmptyState } from "@/components/empty-state"
import { SiteFooter } from "@/components/site-footer"
import {
  MARKET,
  VAULT,
  TOKEN,
  TOP_HOLDERS,
  TOP_100_CONTROL,
  DISTRIBUTION,
  RECENT_SIGNATURES,
  ACTIVITY_LOG,
  ERROR_LOG,
  HAS_LIVE_DATA,
} from "@/lib/mock-data"
import { metric, shortenAddress, timeAgo } from "@/lib/format"
import { ArrowLeft, AlertTriangle, Activity, Users, Receipt } from "lucide-react"

export const metadata = {
  title: "SPCX6900 | Vault Dashboard",
  description:
    "Live SPCX6900 vault dashboard — epoch runner, distribution metrics, holders, and on-chain ledger.",
}

export default function DashboardPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <SiteHeader />
      <MarketTicker />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {/* Header row */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Home
            </Link>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Vault Dashboard
            </h1>
            <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">
              <span className="text-[var(--color-negative)]">{"// "}</span>
              {HAS_LIVE_DATA
                ? "Live vault telemetry, refreshed every 15-minute epoch."
                : "Vault not yet live. Metrics populate automatically once distribution begins."}
            </p>
          </div>
          <div className="border border-border bg-card px-4 py-2 font-mono text-[11px] tracking-wide text-muted-foreground">
            CONTRACT{" "}
            <span className="text-foreground">
              {TOKEN.contract ? shortenAddress(TOKEN.contract, 6) : "TBA"}
            </span>
          </div>
        </div>

        {/* Vault headline stats */}
        <div className="mt-8">
          <Panel label="Vault // Overview">
            <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
              <div className="bg-card">
                <Stat label="SPCX Bought (All-Time)" value={metric(VAULT.totalBought)} />
              </div>
              <div className="bg-card">
                <Stat label="SPCX Airdropped" value={metric(VAULT.totalAirdropped)} />
              </div>
              <div className="bg-card">
                <Stat label="Eligible Holders" value={metric(VAULT.eligibleHolders)} />
              </div>
              <div className="bg-card">
                <Stat label="Pending Pool" value={metric(VAULT.pendingPool, { suffix: " SPCX" })} />
              </div>
            </div>
          </Panel>
        </div>

        {/* Epoch runner */}
        <div className="mt-4">
          <EpochRunner />
        </div>

        {/* Market + distribution */}
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <Panel label="Market // SPCX6900">
            <div className="grid grid-cols-2 gap-px bg-border">
              <div className="bg-card">
                <Stat label="Market Cap" value={metric(MARKET.marketCap, { prefix: "$" })} />
              </div>
              <div className="bg-card">
                <Stat
                  label="Price"
                  value={
                    MARKET.price === null ? "—" : `$${MARKET.price.toFixed(8)}`
                  }
                />
              </div>
              <div className="bg-card">
                <Stat
                  label="24h Change"
                  value={MARKET.change24h === null ? "—" : `${MARKET.change24h}%`}
                />
              </div>
              <div className="bg-card">
                <Stat label="Total Holders" value={metric(MARKET.totalHolders)} />
              </div>
            </div>
          </Panel>

          <Panel label="Distribution // Today">
            <div className="grid grid-cols-2 gap-px bg-border">
              <div className="bg-card">
                <Stat label="Rounds Today" value={metric(DISTRIBUTION.roundsToday)} />
              </div>
              <div className="bg-card">
                <Stat label="Recipients (Round)" value={metric(DISTRIBUTION.recipientsThisRound)} />
              </div>
              <div className="bg-card">
                <Stat label="Paid (All-Time)" value={metric(DISTRIBUTION.paidAllTime, { suffix: " SPCX" })} />
              </div>
              <div className="bg-card">
                <Stat label="Fees Claimed" value={metric(DISTRIBUTION.feesClaimedSol, { suffix: " SOL" })} />
              </div>
            </div>
          </Panel>
        </div>

        {/* Holders + signatures */}
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.7fr_1fr]" id="holders">
          <Panel
            label="Top Holders"
            right={
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {TOP_100_CONTROL === null ? "Control —" : `Control ${TOP_100_CONTROL}%`}
              </span>
            }
          >
            {TOP_HOLDERS.length === 0 ? (
              <EmptyState
                icon={<Users className="h-6 w-6" />}
                title="No snapshot yet"
                hint="The holder leaderboard fills in after the first on-chain snapshot."
              />
            ) : (
              <div className="max-h-[520px] overflow-y-auto">
                <HoldersTable holders={TOP_HOLDERS} />
              </div>
            )}
          </Panel>

          <Panel label="Recent Signatures">
            {RECENT_SIGNATURES.length === 0 ? (
              <EmptyState
                icon={<Receipt className="h-6 w-6" />}
                title="No transactions yet"
                hint="Confirmed payout signatures appear here each epoch."
              />
            ) : (
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
            )}
          </Panel>
        </div>

        {/* Activity + error logs */}
        <div className="mt-4 grid gap-4 lg:grid-cols-2" id="ledger">
          <Panel
            label="Activity Log"
            right={<Activity className="h-3.5 w-3.5 text-muted-foreground" />}
          >
            {ACTIVITY_LOG.length === 0 ? (
              <EmptyState title="No activity yet" hint="Epoch events stream in here once the runner starts." />
            ) : (
              <ul className="divide-y divide-border/60">
                {ACTIVITY_LOG.map((a, i) => (
                  <li key={i} className="flex items-start gap-3 px-4 py-2.5">
                    <span className="mt-0.5 font-mono text-[10px] tabular-nums text-muted-foreground">
                      {timeAgo(a.ts)}
                    </span>
                    <span className="font-mono text-xs leading-relaxed text-foreground">{a.msg}</span>
                  </li>
                ))}
              </ul>
            )}
          </Panel>

          <Panel
            label="Error Log"
            right={<AlertTriangle className="h-3.5 w-3.5 text-[var(--color-negative)]" />}
          >
            {ERROR_LOG.length === 0 ? (
              <EmptyState title="No errors" hint="Runner warnings and failures would be reported here." />
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
                    <span className="font-mono text-xs leading-relaxed text-muted-foreground">{e.msg}</span>
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
