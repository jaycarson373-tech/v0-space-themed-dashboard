import { OrbitalGraphic } from "@/components/orbital-graphic"
import { Panel } from "@/components/panel"
import { Rocket, LineChart, Users } from "lucide-react"

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="grid gap-4 lg:grid-cols-[1.05fr_1.4fr_1fr]">
        {/* LEFT — terminal graphic */}
        <Panel label="MISSION FEED" className="overflow-hidden">
          <OrbitalGraphic />
        </Panel>

        {/* CENTER — the big take */}
        <div className="flex flex-col justify-center px-1 py-2 lg:px-4">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--color-negative)]">
            The Big Take
          </span>
          <h1 className="mt-4 text-balance font-mono text-3xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-4xl xl:text-5xl">
            The most hyped IPO of all time is coming — and holders get the airdrop
          </h1>
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            SPCX6900 is the unofficial Solana meme ticket for everyone who wants
            a seat before the rocket leaves the pad.
          </p>
          <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            No broker. No waitlist. No accreditation. Just the chart, the
            manifest, and the launch.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#buy"
              className="inline-flex items-center gap-2 border border-[var(--color-negative)] bg-[var(--color-negative)]/15 px-5 py-2.5 font-mono text-xs font-bold tracking-[0.12em] text-foreground transition-colors hover:bg-[var(--color-negative)]/25"
            >
              <Rocket className="h-4 w-4" />
              BUY $SPCX6900
            </a>
            <a
              href="#chart"
              className="inline-flex items-center gap-2 border border-border bg-card px-5 py-2.5 font-mono text-xs font-bold tracking-[0.12em] text-foreground transition-colors hover:bg-secondary"
            >
              <LineChart className="h-4 w-4" />
              VIEW CHART
            </a>
            <a
              href="/dashboard"
              className="inline-flex items-center gap-2 border border-border bg-card px-5 py-2.5 font-mono text-xs font-bold tracking-[0.12em] text-foreground transition-colors hover:bg-secondary"
            >
              <Users className="h-4 w-4" />
              SEE FLIGHT MANIFEST
            </a>
          </div>
        </div>

        {/* RIGHT — WTF card */}
        <Panel label="WTF IS SPCX6900?" className="flex flex-col">
          <div className="flex flex-1 flex-col gap-4 p-4">
            <p className="text-pretty leading-relaxed text-foreground">
              This tiny coin is launching to orbit.
            </p>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              Go search SPCX6900 on X. Go ask about the SpaceX IPO. Go check the
              top holders. The ticker is everywhere.
            </p>
            <div className="mt-auto grid grid-cols-2 gap-px border border-border bg-border">
              <div className="bg-card px-3 py-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Network
                </div>
                <div className="mt-1 font-mono text-sm font-bold text-foreground">Solana</div>
              </div>
              <div className="bg-card px-3 py-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Status
                </div>
                <div className="mt-1 font-mono text-sm font-bold text-[var(--color-positive)]">
                  LIVE
                </div>
              </div>
            </div>
          </div>
        </Panel>
      </div>
    </section>
  )
}
