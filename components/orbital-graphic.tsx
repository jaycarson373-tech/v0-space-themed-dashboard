import { Rocket } from "lucide-react"

export function OrbitalGraphic() {
  return (
    <div className="relative h-full min-h-[280px] overflow-hidden">
      <div className="absolute inset-0 star-field opacity-60" />
      <div className="absolute inset-0 orbital-glow" />

      <svg
        viewBox="0 0 400 400"
        className="absolute left-1/2 top-1/2 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        {/* planet arc */}
        <circle cx="200" cy="430" r="240" fill="none" stroke="oklch(1 0 0 / 0.18)" strokeWidth="1" />
        <circle cx="200" cy="430" r="225" fill="none" stroke="oklch(1 0 0 / 0.08)" strokeWidth="1" />

        {/* orbit rings */}
        <ellipse cx="200" cy="190" rx="150" ry="58" fill="none" stroke="oklch(1 0 0 / 0.14)" strokeWidth="1" />
        <ellipse cx="200" cy="190" rx="110" ry="40" fill="none" stroke="oklch(0.58 0.22 27 / 0.5)" strokeWidth="1" />

        {/* radar reticle */}
        <line x1="40" y1="190" x2="360" y2="190" stroke="oklch(1 0 0 / 0.08)" strokeWidth="1" />
        <line x1="200" y1="40" x2="200" y2="340" stroke="oklch(1 0 0 / 0.08)" strokeWidth="1" />

        {/* telemetry dots */}
        <circle cx="310" cy="150" r="2.5" fill="oklch(0.58 0.22 27)" />
        <circle cx="96" cy="214" r="2" fill="oklch(1 0 0 / 0.7)" />
        <circle cx="262" cy="232" r="1.6" fill="oklch(1 0 0 / 0.6)" />
      </svg>

      {/* rocket */}
      <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 animate-float">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background/70">
          <Rocket className="h-6 w-6 -rotate-45 text-foreground" />
        </div>
      </div>

      {/* HUD labels */}
      <div className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        TELEMETRY // LIVE
      </div>
      <div className="absolute bottom-3 right-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-negative)]">
        ALT 6900 KM
      </div>
      <div className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        VEL +69,000%
      </div>
    </div>
  )
}
