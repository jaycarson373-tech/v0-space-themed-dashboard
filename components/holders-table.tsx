import type { Holder } from "@/lib/types"
import { formatNumber, formatPercent, shortenAddress } from "@/lib/format"
import { ExternalLink, Rocket, Satellite, Star } from "lucide-react"

function rankBadge(rank: number) {
  if (rank === 1) return "bg-chart-4/20 text-chart-4 border-chart-4/40"
  if (rank === 2) return "bg-muted text-foreground border-border"
  if (rank === 3) return "bg-primary/15 text-primary border-primary/30"
  return "bg-secondary text-muted-foreground border-border"
}

function RankIcon({ rank }: { rank: number }) {
  if (rank === 1) return <Rocket className="h-4 w-4 text-chart-4" />
  if (rank <= 3) return <Satellite className="h-4 w-4 text-accent" />
  if (rank <= 10) return <Star className="h-3.5 w-3.5 text-primary" />
  return null
}

export function HoldersTable({
  holders,
  isLoading,
}: {
  holders: Holder[]
  isLoading: boolean
}) {
  if (isLoading) {
    return (
      <div className="space-y-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="h-14 animate-pulse rounded-lg border border-border bg-card/40"
          />
        ))}
      </div>
    )
  }

  const maxPercent = holders[0]?.percent ?? 1

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card/40 backdrop-blur">
      {/* header row */}
      <div className="hidden grid-cols-[64px_1fr_140px_120px_120px] gap-4 border-b border-border bg-secondary/50 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground md:grid">
        <span>Rank</span>
        <span>Astronaut</span>
        <span className="text-right">Holdings</span>
        <span className="text-right">Share</span>
        <span className="text-right">Orbit</span>
      </div>

      <ul className="divide-y divide-border">
        {holders.map((h) => {
          const orbit = (h.percent / maxPercent) * 100
          return (
            <li
              key={h.owner}
              className="group grid grid-cols-[44px_1fr_auto] items-center gap-3 px-4 py-3 transition-colors hover:bg-secondary/40 md:grid-cols-[64px_1fr_140px_120px_120px] md:gap-4 md:px-5"
            >
              {/* rank */}
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-md border font-mono text-sm font-bold ${rankBadge(
                  h.rank,
                )}`}
              >
                {h.rank}
              </div>

              {/* address */}
              <div className="flex min-w-0 items-center gap-2">
                <span className="flex w-5 justify-center">
                  <RankIcon rank={h.rank} />
                </span>
                <a
                  href={`https://solscan.io/account/${h.owner}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 truncate font-mono text-sm text-foreground transition-colors hover:text-primary"
                >
                  {shortenAddress(h.owner, 5)}
                  <ExternalLink className="h-3 w-3 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </div>

              {/* holdings */}
              <div className="text-right font-mono text-sm text-foreground md:block">
                <span className="md:hidden text-xs text-muted-foreground">{formatPercent(h.percent)} · </span>
                {formatNumber(h.amount)}
              </div>

              {/* share */}
              <div className="hidden text-right font-mono text-sm text-accent md:block">
                {formatPercent(h.percent)}
              </div>

              {/* orbit bar */}
              <div className="hidden items-center justify-end md:flex">
                <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-chart-4"
                    style={{ width: `${Math.max(orbit, 3)}%` }}
                  />
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
