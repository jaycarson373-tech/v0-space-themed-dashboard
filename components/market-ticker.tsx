const PHRASES = [
  "100% OF CREATOR FEES BUY SPCX",
  "DISTRIBUTED TO HOLDERS EVERY 15 MINUTES",
  "ON-CHAIN · AUTOMATIC · VERIFIABLE",
  "NO TEAM CUT · NO VESTING GAMES",
  "BUILT ON SOLANA",
]

function TickerRow() {
  return (
    <div className="flex shrink-0 items-center">
      {PHRASES.map((phrase, i) => (
        <div key={`${phrase}-${i}`} className="flex items-center gap-3 px-6 py-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="font-mono text-[11px] font-medium tracking-[0.18em] text-muted-foreground">
            {phrase}
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
