import { SectionHeading } from "@/components/section-heading"
import { POLICY } from "@/lib/mock-data"
import { ArrowRight } from "lucide-react"

export function DistributionPolicy() {
  return (
    <section className="relative scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Distribution Policy"
          title="100% of fees, back to holders"
          desc="No team cut. No vesting games. The vault is a machine — fees in, SPCX out, every epoch."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {POLICY.map((p, i) => (
            <div key={p.id} className="glass-panel relative overflow-hidden rounded-xl p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-3xl font-bold tabular-nums text-accent/80">
                  {p.id}
                </span>
                {i < POLICY.length - 1 && (
                  <ArrowRight className="hidden h-4 w-4 text-muted-foreground md:block" />
                )}
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
