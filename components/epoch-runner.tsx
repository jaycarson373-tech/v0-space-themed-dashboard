"use client"

import { useEffect, useState } from "react"
import { EPOCH, EPOCH_STEPS } from "@/lib/mock-data"
import { Panel } from "@/components/panel"
import { Check, Loader2 } from "lucide-react"

function useCountdown(target: number) {
  const [remaining, setRemaining] = useState(() => Math.max(0, target - Date.now()))
  useEffect(() => {
    const id = setInterval(() => {
      setRemaining(Math.max(0, target - Date.now()))
    }, 1000)
    return () => clearInterval(id)
  }, [target])
  return remaining
}

function fmt(ms: number) {
  const total = Math.floor(ms / 1000)
  const m = Math.floor(total / 60)
  const s = total % 60
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
}

export function EpochRunner() {
  const remaining = useCountdown(EPOCH.nextEpochAt)
  const current = EPOCH.currentStepIndex

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_1.6fr]">
      <Panel
        label="Epoch Status"
        right={
          <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-positive)]">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-[var(--color-positive)]" />
            Online
          </span>
        }
      >
        <div className="p-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Current Epoch
          </div>
          <div className="mt-1 font-mono text-4xl font-extrabold tabular-nums text-foreground">
            #{EPOCH.number}
          </div>

          <div className="mt-5 border border-border bg-background px-4 py-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Next Epoch In
            </div>
            <div className="mt-1 font-mono text-3xl font-extrabold tabular-nums text-[var(--color-negative)]">
              {fmt(remaining)}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-px border border-border bg-border">
            <div className="bg-card px-3 py-2.5">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                Interval
              </div>
              <div className="mt-0.5 font-mono text-sm font-bold text-foreground">15:00</div>
            </div>
            <div className="bg-card px-3 py-2.5">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                Last Update
              </div>
              <div className="mt-0.5 font-mono text-sm font-bold text-foreground">
                {new Date(EPOCH.lastUpdated).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </div>
            </div>
          </div>
        </div>
      </Panel>

      <Panel label="Process Steps">
        <ol className="divide-y divide-border/60">
          {EPOCH_STEPS.map((step, i) => {
            const done = i < current
            const active = i === current
            return (
              <li key={step} className="flex items-center gap-3 px-4 py-2.5">
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center border ${
                    done
                      ? "border-[var(--color-positive)]/50 bg-[var(--color-positive)]/15 text-[var(--color-positive)]"
                      : active
                        ? "border-[var(--color-negative)]/60 bg-[var(--color-negative)]/15 text-[var(--color-negative)]"
                        : "border-border text-muted-foreground"
                  }`}
                >
                  {done ? (
                    <Check className="h-3 w-3" />
                  ) : active ? (
                    <Loader2 className="h-3 w-3 animate-spin" />
                  ) : (
                    <span className="font-mono text-[10px]">{i + 1}</span>
                  )}
                </span>
                <span
                  className={`font-mono text-xs tracking-wide ${
                    active ? "text-foreground" : done ? "text-muted-foreground" : "text-muted-foreground/60"
                  }`}
                >
                  {step}
                </span>
                {active && (
                  <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-negative)]">
                    Running
                  </span>
                )}
              </li>
            )
          })}
        </ol>
      </Panel>
    </div>
  )
}
