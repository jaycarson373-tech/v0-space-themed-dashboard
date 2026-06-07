import Link from "next/link"
import { SectionHeading } from "@/components/section-heading"
import { Panel } from "@/components/panel"
import { HoldersTable } from "@/components/holders-table"
import { TOP_HOLDERS, TOP_100_CONTROL, MARKET, TOKEN } from "@/lib/mock-data"
import { formatNumber } from "@/lib/format"
import { ArrowRight } from "lucide-react"

export function ShareholdersPreview() {
  const stats = [
    { label: "Total Holders", value: formatNumber(MARKET.totalHolders) },
    { label: "Total Supply", value: "690B" },
    { label: "Top 100 Control", value: `${TOP_100_CONTROL}%` },
    { label: "Network", value: TOKEN.network },
  ]

  return (
    <section id="shareholders" className="relative scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Major Shareholders"
            title="Who's on the cap table"
            desc="The biggest bags ride first class. Every holder earns SPCX pro-rata each epoch."
          />
          <Link
            href="/dashboard#holders"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card/40 px-5 py-2.5 text-[13px] font-semibold text-foreground backdrop-blur transition-colors hover:bg-card/70"
          >
            View All Holders
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.7fr_1fr]">
          <Panel label="Top Shareholders / Preview">
            <HoldersTable holders={TOP_HOLDERS.slice(0, 8)} />
          </Panel>

          <div className="grid grid-cols-2 gap-4 self-start">
            {stats.map((s) => (
              <Panel key={s.label}>
                <div className="px-5 py-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {s.label}
                  </div>
                  <div className="mt-2 text-2xl font-bold tabular-nums tracking-tight text-foreground">
                    {s.value}
                  </div>
                </div>
              </Panel>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
