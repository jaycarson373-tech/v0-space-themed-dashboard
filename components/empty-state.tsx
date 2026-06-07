import type { ReactNode } from "react"

export function EmptyState({
  title = "No data yet",
  hint,
  icon,
}: {
  title?: string
  hint?: ReactNode
  icon?: ReactNode
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-6 py-12 text-center">
      {icon && <div className="text-muted-foreground/50">{icon}</div>}
      <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {title}
      </div>
      {hint && (
        <p className="max-w-xs font-mono text-[11px] leading-relaxed text-muted-foreground/70">
          {hint}
        </p>
      )}
    </div>
  )
}
