import type { HoldersResponse } from "@/lib/types"
import { formatNumber, formatPercent } from "@/lib/format"
import { Users, Coins, TrendingUp, Trophy } from "lucide-react"

export function StatCards({
  data,
  isLoading,
}: {
  data?: HoldersResponse
  isLoading: boolean
}) {
  const top100Percent =
    data?.topHolders.reduce((sum, h) => sum + h.percent, 0) ?? 0
  const topWhale = data?.topHolders[0]

  const stats = [
    {
      label: "Total Holders",
      value: data ? formatNumber(data.holderCount, 0) : "—",
      icon: Users,
      accent: "text-accent",
    },
    {
      label: "Total Supply",
      value: data ? formatNumber(data.totalSupply) : "—",
      icon: Coins,
      accent: "text-primary",
    },
    {
      label: "Top 100 Control",
      value: data ? formatPercent(top100Percent) : "—",
      icon: TrendingUp,
      accent: "text-chart-3",
    },
    {
      label: "Lead Whale",
      value: topWhale ? formatPercent(topWhale.percent) : "—",
      icon: Trophy,
      accent: "text-chart-4",
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-xl border border-border bg-card/60 p-4 backdrop-blur transition-colors hover:border-primary/40 sm:p-5"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <s.icon className={`h-4 w-4 ${s.accent}`} />
            <span className="text-xs font-medium">{s.label}</span>
          </div>
          <p className="mt-3 font-mono text-2xl font-bold text-foreground sm:text-3xl">
            {isLoading ? (
              <span className="inline-block h-7 w-20 animate-pulse rounded bg-muted" />
            ) : (
              s.value
            )}
          </p>
        </div>
      ))}
    </div>
  )
}
