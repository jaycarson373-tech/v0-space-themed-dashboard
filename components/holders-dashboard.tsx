"use client"

import useSWR from "swr"
import { useState } from "react"
import type { HoldersResponse } from "@/lib/types"
import { StatCards } from "@/components/stat-cards"
import { HoldersTable } from "@/components/holders-table"
import { RefreshStatus } from "@/components/refresh-status"

const REFRESH_MS = 15 * 60 * 1000 // 15 minutes

const fetcher = (url: string) => fetch(url).then((r) => r.json() as Promise<HoldersResponse>)

export function HoldersDashboard() {
  const { data, error, isLoading, mutate, isValidating } = useSWR<HoldersResponse>(
    "/api/holders",
    fetcher,
    {
      refreshInterval: REFRESH_MS,
      revalidateOnFocus: false,
      keepPreviousData: true,
    },
  )

  const [manualRefreshing, setManualRefreshing] = useState(false)
  const onRefresh = async () => {
    setManualRefreshing(true)
    await mutate()
    setManualRefreshing(false)
  }

  return (
    <section id="dashboard" className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Flight Manifest
          </p>
          <h2 className="mt-1 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Top 100 Holders
          </h2>
          <p className="mt-2 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            The crew with the most fuel on board. Rankings recalibrate
            automatically every 15 minutes from on-chain data.
          </p>
        </div>
        <RefreshStatus
          fetchedAt={data?.fetchedAt}
          isRefreshing={manualRefreshing || isValidating}
          intervalMs={REFRESH_MS}
          onRefresh={onRefresh}
        />
      </div>

      <div className="mt-8">
        <StatCards data={data} isLoading={isLoading && !data} />
      </div>

      <div className="mt-8">
        {error ? (
          <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-6 text-center text-sm text-foreground">
            Lost telemetry signal. Could not load holder data.
          </div>
        ) : (
          <HoldersTable
            holders={data?.topHolders ?? []}
            isLoading={isLoading && !data}
          />
        )}
      </div>
    </section>
  )
}
