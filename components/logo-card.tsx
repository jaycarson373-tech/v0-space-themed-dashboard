import Image from "next/image"

export function LogoCard() {
  return (
    <div className="glass-panel glass-panel-accent relative aspect-square overflow-hidden rounded-2xl">
      {/* atmosphere */}
      <div className="absolute inset-0 star-field opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_45%,oklch(0.6_0.22_25_/_0.18),transparent_70%)]" />

      {/* orbit rings */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <ellipse cx="200" cy="200" rx="172" ry="64" fill="none" stroke="oklch(0.85 0.04 250 / 0.12)" strokeWidth="1" />
        <ellipse
          cx="200"
          cy="200"
          rx="172"
          ry="64"
          fill="none"
          stroke="oklch(0.6 0.22 25 / 0.45)"
          strokeWidth="1"
          transform="rotate(60 200 200)"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="172"
          ry="64"
          fill="none"
          stroke="oklch(0.85 0.04 250 / 0.1)"
          strokeWidth="1"
          transform="rotate(-60 200 200)"
        />
        {/* orbiting telemetry node */}
        <g className="origin-center animate-radar [animation-duration:14s]">
          <circle cx="372" cy="200" r="3" fill="oklch(0.6 0.22 25)" />
        </g>
      </svg>

      {/* emblem */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-float">
          <Image
            src="/spcx-logo.png"
            alt="SPCX6900 chrome emblem"
            width={220}
            height={220}
            className="h-40 w-40 rounded-full ring-1 ring-border/60 sm:h-52 sm:w-52"
            style={{ boxShadow: "0 0 60px -10px oklch(0.6 0.22 25 / 0.5)" }}
            priority
          />
        </div>
      </div>

      {/* HUD corners */}
      <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        SPCX // VAULT
      </div>
      <div className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        SOLANA
      </div>
      <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        $SPCX6900
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-negative)]">
        FEES → SPCX
      </div>
    </div>
  )
}
