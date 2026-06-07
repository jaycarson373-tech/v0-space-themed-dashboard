type Scene = "hangar" | "observatory" | "spaceport" | "gate"

const SRC: Record<Scene, string> = {
  hangar: "/backgrounds/hangar.png",
  observatory: "/backgrounds/observatory.png",
  spaceport: "/backgrounds/spaceport.png",
  gate: "/backgrounds/gate.png",
}

/**
 * Semi-transparent cinematic background graphic.
 * Sits behind content with a vignette + gradient mask so text stays readable.
 */
export function SceneBackground({
  scene,
  opacity = 0.22,
  position = "center",
  fade = "bottom",
}: {
  scene: Scene
  opacity?: number
  position?: string
  /** which edge fades into the background color */
  fade?: "bottom" | "top" | "both"
}) {
  const mask =
    fade === "both"
      ? "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)"
      : fade === "top"
        ? "linear-gradient(to bottom, transparent, black 45%)"
        : "linear-gradient(to bottom, black 35%, transparent)"

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${SRC[scene]})`,
          backgroundPosition: position,
          opacity,
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
      />
      {/* tint so the image reads as monochrome background, not foreground content */}
      <div className="absolute inset-0 bg-background/40 mix-blend-multiply" />
      {/* vignette to anchor edges */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_30%,transparent_45%,var(--color-background)_100%)]" />
    </div>
  )
}
