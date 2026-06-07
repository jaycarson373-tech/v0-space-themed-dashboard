import Link from "next/link"
import { SectionHeading } from "@/components/section-heading"
import { Panel } from "@/components/panel"
import { LEDGER_STAGES, RECENT_SIGNATURES } from "@/lib/mock-data"
import { shortenAddress, timeAgo } from "@/lib/format"
import { ArrowRight, Check, Loader2, Clock } from "lucide-react"

function StageIcon({ state }: { state: string }) {
  if (state === "done")
    return (
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-positive)]/15 text-[var(--color-positive)]">
        <Check className="h-3.5 w-3.5" />
      </span>
    )
  if (state === "active")
    return (
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-accent">
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
      </span>
    )
  return (
    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-muted-foreground">
      <Clock className="h-3.5 w-3.5" />
    </span>
  )
}

export function LedgerPreview() {
  return (
    <section id="ledger" className="relative scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Distribution Ledger"
            title="Every payout, on-chain"
            desc="Track each epoch from fee accrual to confirmed payout. Fully transparent, fully verifiable."
          />
          <Link
            href="/dashboard#ledger"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card/40 px-5 py-2.5 text-[13px] font-semibold text-foreground backdrop-blur transition-colors hover:bg-card/70"
          >
            Open Full Ledger
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_1.4fr]">
          <Panel label="Current Epoch Pipeline">
            <ol className="divide-y divide-border/40">
              {LEDGER_STAGES.map((stage) => (
                <li key={stage.id} className="flex items-center gap-3 px-5 py-4">
                  <StageIcon state={stage.state} />
                  <div>
                    <div className="text-sm font-semibold text-foreground">{stage.label}</div>
                    <div className="text-xs text-muted-foreground">{stage.desc}</div>
                  </div>
                </li>
              ))}
            </ol>
          </Panel>

          <Panel label="Recent Transactions">
            <ul className="divide-y divide-border/40">
              {RECENT_SIGNATURES.map((tx) => (
                <li
                  key={tx.sig}
                  className="flex items-center justify-between gap-4 px-5 py-3.5 transition-colors hover:bg-secondary/30"
                >
                  <span className="font-mono text-xs text-foreground">
                    {shortenAddress(tx.sig, 6)}
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {timeAgo(tx.ts)}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] ${
                        tx.status === "confirmed"
                          ? "bg-[var(--color-positive)]/15 text-[var(--color-positive)]"
                          : "bg-accent/15 text-accent"
                      }`}
                    >
                      {tx.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </section>
  )
}
