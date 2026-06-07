import { BrandMark } from "@/components/brand-mark"

const LINKS = [
  "Brand Kit",
  "Telegram",
  "DexTools",
  "Dexscreener",
  "Jupiter SOL",
  "Solscan",
  "X / Twitter",
  "MICA Compliance",
]

const DISCLAIMER =
  "SPCX6900 Token is a meme token created for entertainment and parody purposes only. SPCX6900 has no association with any stocks, equities, securities, indices, companies, or business entities, including SpaceX. Any resemblance or association between SPCX6900 and the SpaceX IPO narrative is purely satirical and humorous. This website is unofficial and operates solely as a fan page. SPCX6900 is a meme token with no intrinsic value or expectation of financial return. Nothing on this website is financial, legal, or professional advice."

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <BrandMark size={36} />
          <nav className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-4">
            {LINKS.map((l) => (
              <a
                key={l}
                href="#"
                className="font-mono text-xs tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 select-none">
          <div className="font-mono text-[15vw] font-extrabold leading-none tracking-tighter text-foreground/[0.04] sm:text-[12vw]">
            SPCX6900
          </div>
        </div>

        <p className="mt-6 max-w-4xl text-pretty text-[11px] leading-relaxed text-muted-foreground">
          {DISCLAIMER}
        </p>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
          {"© "}
          {new Date().getFullYear()} SPCX6900 // Unofficial Parody Fan Page
        </p>
      </div>
    </footer>
  )
}
