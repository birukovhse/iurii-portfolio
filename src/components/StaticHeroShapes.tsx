/**
 * Static SVG for mobile hero — mimics the generative animation look
 * without canvas/JS. Desktop uses GenerativeAnimation instead.
 */
export default function StaticHeroShapes() {
  return (
    <svg
      className="h-full w-full object-cover"
      viewBox="0 0 400 800"
      fill="none"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="hero-orange" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F97B27" />
          <stop offset="100%" stopColor="#F6232A" />
        </linearGradient>
      </defs>
      {/* Large blob */}
      <path
        d="M80 120 Q180 80 260 140 Q320 200 280 320 Q240 420 160 380 Q80 340 60 220 Q40 160 80 120"
        fill="url(#hero-orange)"
        opacity={0.85}
      />
      {/* Medium shape */}
      <path
        d="M120 480 Q200 440 280 500 Q340 560 300 640 Q260 720 180 680 Q100 640 100 540 Q100 500 120 480"
        fill="url(#hero-orange)"
        opacity={0.7}
      />
      {/* Small accent */}
      <path
        d="M200 200 Q240 180 260 220 Q280 260 250 300 Q220 340 180 320 Q140 300 160 250 Q180 210 200 200"
        fill="#F84C29"
        opacity={0.9}
      />
    </svg>
  );
}
