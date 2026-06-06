import { SiteHeader } from "@/components/site-header"
import { MarketTicker } from "@/components/market-ticker"
import { Hero } from "@/components/hero"
import { IpoCentury } from "@/components/ipo-century"
import { ManifestPreview } from "@/components/manifest-preview"
import { MissionBrief, Tokenomics } from "@/components/mission-brief"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background">
      <SiteHeader />
      <MarketTicker />
      <Hero />
      <IpoCentury />
      <ManifestPreview />
      <MissionBrief />
      <Tokenomics />
      <SiteFooter />
    </main>
  )
}
