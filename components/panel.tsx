import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export function Panel({
  label,
  className,
  children,
  right,
  accent = false,
}: {
  label?: string
  className?: string
  children: ReactNode
  right?: ReactNode
  accent?: boolean
}) {
  return (
    <div
      className={cn(
        "glass-panel overflow-hidden rounded-xl",
        accent && "glass-panel-accent",
        className,
      )}
    >
      {label && (
        <div className="flex items-center justify-between border-b border-border/70 px-5 py-3">
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            {label}
          </span>
          {right}
        </div>
      )}
      {children}
    </div>
  )
}

export function Stat({
  label,
  value,
  sub,
  accent,
}: {
  label: string
  value: ReactNode
  sub?: ReactNode
  accent?: "positive" | "negative" | "default"
}) {
  const valueColor =
    accent === "positive"
      ? "text-[var(--color-positive)]"
      : accent === "negative"
        ? "text-[var(--color-negative)]"
        : "text-foreground"
  return (
    <div className="px-5 py-4">
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </div>
      <div className={cn("mt-1.5 text-2xl font-bold tabular-nums tracking-tight", valueColor)}>
        {value}
      </div>
      {sub && <div className="mt-1 text-xs text-muted-foreground">{sub}</div>}
    </div>
  )
}

// Reusable headline-style stat card for the vault preview grid
export function StatCard({
  label,
  value,
  sub,
  live = false,
}: {
  label: string
  value: ReactNode
  sub?: ReactNode
  live?: boolean
}) {
  return (
    <div className="glass-panel group relative overflow-hidden rounded-xl p-5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </span>
        {live && (
          <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--color-negative)]">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-[var(--color-negative)]" />
            Live
          </span>
        )}
      </div>
      <div className="mt-3 text-3xl font-bold tabular-nums tracking-tight text-foreground">
        {value}
      </div>
      {sub && <div className="mt-1.5 text-xs text-muted-foreground">{sub}</div>}
      <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/10 blur-2xl transition-opacity group-hover:opacity-100" />
    </div>
  )
}
