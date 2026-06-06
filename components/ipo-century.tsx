import { Wallet, Camera, Crown, ArrowRight } from "lucide-react"

const STEPS = [
  {
    n: "01",
    icon: Wallet,
    title: "Hold SPCX6900",
    body: "Your wallet is your boarding pass.",
  },
  {
    n: "02",
    icon: Camera,
    title: "Snapshot at Launch",
    body: "When the market narrative reaches launch mode, holders on the manifest become the center of the story.",
  },
  {
    n: "03",
    icon: Crown,
    title: "Claim the Meta",
    body: "SPCX6900 holders are positioned around the SPCX xStock narrative, tokenized stock mania, and the biggest retail IPO hype cycle ever.",
  },
]

export function IpoCentury() {
  return (
    <section id="dyor" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="border-t border-border pt-10">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--color-negative)]">
          Flight Plan
        </span>
        <h2 className="mt-3 text-balance font-mono text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          The IPO of the Century
        </h2>
        <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          The most hyped listing narrative of all time, memeified on Solana.
        </p>

        <div className="mt-8 grid gap-px border border-border bg-border md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="relative bg-card p-6">
              <div className="flex items-center justify-between">
                <s.icon className="h-5 w-5 text-foreground" />
                <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-5 font-mono text-base font-bold tracking-wide text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-col items-start justify-between gap-4 border border-[var(--color-negative)]/40 bg-[var(--color-negative)]/10 p-5 sm:flex-row sm:items-center">
          <p className="font-mono text-sm leading-relaxed text-foreground">
            <span className="text-[var(--color-negative)]">{"// "}</span>
            Top 100 holders ride first class — the bigger the bag, the bigger the
            seat on the manifest.
          </p>
          <a
            href="/dashboard"
            className="inline-flex shrink-0 items-center gap-2 border border-border bg-background px-5 py-2.5 font-mono text-xs font-bold tracking-[0.12em] text-foreground transition-colors hover:bg-secondary"
          >
            SEE DASHBOARD
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
