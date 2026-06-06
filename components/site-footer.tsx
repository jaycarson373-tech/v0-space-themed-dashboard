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

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-foreground bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <h2 className="font-mono text-5xl font-extrabold tracking-tight text-foreground sm:text-7xl">
          SPCX6900
        </h2>

        <ul className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 border-y border-border py-3">
          {LINKS.map((link) => (
            <li key={link} className="flex items-center gap-3">
              <a
                href="#"
                className="text-sm font-bold text-foreground underline-offset-2 hover:underline"
              >
                {link}
              </a>
              <span className="text-border">|</span>
            </li>
          ))}
        </ul>

        <p className="mt-4 max-w-4xl text-xs leading-relaxed text-muted-foreground">
          SPCX6900 Token is a meme token created for entertainment purposes only
          and has no association with any stocks, equities, securities, indices,
          companies, or other financial or business entities, including SpaceX.
          Any resemblance or association between SPCX6900 and the &quot;SpaceX
          IPO&quot; is purely coincidental and intended for satirical or humorous
          purposes. All depictions on this site are intended as parody and should
          not be taken as factual representations. This website is unofficial and
          operates solely as a fan page. SPCX6900 is a meme token with no
          intrinsic value or expectation of financial return. By using this site,
          users acknowledge that all interactions are at their own risk. This site
          does not offer financial, legal, or professional advice. All content is
          provided &quot;as-is,&quot; without warranties of any kind.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} by $SPCX. All rights reserved!
          </p>
          <p className="font-mono text-xs font-bold text-foreground">
            Powered by Mayhem
          </p>
        </div>
      </div>
    </footer>
  )
}
