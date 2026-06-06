"use client"

import { useEffect, useState } from "react"
import { RefreshCw, Wifi, WifiOff } from "lucide-react"

function fmtCountdown(ms: number): string {
  if (ms <= 0) return "00:00"
  const total = Math.floor(ms / 1000)
  const m = Math.floor(total / 60)
  const s = total % 60
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
}

export function RefreshStatus({
  fetchedAt,
  isLive,
  isRefreshing,
  intervalMs,
  onRefresh,
}: {
  fetchedAt?: number
  isLive?: boolean
  isRefreshing: boolean
  intervalMs: number
  onRefresh: () => void
}) {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const nextIn = fetchedAt ? fetchedAt + intervalMs - now : 0

  return (
    <div className="flex flex-col items-start gap-2 sm:items-end">
      <div className="flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs backdrop-blur">
        {isLive ? (
          <>
            <Wifi className="h-3.5 w-3.5 text-accent" />
            <span className="text-accent">Live on-chain</span>
          </>
        ) : (
          <>
            <WifiOff className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-muted-foreground">Simulated</span>
          </>
        )}
        <span className="text-border">|</span>
        <span className="font-mono text-muted-foreground">
          Next refuel {fmtCountdown(nextIn)}
        </span>
      </div>
      <button
        type="button"
        onClick={onRefresh}
        disabled={isRefreshing}
        className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted disabled:opacity-60"
      >
        <RefreshCw className={`h-3.5 w-3.5 ${isRefreshing ? "animate-spin" : ""}`} />
        {isRefreshing ? "Refueling…" : "Refresh now"}
      </button>
    </div>
  )
}
