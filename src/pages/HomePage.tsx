import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import GenerativeAnimation, { type HoverMode } from '../components/GenerativeAnimation';
import StaticHeroShapes from '../components/StaticHeroShapes';

const roles = [
  {
    lines: ['AI Automation', 'Specialist'],
    to: '/ai-automation',
    hoverColor: '#F87227',
    hoverMode: 'line' as HoverMode,
  },
  {
    lines: ['AD Creative', 'Designer'],
    to: '/ad-creatives',
    hoverColor: '#F84C29',
    hoverMode: 'pulse' as HoverMode,
  },
  {
    lines: ['Freelance Graphic', 'Designer'],
    to: '/design-events',
    hoverColor: '#F6242A',
    hoverMode: 'gravity' as HoverMode,
  },
] as const;

export default function HomePage() {
  const [animMode, setAnimMode] = useState<HoverMode>(null);

  return (
    <div className="h-screen flex flex-col bg-brand-bg font-inter relative overflow-hidden">
      <main className="flex-1 relative">
        <div className="absolute right-0 top-0 hidden w-[42%] h-full md:block">
          <GenerativeAnimation hoverMode={animMode} />
        </div>
        <StaticHeroShapes />

        <div className="relative z-10 pointer-events-none h-full flex flex-col justify-between px-4 pt-4 md:px-6 md:pt-4">
          <h1 className="font-black text-[clamp(28px,6.67vw,128px)] uppercase leading-[1] tracking-[-0.02em] text-brand-black grid grid-cols-[auto_auto_1fr] items-baseline gap-x-[clamp(8px,2.5vw,40px)] w-full">
            <span>Hello</span>
            <span>I&apos;m</span>
            <span className="justify-self-end text-right">Iurii Biriukov</span>
          </h1>

          {roles.map(({ lines, to, hoverColor, hoverMode }) => (
            <Link
              key={to}
              to={to}
              className="inline-flex w-fit flex-col font-black text-[28px] md:text-[clamp(20px,5vw,96px)] uppercase leading-[0.9] tracking-[-0.03em] text-brand-gray transition-colors duration-300 pointer-events-auto"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = hoverColor;
                setAnimMode(hoverMode);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '';
                setAnimMode(null);
              }}
            >
              {lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </Link>
          ))}

          <div />
        </div>
      </main>

      <Footer />
    </div>
  );
}
