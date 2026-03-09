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

export default function SubpageNav({ note }: SubpageNavProps) {
  const { pathname } = useLocation();

  return (
    <header className={`relative z-10 ${note ? 'pb-16 md:pb-[200px]' : ''}`}>
      <nav className="flex items-baseline justify-between font-black uppercase text-[clamp(10px,1.51vw,29px)] tracking-wide px-4 py-3 md:px-6 md:py-[12px] md:pt-4">
        <div className="flex flex-wrap items-baseline gap-x-[clamp(14px,3.6vw,68px)] gap-y-[clamp(6px,0.6vw,12px)] min-w-0">
          {navLinks.map((link) => {
            const active = link.to === pathname;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`shrink-0 transition-opacity hover:opacity-60 ${
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
          className="shrink-0 text-brand-black transition-opacity hover:opacity-60"
          style={{ marginLeft: 'clamp(12px, 2vw, 40px)' }}
        >
          LinkedIn
        </a>
      </nav>

      {note && (
        <div className="pt-10 px-4 md:pt-[60px] md:px-6">
          <p className="max-w-[680px] text-[clamp(20px,2vw,36px)] leading-[1.14] text-brand-black">
            {note}
          </p>
        </div>
      )}
    </header>
  );
}
