import Link from "next/link"
import { LaunchBackground } from "@/components/launch-background"
import { SceneBackground } from "@/components/scene-background"
import { LogoCard } from "@/components/logo-card"
import { LINKS } from "@/lib/mock-data"
import { ArrowRight, Rocket } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <SceneBackground scene="hangar" opacity={0.28} position="center 30%" />
      <LaunchBackground withGrid={false} />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:pb-24 lg:pt-28">
        {/* Left: copy */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-negative)]/40 bg-[var(--color-negative)]/10 px-3 py-1">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-[var(--color-negative)]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground">
              Fees → SPCX → Holders / Every 5m
            </span>
          </div>

          <h1 className="mt-6 text-balance text-6xl font-bold leading-[0.92] tracking-tight text-foreground text-glow sm:text-7xl lg:text-8xl">
            SPCX<span className="text-accent">6900</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            100% of creator fees buy SPCX on Solana, then get{" "}
            <span className="font-semibold text-foreground">automatically distributed to holders</span>{" "}
            every 5 minutes.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={LINKS.buy}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[0_0_40px_-8px_var(--color-accent)] transition-transform hover:scale-[1.03]"
            >
              <Rocket className="h-4 w-4" />
              Buy $SPCX6900
            </a>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-card/70"
            >
              Enter the Dashboard
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* quick telemetry */}
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-xl border border-border/70 bg-border/70">
            {[
              { k: "Distribution", v: "Every 5m" },
              { k: "Fees → SPCX", v: "100%" },
              { k: "Network", v: "Solana" },
            ].map((s) => (
              <div key={s.k} className="bg-card/60 px-4 py-3 backdrop-blur">
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {s.k}
                </dt>
                <dd className="mt-1 font-mono text-sm font-bold text-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: logo card */}
        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <LogoCard />
        </div>
      </div>
    </section>
  )
}
