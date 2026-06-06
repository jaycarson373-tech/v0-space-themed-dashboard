import { SpcxLogo } from "@/components/spcx-logo"
import { ChevronRight } from "lucide-react"

export function Splash() {
  return (
    <section className="relative flex min-h-[88vh] flex-col items-center justify-center overflow-hidden px-4 text-center">
      {/* dark radial backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_30%,oklch(0.18_0_0),oklch(0.08_0_0))]" />
      <div className="star-field pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative flex flex-col items-center">
        <div className="mb-2 flex h-40 w-72 items-center justify-center rounded-lg border border-border bg-card/40 backdrop-blur">
          <SpcxLogo className="h-28 w-56 text-foreground" />
        </div>

        <h1 className="mt-8 font-mono text-5xl font-extrabold tracking-[0.08em] text-foreground sm:text-7xl">
          SPCX6900
        </h1>

        <p className="mt-5 text-base font-medium text-foreground sm:text-lg">
          SPCX is the stock. SPCX6900 is the meme.
        </p>
        <p className="mt-2 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
          100% of creator fees buy SPCX, distributed to 500K+ holders every 15
          minutes.
        </p>

        <a
          href="#vault"
          className="mt-10 inline-flex items-center gap-2 rounded-md border border-border bg-card px-10 py-4 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Enter Vault
          <ChevronRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
