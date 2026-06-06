import { RocketMark } from "@/components/rocket-mark"

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl border-x-2 border-foreground px-4 py-8 sm:px-6">
      <div className="grid gap-6 md:grid-cols-3 md:divide-x md:divide-border">
        {/* Left: lead image */}
        <figure className="md:pr-6">
          <div className="flex aspect-[4/5] items-center justify-center border border-foreground bg-secondary">
            <RocketMark className="h-32 w-32" />
          </div>
          <figcaption className="mt-2 text-center text-xs italic text-muted-foreground">
            ($SPCX6900 EXPLAINER FOR MID CURVE)
          </figcaption>
        </figure>

        {/* Middle: The Big Take */}
        <article className="md:px-6">
          <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
            The Big Take
          </p>
          <h1 className="mt-1 text-balance font-mono text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
            The most hyped IPO of all time is coming &mdash; and holders get the airdrop
          </h1>
          <div className="mt-3 text-sm leading-relaxed text-foreground/90 [&>p]:mb-3">
            <p>
              SpaceX is going public, and SPCX6900 is the ticket aboard. In a
              moment that could redefine how retail accesses the biggest listing
              in market history, thousands are coming to grips with a simple
              truth: you no longer need a broker, a waitlist, or accreditation to
              ride the rocket.
            </p>
            <p>
              Every SPCX6900 holder is slated to be{" "}
              <strong>airdropped SPCX xStock</strong> &mdash; tokenized exposure
              to the listing &mdash; proportional to their position when the
              snapshot is taken. Hold the token, claim a slice of the launch. The
              bigger the bag, the bigger the drop.
            </p>
            <p>
              This is more than a meme. It is a redefinition of who gets a seat at
              the table for the IPO of the century.
            </p>
          </div>
        </article>

        {/* Right: WTF is SPCX6900 */}
        <aside className="md:pl-6">
          <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
            WTF is SPCX6900?
          </p>
          <div className="mt-3 flex justify-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-foreground bg-secondary">
              <RocketMark className="h-16 w-16" />
            </div>
          </div>
          <p className="mt-3 text-center font-mono text-lg font-bold text-foreground">
            This tiny coin is launching to orbit.
          </p>
          <p className="mt-2 text-center text-sm leading-relaxed text-foreground/90">
            Go search &quot;SPCX6900&quot; on X. Go ask about the SpaceX IPO. Go
            check the top 100 holders below. We are{" "}
            <strong>
              <em>everywhere</em>
            </strong>
            .
          </p>
          <div className="mt-4 flex justify-center">
            <a
              href="#dashboard"
              className="rounded-sm bg-foreground px-5 py-2 text-sm font-bold text-background transition-transform hover:scale-105"
            >
              BUY $SPCX6900
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}
