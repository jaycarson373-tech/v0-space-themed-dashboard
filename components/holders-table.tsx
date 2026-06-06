import type { Holder } from "@/lib/types"
import { formatNumber, formatPercent, shortenAddress } from "@/lib/format"

function classColor(c?: string) {
  switch (c) {
    case "COMMANDER":
      return "text-[var(--color-negative)]"
    case "FIRST":
      return "text-foreground"
    default:
      return "text-muted-foreground"
  }
}

export function HoldersTable({
  holders,
  showClass = true,
}: {
  holders: Holder[]
  showClass?: boolean
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="px-4 py-2.5 text-left font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Rank
            </th>
            <th className="px-4 py-2.5 text-left font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Wallet
            </th>
            <th className="px-4 py-2.5 text-right font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Holdings
            </th>
            <th className="px-4 py-2.5 text-right font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Share
            </th>
            {showClass && (
              <th className="px-4 py-2.5 text-right font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Class
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {holders.map((h) => (
            <tr
              key={h.rank}
              className="border-b border-border/60 transition-colors hover:bg-secondary/40"
            >
              <td className="px-4 py-2.5 font-mono text-xs tabular-nums text-muted-foreground">
                {String(h.rank).padStart(2, "0")}
              </td>
              <td className="px-4 py-2.5 font-mono text-xs text-foreground">
                {shortenAddress(h.owner, 5)}
              </td>
              <td className="px-4 py-2.5 text-right font-mono text-xs tabular-nums text-foreground">
                {formatNumber(h.amount)}
              </td>
              <td className="px-4 py-2.5 text-right font-mono text-xs tabular-nums text-foreground">
                {formatPercent(h.percent)}
              </td>
              {showClass && (
                <td
                  className={`px-4 py-2.5 text-right font-mono text-[10px] font-bold tracking-[0.1em] ${classColor(h.flightClass)}`}
                >
                  {h.flightClass}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
