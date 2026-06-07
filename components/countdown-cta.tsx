"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { SectionHeading } from "@/components/section-heading"
import { Panel } from "@/components/panel"
import { EPOCH_STEPS, nextEpochBoundary } from "@/lib/mock-data"
import { ArrowRight } from "lucide-react"

function useEpochCountdown() {
  const [target, setTarget] = useState<number | null>(null)
  const [remaining, setRemaining] = useState<number | null>(null)

  useEffect(() => {
    // computed on the client to avoid hydration mismatch
    let t = nextEpochBoundary()
    setTarget(t)
    setRemaining(Math.max(0, t - Date.now()))
    const id = setInterval(() => {
      const now = Date.now()
      if (now >= t) t = nextEpochBoundary(now)
      setTarget(t)
      setRemaining(Math.max(0, t - now))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return remaining
}

function clock(ms: number | null) {
  if (ms === null) return { m: "--", s: "--" }
  const total = Math.floor(ms / 1000)
  return {
    m: String(Math.floor(total / 60)).padStart(2, "0"),
    s: String(total % 60).padStart(2, "0"),
  }
}

export function CountdownCta() {
  const remaining = useEpochCountdown()
  const { m, s } = clock(remaining)

  return (
    <section className="relative scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Distribution Cycle"
          title="Every 15 minutes, like clockwork"
          desc="The vault runs on a fixed schedule. Here's the countdown to the next distribution cycle — full telemetry lives in the dashboard."
        />

        <div className="mt-10">
          <Panel
            accent
            label="Next Distribution Cycle"
            right={
              <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-negative)]">
                <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-[var(--color-negative)]" />
                Scheduled
              </span>
            }
          >
            <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
              {/* countdown */}
              <div>
                <div className="flex items-end gap-3">
                  <div className="flex items-baseline gap-1 font-mono text-7xl font-bold tabular-nums tracking-tight text-foreground text-glow sm:text-8xl">
                    <span>{m}</span>
                    <span className="text-accent">:</span>
                    <span>{s}</span>
                  </div>
                  <span className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    min : sec
                  </span>
                </div>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  At the top of each cycle the vault claims fees, buys SPCX, snapshots holders, and
                  pays out — fully automated, on-chain.
                </p>

                {/* process chips */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {EPOCH_STEPS.slice(0, 4).map((step) => (
                    <span
                      key={step}
                      className="rounded-full border border-border/70 bg-card/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
                    >
                      {step}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col items-stretch gap-3 lg:w-64">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-semibold text-accent-foreground shadow-[0_0_40px_-8px_var(--color-accent)] transition-transform hover:scale-[1.03]"
                >
                  Enter the Dashboard
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="text-center font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  Live epoch runner · holders · ledger
                </p>
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </section>
  )
}
