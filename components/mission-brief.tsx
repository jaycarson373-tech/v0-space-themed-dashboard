import { Flame, Lock, Users, Zap } from "lucide-react"
import { TOKEN } from "@/lib/mock-data"

const BRIEF = [
  { icon: Flame, title: "Deflationary Burn", body: "Every transaction burns supply. Fewer seats, higher altitude." },
  { icon: Lock, title: "Liquidity Locked", body: "LP locked so the launch pad stays bolted to the ground." },
  { icon: Users, title: "Community Owned", body: "No insiders steering the rocket. The manifest is the mission." },
  { icon: Zap, title: "Solana Speed", body: "Sub-second finality. Telemetry updates at orbital velocity." },
]

const FUEL = [
  { value: "690B", label: "Total Supply" },
  { value: TOKEN.burnRate, label: "Burn Rate" },
  { value: "Solana", label: "Network" },
  { value: TOKEN.lpStatus, label: "LP Status" },
]

export function MissionBrief() {
  return (
    <section id="swap" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="border-t border-border pt-10">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--color-negative)]">
          Systems Check
        </span>
        <h2 className="mt-3 font-mono text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Mission Brief
        </h2>

        <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {BRIEF.map((b) => (
            <div key={b.title} className="bg-card p-5">
              <b.icon className="h-5 w-5 text-foreground" />
              <h3 className="mt-4 font-mono text-sm font-bold tracking-wide text-foreground">
                {b.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Tokenomics() {
  return (
    <section id="bridge" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="border-t border-border pt-10">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--color-negative)]">
          Propulsion
        </span>
        <h2 className="mt-3 font-mono text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Fuel Composition
        </h2>

        <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {FUEL.map((f) => (
            <div key={f.label} className="bg-card px-5 py-7 text-center">
              <div className="font-mono text-3xl font-extrabold tabular-nums text-foreground">
                {f.value}
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {f.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
