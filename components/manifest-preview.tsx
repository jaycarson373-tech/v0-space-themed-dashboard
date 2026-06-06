import { Panel, Stat } from "@/components/panel"
import { HoldersTable } from "@/components/holders-table"
import { TOP_HOLDERS } from "@/lib/mock-data"
import { ArrowRight } from "lucide-react"

export function ManifestPreview() {
  return (
    <section id="chart" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="border-t border-border pt-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--color-negative)]">
              Live Preview
            </span>
            <h2 className="mt-3 font-mono text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Flight Manifest
            </h2>
          </div>
          <a
            href="/dashboard"
            className="inline-flex items-center gap-2 border border-border bg-card px-5 py-2.5 font-mono text-xs font-bold tracking-[0.12em] text-foreground transition-colors hover:bg-secondary"
          >
            OPEN FULL DASHBOARD
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_1.6fr]">
          <Panel label="Manifest Stats">
            <div className="grid grid-cols-2 gap-px bg-border">
              <div className="bg-card">
                <Stat label="Total Holders" value="—" />
              </div>
              <div className="bg-card">
                <Stat label="Total Supply" value="—" />
              </div>
              <div className="bg-card">
                <Stat label="Top 100 Control" value="—" />
              </div>
              <div className="bg-card">
                <Stat label="Lead Whale" value="—" />
              </div>
            </div>
            <div className="border-t border-border px-4 py-3">
              <p className="font-mono text-[11px] leading-relaxed text-muted-foreground">
                <span className="text-[var(--color-negative)]">{"// "}</span>
                Values populate live from the 15-minute epoch runner on the full
                dashboard.
              </p>
            </div>
          </Panel>

          <Panel label="Top Holders // Preview">
            <HoldersTable holders={TOP_HOLDERS.slice(0, 8)} />
          </Panel>
        </div>
      </div>
    </section>
  )
}
