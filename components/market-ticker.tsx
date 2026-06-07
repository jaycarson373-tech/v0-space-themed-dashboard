import { TICKER_ITEMS } from "@/lib/mock-data"

function TickerRow() {
  return (
    <div className="flex shrink-0 items-center">
      {TICKER_ITEMS.map((item, i) => (
        <div key={`${item.symbol}-${i}`} className="flex items-center gap-2 px-6 py-2.5">
          <span className="font-mono text-[11px] font-medium tracking-[0.12em] text-muted-foreground">
            {item.symbol}
          </span>
          <span
            className={`font-mono text-[11px] font-semibold tabular-nums ${
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
    <div className="relative overflow-hidden border-y border-border/70 bg-background/40 backdrop-blur">
      <div className="flex w-max animate-ticker">
        <TickerRow />
        <TickerRow />
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
    </div>
  )
}
