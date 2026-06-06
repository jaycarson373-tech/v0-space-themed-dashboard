import { RocketMark } from "@/components/rocket-mark"
import { Github, Send, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border">
      <div className="pointer-events-none absolute inset-0 star-field opacity-40" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6">
        <div className="flex items-center gap-2">
          <RocketMark className="block h-7 w-7" />
          <span className="font-mono text-base font-bold text-foreground">
            SPCX<span className="text-primary">6900</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          {[Twitter, Send, Github].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="rounded-md border border-border bg-card/60 p-2.5 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Social link"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
          SPCX6900 is a community meme token with no intrinsic value or
          expectation of financial return. Not financial advice. Do your own
          research before boarding the rocket.
        </p>
        <p className="font-mono text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} SPCX6900 — To the moon and beyond.
        </p>
      </div>
    </footer>
  )
}
