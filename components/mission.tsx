import { Flame, Lock, Rocket, Globe, Shield, Zap } from "lucide-react"

const missions = [
  {
    icon: Flame,
    title: "Deflationary Burn",
    body: "A portion of every transaction is incinerated in the thrusters, reducing supply with every orbit.",
  },
  {
    icon: Lock,
    title: "Liquidity Locked",
    body: "Launch pad liquidity is locked and the contract renounced — no mission abort, no rug.",
  },
  {
    icon: Shield,
    title: "Community Owned",
    body: "No team allocation games. The crew is the cap table. Every astronaut on the manifest counts.",
  },
  {
    icon: Zap,
    title: "Solana Speed",
    body: "Built on Solana for near-instant, near-zero-fee transfers. Escape velocity, on chain.",
  },
]

export function Mission() {
  return (
    <section id="mission" className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="max-w-xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Mission Brief
        </p>
        <h2 className="mt-1 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Engineered for the climb
        </h2>
        <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
          SPCX6900 is a community launch token built to reward conviction. Here
          is what keeps the rocket on trajectory.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {missions.map((m) => (
          <div
            key={m.title}
            className="flex gap-4 rounded-xl border border-border bg-card/60 p-5 backdrop-blur transition-colors hover:border-primary/40"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/15">
              <m.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{m.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {m.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Tokenomics() {
  const items = [
    { icon: Rocket, label: "Total Supply", value: "690B" },
    { icon: Flame, label: "Burn Rate", value: "1% / tx" },
    { icon: Globe, label: "Network", value: "Solana" },
    { icon: Lock, label: "LP Status", value: "Locked" },
  ]
  return (
    <section
      id="tokenomics"
      className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6"
    >
      <div className="overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur">
        <div className="relative border-b border-border p-6 sm:p-8">
          <div className="pointer-events-none absolute inset-0 nebula-glow opacity-60" />
          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Tokenomics
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Fuel composition
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
          {items.map((it) => (
            <div key={it.label} className="p-6 text-center sm:p-8">
              <it.icon className="mx-auto h-6 w-6 text-primary" />
              <p className="mt-3 font-mono text-2xl font-bold text-foreground">
                {it.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {it.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
