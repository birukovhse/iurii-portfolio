import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import GenerativeAnimation, { type HoverMode } from '../components/GenerativeAnimation';

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
        <div className="absolute right-0 top-0 w-[42%] h-full">
          <GenerativeAnimation hoverMode={animMode} />
        </div>

        <div className="relative z-10 w-[100vw] max-w-[100vw] pointer-events-none">
          <h1 className="font-black text-[clamp(32px,6.67vw,128px)] uppercase leading-[1] tracking-[-0.02em] text-brand-black grid grid-cols-[auto_auto_auto_1fr] items-baseline gap-x-2 w-full pl-[clamp(12px,1.3vw,25px)] pr-0 pt-[clamp(4px,0.3vw,6px)]">
            <span>Hello</span>
            <span className="w-[clamp(120px,14vw,190px)]" aria-hidden="true" />
            <span>I&apos;m</span>
            <span className="justify-self-end text-right">Iurii Biriukov</span>
          </h1>

          <nav className="pl-[clamp(12px,1.3vw,25px)] mt-[clamp(132px,23vw,420px)] flex flex-col gap-[clamp(18px,2vw,34px)] pointer-events-auto">
            {roles.map(({ lines, to, hoverColor, hoverMode }) => (
              <Link
                key={to}
                to={to}
                className="inline-flex w-fit flex-col font-black text-[clamp(20px,5vw,96px)] uppercase leading-[0.82] tracking-[-0.03em] text-brand-gray transition-colors duration-300"
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
          </nav>
        </div>
      </main>

      <Footer />
    </div>
  );
}
