import { Link, useLocation } from 'react-router-dom';

interface SubpageNavProps {
  note?: string;
}

const navLinks = [
  { label: 'Main', to: '/' },
  { label: 'AI Automation', to: '/ai-automation' },
  { label: 'AD Creatives', to: '/ad-creatives' },
  { label: 'Freelance Designer', to: '/design-events' },
] as const;

const LINKEDIN_URL = 'https://www.linkedin.com/in/iurii-biriukov-756447208/';

export default function SubpageNav({ note }: SubpageNavProps) {
  const { pathname } = useLocation();

  return (
    <header className="relative z-10 border-b border-[#1C1C1C]" style={{ paddingBottom: note ? 'clamp(40px, 8vw, 120px)' : 0 }}>
      <nav
        className="flex items-baseline justify-between font-black uppercase text-[clamp(9px,1.35vw,22px)] tracking-[0.06em] font-display"
        style={{ padding: '14px 28px' }}
      >
        <div className="flex flex-wrap items-baseline gap-x-[clamp(14px,3.2vw,60px)] gap-y-[clamp(6px,0.6vw,10px)] min-w-0">
          {navLinks.map((link) => {
            const active = link.to === pathname;
            return (
              <Link
                key={link.to}
                to={link.to}
                className="shrink-0 transition-colors duration-300"
                style={{ color: active ? '#E8E3D8' : '#2E2E2E' }}
                onMouseEnter={(e) => {
                  if (!active) (e.currentTarget as HTMLAnchorElement).style.color = '#E8E3D8';
                }}
                onMouseLeave={(e) => {
                  if (!active) (e.currentTarget as HTMLAnchorElement).style.color = '#2E2E2E';
                }}
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
          className="shrink-0 transition-colors duration-300 font-display"
          style={{ marginLeft: 'clamp(12px,2vw,40px)', color: '#2E2E2E' }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#E8E3D8'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#2E2E2E'; }}
        >
          LinkedIn
        </a>
      </nav>

      {note && (
        <div style={{ padding: 'clamp(28px, 4vw, 48px) 28px 0' }}>
          <p
            className="max-w-[700px] text-[clamp(15px,1.9vw,34px)] leading-[1.22] font-inter"
            style={{ color: '#3A3A3A' }}
          >
            {note}
          </p>
        </div>
      )}
    </header>
  );
}
