import { RocketMark } from "@/components/rocket-mark"

function XLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const NAV = ["CHART", "DYOR", "SWAP", "BRIDGE"]

const TICKER = [
  { sym: "SPX500", chg: "-99%", up: false },
  { sym: "SPCX6900", chg: "+69,000%", up: true },
  { sym: "MSFT", chg: "-99%", up: false },
  { sym: "NVDA", chg: "-99%", up: false },
  { sym: "AAPL", chg: "-99%", up: false },
  { sym: "BRK.B", chg: "-99%", up: false },
  { sym: "JPM", chg: "-99%", up: false },
  { sym: "META", chg: "-99%", up: false },
  { sym: "AMZN", chg: "-99%", up: false },
  { sym: "GOOG", chg: "-99%", up: false },
]

export function SiteHeader() {
  return (
    <header>
      {/* Masthead */}
      <div className="bg-foreground text-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <RocketMark className="h-9 w-9" />
            <span className="font-mono text-3xl font-extrabold tracking-tight sm:text-4xl">
              SPCX6900
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#"
              aria-label="Follow on X"
              className="rounded-full border border-background/40 p-2 transition-colors hover:bg-background hover:text-foreground"
            >
              <XLogo className="h-4 w-4" />
            </a>
            <a
              href="#dashboard"
              className="hidden rounded-sm bg-background px-4 py-2 text-sm font-bold text-foreground transition-transform hover:scale-105 sm:inline-block"
            >
              BUY $SPCX6900
            </a>
          </div>
        </div>
      </div>

      {/* Nav bar */}
      <nav className="border-y-2 border-foreground bg-secondary">
        <ul className="mx-auto flex max-w-7xl items-center px-4 sm:px-6">
          {NAV.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="block border-r border-border px-4 py-2 text-sm font-bold tracking-wide text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Stock ticker strip */}
      <div className="overflow-x-auto border-b-2 border-foreground bg-foreground">
        <div className="mx-auto flex max-w-7xl items-stretch px-2">
          {TICKER.map((t) => (
            <div
              key={t.sym}
              className="flex items-center gap-1.5 whitespace-nowrap border-r border-background/25 px-3 py-1.5 font-mono text-xs text-background"
            >
              <span className="font-bold">{t.sym}</span>
              <span className={t.up ? "rounded-sm bg-background px-1 font-bold text-foreground" : "opacity-70"}>
                {t.up ? "▲" : "▼"} {t.chg}
              </span>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
