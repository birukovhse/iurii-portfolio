import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import GenerativeAnimation, { type HoverMode } from '../components/GenerativeAnimation';
import StaticHeroShapes from '../components/StaticHeroShapes';

const roles = [
  {
    lines: ['AI Automation', 'Specialist'],
    to: '/ai-automation',
    hoverColor: '#FF4500',
    hoverMode: 'line' as HoverMode,
    index: '01',
  },
  {
    lines: ['AD Creative', 'Designer'],
    to: '/ad-creatives',
    hoverColor: '#F04A1E',
    hoverMode: 'pulse' as HoverMode,
    index: '02',
  },
  {
    lines: ['Freelance Graphic', 'Designer'],
    to: '/design-events',
    hoverColor: '#E8001C',
    hoverMode: 'gravity' as HoverMode,
    index: '03',
  },
] as const;

export default function HomePage() {
  const [animMode, setAnimMode] = useState<HoverMode>(null);

  return (
    <div className="h-screen flex flex-col bg-brand-bg relative overflow-hidden">
      <main className="flex-1 relative">

        {/* Mobile background shapes */}
        <StaticHeroShapes />

        {/* Canvas animation (z-6, desktop only) */}
        <div className="absolute right-0 top-0 w-[42%] h-full z-[6] hidden md:block">
          <GenerativeAnimation hoverMode={animMode} />
        </div>

        {/* Content layer (z-12) */}
        <div
          className="absolute inset-0 z-[12] pointer-events-none flex flex-col"
          style={{ padding: '20px clamp(28px,4vw,80px) 0 clamp(28px,4vw,80px)' }}
        >
          <h1
            className="font-black text-[clamp(28px,6.2vw,120px)] uppercase leading-[0.88] tracking-[-0.02em] text-brand-black w-full font-display grid grid-cols-1 md:grid-cols-[auto_auto_1fr] items-baseline gap-x-[clamp(8px,2vw,36px)]"
          >
            <span className="hidden md:block" style={{ color: '#2C2C2C' }}>Hello</span>
            <span className="hidden md:block" style={{ color: '#2C2C2C' }}>my name is</span>
            <span className="md:justify-self-end md:text-right">Iurii Biriukov</span>
          </h1>

          <div className="flex-1 flex flex-col">
            {roles.map(({ lines, to, hoverColor, hoverMode, index }) => (
              <div
                key={to}
                className="flex-1"
              >
                <Link
                  to={to}
                  className="w-fit flex items-baseline gap-[clamp(10px,1.6vw,28px)] pointer-events-auto transition-colors duration-300 text-brand-gray"
                  style={{
                    paddingTop: 'clamp(10px,1.7vh,20px)',
                    paddingBottom: 'clamp(10px,1.7vh,20px)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = hoverColor;
                    setAnimMode(hoverMode);
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '';
                    setAnimMode(null);
                  }}
                >
                  <span
                    className="text-[clamp(9px,0.75vw,12px)] shrink-0 self-start mt-[0.35em] font-mono"
                    style={{ color: '#282828' }}
                  >
                    {index}
                  </span>
                  <span className="font-black text-[clamp(20px,4.5vw,88px)] uppercase leading-[0.82] tracking-[-0.02em] font-display">
                    {lines.map((line) => (
                      <span key={line} className="block">{line}</span>
                    ))}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
