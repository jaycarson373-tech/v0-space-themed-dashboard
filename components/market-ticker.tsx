import { TICKER_ITEMS } from "@/lib/mock-data"

function TickerRow() {
  return (
    <div className="flex shrink-0 items-center">
      {TICKER_ITEMS.map((item, i) => (
        <div key={`${item.symbol}-${i}`} className="flex items-center gap-2 px-6 py-2">
          <span className="font-mono text-xs font-semibold tracking-wide text-foreground">
            {item.symbol}
          </span>
          <span
            className={`font-mono text-xs font-bold tabular-nums ${
              item.up ? "text-[var(--color-positive)]" : "text-[var(--color-negative)]"
            }`}
          >
            {item.up ? "▲" : "▼"} {item.up ? "+" : ""}
            {item.change.toLocaleString()}%
          </span>
        </div>
      ))}
    </div>
  )
}

export function MarketTicker() {
  return (
    <div className="overflow-hidden border-y border-border bg-card/60">
      <div className="flex w-max animate-ticker">
        <TickerRow />
        <TickerRow />
      </div>
    </div>
  )
}
