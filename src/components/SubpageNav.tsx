import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SubpageNavProps {
  note?: string;
}

const navLinks = [
  { label: 'Main page', to: '/' },
  { label: 'AI Automation', to: '/ai-automation' },
  { label: 'AD Creatives', to: '/ad-creatives' },
  { label: 'Freelance Designer', to: '/design-events' },
] as const;

const LINKEDIN_URL = 'https://www.linkedin.com/in/iurii-biriukov-756447208/';

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <div className="flex flex-col justify-center gap-1.5 w-8 h-8">
      <span
        className={`block h-0.5 w-full bg-brand-black transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}
      />
      <span className={`block h-0.5 w-full bg-brand-black transition-all ${open ? 'opacity-0' : ''}`} />
      <span
        className={`block h-0.5 w-full bg-brand-black transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}
      />
    </div>
  );
}

export default function SubpageNav({ note }: SubpageNavProps) {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`relative z-20 ${note ? 'pb-20 md:pb-[200px]' : ''}`}>
      <nav className="flex items-center justify-between px-4 py-4 md:px-6 md:py-3 md:pt-4 md:pb-[12px]">
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden p-2 -m-2 touch-manipulation"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <BurgerIcon open={menuOpen} />
        </button>

        <div className="hidden md:flex md:items-baseline md:justify-between md:flex-1 md:min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-[clamp(14px,3.6vw,68px)] gap-y-[clamp(6px,0.6vw,12px)] min-w-0">
            {navLinks.map((link) => {
              const active = link.to === pathname;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`shrink-0 transition-opacity hover:opacity-60 font-black uppercase text-[clamp(10px,1.51vw,29px)] tracking-wide ${
                    active ? 'text-brand-black' : 'text-brand-gray'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-brand-black transition-opacity hover:opacity-60 font-black uppercase text-[clamp(10px,1.51vw,29px)] tracking-wide"
            style={{ marginLeft: 'clamp(12px, 2vw, 40px)' }}
          >
            LinkedIn
          </a>
        </div>

        {menuOpen && (
          <div
            className="fixed inset-0 z-50 bg-brand-bg md:hidden pt-20 px-6 pb-8"
            role="dialog"
            aria-label="Navigation menu"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const active = link.to === pathname;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={`font-black uppercase text-[24px] tracking-wide transition-opacity ${
                      active ? 'text-brand-black' : 'text-brand-gray'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="font-black uppercase text-[24px] tracking-wide text-brand-black"
              >
                LinkedIn
              </a>
            </div>
          </div>
        )}
      </nav>

      {note && (
        <div className="pt-8 px-4 md:pt-[60px] md:px-6">
          <p className="max-w-[680px] text-[18px] md:text-[clamp(20px,2vw,36px)] leading-[1.2] md:leading-[1.14] text-brand-black">
            {note}
          </p>
        </div>
      )}
    </header>
  );
}
