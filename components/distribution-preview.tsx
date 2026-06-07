"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { SectionHeading } from "@/components/section-heading"
import { Panel } from "@/components/panel"
import { EPOCH, DISTRIBUTION, EPOCH_STEPS } from "@/lib/mock-data"
import { formatNumber } from "@/lib/format"
import { ArrowRight } from "lucide-react"

function useCountdown(target: number) {
  const [remaining, setRemaining] = useState(() => Math.max(0, target - Date.now()))
  useEffect(() => {
    const id = setInterval(() => setRemaining(Math.max(0, target - Date.now())), 1000)
    return () => clearInterval(id)
  }, [target])
  return remaining
}

function clock(ms: number) {
  const total = Math.floor(ms / 1000)
  const m = Math.floor(total / 60)
  const s = total % 60
  return { m: String(m).padStart(2, "0"), s: String(s).padStart(2, "0") }
}

export function DistributionPreview() {
  const remaining = useCountdown(EPOCH.nextEpochAt)
  const { m, s } = clock(remaining)
  const progress = Math.min(100, Math.round((EPOCH.currentStepIndex / (EPOCH_STEPS.length - 1)) * 100))

  return (
    <section className="relative scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="SPCX Distribution"
          title="Next distribution is inbound"
          desc="Every epoch claims fees, buys SPCX, and pays every eligible holder. Here's the live countdown."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.3fr_1fr]">
          {/* primary countdown panel */}
          <Panel label="Next Distribution" accent right={
            <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-negative)]">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-[var(--color-negative)]" />
              Live
            </span>
          }>
            <div className="p-6 sm:p-8">
              <div className="flex items-end gap-2">
                <div className="flex items-baseline gap-1 font-mono text-7xl font-bold tabular-nums tracking-tight text-foreground text-glow sm:text-8xl">
                  <span>{m}</span>
                  <span className="text-accent">:</span>
                  <span>{s}</span>
                </div>
                <span className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  min : sec
                </span>
              </div>

              {/* epoch progress */}
              <div className="mt-8">
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  <span>Epoch #{EPOCH.number}</span>
                  <span>{progress}% complete</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-accent shadow-[0_0_16px_-2px_var(--color-accent)] transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="mt-3 font-mono text-xs text-muted-foreground">
                  <span className="text-accent">{"› "}</span>
                  {EPOCH_STEPS[EPOCH.currentStepIndex]}…
                </p>
              </div>
            </div>
          </Panel>

          {/* stats column */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="grid grid-cols-2 gap-4">
              <Panel>
                <div className="px-5 py-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Recipients
                  </div>
                  <div className="mt-1.5 text-2xl font-bold tabular-nums text-foreground">
                    {formatNumber(DISTRIBUTION.recipientsThisRound)}
                  </div>
                </div>
              </Panel>
              <Panel>
                <div className="px-5 py-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Rounds Today
                  </div>
                  <div className="mt-1.5 text-2xl font-bold tabular-nums text-foreground">
                    {DISTRIBUTION.roundsToday}
                  </div>
                </div>
              </Panel>
            </div>
            <Panel>
              <div className="px-5 py-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Total Paid (All-Time)
                </div>
                <div className="mt-1.5 text-3xl font-bold tabular-nums text-[var(--color-positive)]">
                  {formatNumber(DISTRIBUTION.paidAllTime)} SPCX
                </div>
                <Link
                  href="/dashboard#ledger"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  View distribution ledger
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Panel>
          </div>
        </div>
      </div>
    </section>
  )
}
