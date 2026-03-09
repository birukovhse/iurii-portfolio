/**
 * Static squares on background for mobile hero.
 * Desktop uses GenerativeAnimation instead.
 */
export default function StaticHeroShapes() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 md:hidden"
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="hero-sq-orange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F97B27" />
            <stop offset="100%" stopColor="#F6232A" />
          </linearGradient>
        </defs>
        {/* Squares scattered on background */}
        <rect x="55" y="10" width="18" height="18" fill="url(#hero-sq-orange)" opacity={0.35} transform="rotate(12 64 19)" />
        <rect x="70" y="35" width="14" height="14" fill="url(#hero-sq-orange)" opacity={0.28} transform="rotate(-8 77 42)" />
        <rect x="60" y="55" width="22" height="22" fill="url(#hero-sq-orange)" opacity={0.4} transform="rotate(5 71 66)" />
        <rect x="75" y="75" width="16" height="16" fill="url(#hero-sq-orange)" opacity={0.3} transform="rotate(-15 83 83)" />
        <rect x="50" y="80" width="12" height="12" fill="#F84C29" opacity={0.25} transform="rotate(20 56 86)" />
      </svg>
    </div>
  );
}
