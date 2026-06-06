import { RocketMark } from "@/components/rocket-mark"
import { Rocket, Radio, Orbit } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 star-field animate-twinkle" />
      <div className="pointer-events-none absolute inset-0 nebula-glow" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pb-20 pt-16 text-center sm:px-6 sm:pt-24">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-accent backdrop-blur">
          <Radio className="h-3.5 w-3.5 animate-pulse" />
          Live telemetry · refueled every 15 minutes
        </div>

        <RocketMark className="mb-6 block h-20 w-20 animate-float drop-shadow-[0_0_30px_oklch(0.72_0.19_47_/_0.5)]" />

        <h1 className="max-w-3xl text-balance font-mono text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-6xl">
          SPCX<span className="text-primary">6900</span> Mission Control
        </h1>

        <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          The deflationary launch token charting a course to orbit. Track the
          top 100 holders aboard the rocket in real time — diamond hands fuel
          the climb.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#dashboard"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            <Rocket className="h-5 w-5" />
            View Top 100 Holders
          </a>
          <a
            href="#mission"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card/50 px-6 py-3 font-semibold text-foreground backdrop-blur transition-colors hover:bg-secondary"
          >
            <Orbit className="h-5 w-5 text-accent" />
            Mission Brief
          </a>
        </div>
      </div>
    </section>
  )
}
