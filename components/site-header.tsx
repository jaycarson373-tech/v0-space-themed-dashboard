import { RocketMark } from "@/components/rocket-mark"
import { Rocket, Send } from "lucide-react"

function XLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <RocketMark className="block h-8 w-8" />
          <span className="font-mono text-lg font-bold tracking-tight text-foreground">
            SPCX<span className="text-primary"> Mission</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a href="#dashboard" className="transition-colors hover:text-foreground">
            Holders
          </a>
          <a href="#mission" className="transition-colors hover:text-foreground">
            Mission
          </a>
          <a href="#tokenomics" className="transition-colors hover:text-foreground">
            Tokenomics
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#"
            aria-label="Follow on X"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <XLogo className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="Telegram"
            className="hidden rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:block"
          >
            <Send className="h-4 w-4" />
          </a>
          <a
            href="#dashboard"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            <Rocket className="h-4 w-4" />
            BUY $SPCX6900
          </a>
        </div>
      </div>
    </header>
  )
}
