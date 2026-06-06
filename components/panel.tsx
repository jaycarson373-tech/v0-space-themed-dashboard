import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export function Panel({
  label,
  className,
  children,
  right,
}: {
  label?: string
  className?: string
  children: ReactNode
  right?: ReactNode
}) {
  return (
    <div className={cn("border border-border bg-card", className)}>
      {label && (
        <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
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
    <div className="px-4 py-3.5">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
      <div className={cn("mt-1 font-mono text-lg font-bold tabular-nums", valueColor)}>
        {value}
      </div>
      {sub && <div className="mt-0.5 text-xs text-muted-foreground">{sub}</div>}
    </div>
  )
}
