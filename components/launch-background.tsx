export function LaunchBackground({
  withGrid = true,
  withBeams = true,
}: {
  withGrid?: boolean
  withBeams?: boolean
}) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* deep atmosphere glows */}
      <div className="absolute inset-0 launch-atmosphere" />
      {/* drifting starfield */}
      <div className="absolute inset-0 star-field opacity-60 animate-twinkle" />
      {/* spotlight beams from above */}
      {withBeams && (
        <>
          <div className="absolute left-[18%] top-0 h-[70vh] w-[40vw] -translate-x-1/2 spotlight-beam animate-beam" />
          <div className="absolute left-[82%] top-0 h-[70vh] w-[40vw] -translate-x-1/2 spotlight-beam animate-beam [animation-delay:2s]" />
        </>
      )}
      {/* perspective launchpad floor */}
      {withGrid && (
        <div className="absolute inset-x-0 bottom-0 h-[55%]">
          <div className="absolute inset-0 launchpad-grid" />
        </div>
      )}
      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_40%,oklch(0.08_0.01_250_/_0.8)_100%)]" />
    </div>
  )
}
