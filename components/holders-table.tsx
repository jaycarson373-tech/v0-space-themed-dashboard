import type { Holder } from "@/lib/types"
import { formatNumber, formatPercent, shortenAddress } from "@/lib/format"

function tierColor(c?: string) {
  switch (c) {
    case "FOUNDER":
      return "text-accent"
    case "ANCHOR":
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
          <tr className="border-b border-border/70">
            <th className="px-5 py-3 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Rank
            </th>
            <th className="px-5 py-3 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Wallet
            </th>
            <th className="px-5 py-3 text-right font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Holdings
            </th>
            <th className="px-5 py-3 text-right font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Share
            </th>
            {showClass && (
              <th className="px-5 py-3 text-right font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Tier
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {holders.map((h) => (
            <tr
              key={h.rank}
              className="border-b border-border/40 transition-colors hover:bg-secondary/30"
            >
              <td className="px-5 py-3 font-mono text-xs tabular-nums text-muted-foreground">
                {String(h.rank).padStart(2, "0")}
              </td>
              <td className="px-5 py-3 font-mono text-xs text-foreground">
                {shortenAddress(h.owner, 5)}
              </td>
              <td className="px-5 py-3 text-right font-mono text-xs tabular-nums text-foreground">
                {formatNumber(h.amount)}
              </td>
              <td className="px-5 py-3 text-right font-mono text-xs tabular-nums text-foreground">
                {formatPercent(h.percent)}
              </td>
              {showClass && (
                <td
                  className={`px-5 py-3 text-right font-mono text-[10px] font-semibold tracking-[0.12em] ${tierColor(h.flightClass)}`}
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
