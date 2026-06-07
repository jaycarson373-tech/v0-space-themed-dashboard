"use client"

import { useEffect, useState } from "react"
import { EPOCH_STEPS, nextEpochBoundary, HAS_LIVE_DATA } from "@/lib/mock-data"
import { Panel } from "@/components/panel"
import { Loader2 } from "lucide-react"

function useEpochCountdown() {
  const [remaining, setRemaining] = useState<number | null>(null)

  useEffect(() => {
    let t = nextEpochBoundary()
    setRemaining(Math.max(0, t - Date.now()))
    const id = setInterval(() => {
      const now = Date.now()
      if (now >= t) t = nextEpochBoundary(now)
      setRemaining(Math.max(0, t - now))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return remaining
}

function fmt(ms: number | null) {
  if (ms === null) return "--:--"
  const total = Math.floor(ms / 1000)
  const m = Math.floor(total / 60)
  const s = total % 60
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
}

export function EpochRunner() {
  const remaining = useEpochCountdown()

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_1.6fr]">
      <Panel
        label="Epoch Status"
        right={
          <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
            {HAS_LIVE_DATA ? "Online" : "Awaiting Launch"}
          </span>
        }
      >
        <div className="p-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Distribution Interval
          </div>
          <div className="mt-1 font-mono text-4xl font-extrabold tabular-nums text-foreground">
            05:00
          </div>

          <div className="mt-5 border border-border bg-background px-4 py-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Next Cycle In
            </div>
            <div className="mt-1 font-mono text-3xl font-extrabold tabular-nums text-[var(--color-negative)]">
              {fmt(remaining)}
            </div>
          </div>

          <p className="mt-4 font-mono text-[11px] leading-relaxed text-muted-foreground">
            <span className="text-[var(--color-negative)]">{"// "}</span>
            {HAS_LIVE_DATA
              ? "Runner online. Live step status shown at right."
              : "Runner not yet live. Step status will appear once the vault is deployed."}
          </p>
        </div>
      </Panel>

      <Panel label="Process Steps">
        <ol className="divide-y divide-border/60">
          {EPOCH_STEPS.map((step, i) => (
            <li key={step} className="flex items-center gap-3 px-4 py-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-border text-muted-foreground">
                {HAS_LIVE_DATA ? (
                  <Loader2 className="h-3 w-3 animate-spin" />
                ) : (
                  <span className="font-mono text-[10px]">{i + 1}</span>
                )}
              </span>
              <span className="font-mono text-xs tracking-wide text-muted-foreground/70">
                {step}
              </span>
              <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/50">
                {HAS_LIVE_DATA ? "—" : "Idle"}
              </span>
            </li>
          ))}
        </ol>
      </Panel>
    </div>
  )
}
