import { SiteHeader } from "@/components/site-header"
import { MarketTicker } from "@/components/market-ticker"
import { Hero } from "@/components/hero"
import { DistributionPolicy } from "@/components/distribution-policy"
import { CountdownCta } from "@/components/countdown-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background">
      <SiteHeader />
      <MarketTicker />
      <Hero />
      <DistributionPolicy />
      <CountdownCta />
      <SiteFooter />
    </main>
  )
}
