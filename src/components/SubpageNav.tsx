import { Link, useLocation } from 'react-router-dom';

interface SubpageNavProps {
  note?: string;
}

const links = [
  { label: 'Main page', to: '/' },
  { label: 'AI Automation', to: '/ai-automation' },
  { label: 'AD Creatives', to: '/ad-creatives' },
  { label: 'Freelance Designer', to: '/design-events' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/iurii-biriukov-756447208/' },
] as const;

export default function SubpageNav({ note }: SubpageNavProps) {
  const { pathname } = useLocation();

  return (
    <header className="relative z-10">
      <nav className="flex flex-wrap items-baseline gap-x-[clamp(14px,3.6vw,68px)] gap-y-[clamp(6px,0.6vw,12px)] px-[clamp(12px,1.88vw,36px)] pt-[clamp(14px,1.6vw,30px)] pb-[clamp(10px,1.2vw,22px)] font-black uppercase text-[clamp(10px,1.51vw,29px)] tracking-wide overflow-hidden">
        {links.map((link) => {
          if ('href' in link) {
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-brand-black transition-opacity hover:opacity-60"
              >
                {link.label}
              </a>
            );
          }
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
      </nav>

      {note && (
        <div className="px-[clamp(12px,1.88vw,36px)] pt-[clamp(60px,10vw,180px)] pb-[clamp(80px,12vw,220px)]">
          <p className="max-w-[680px] text-[clamp(20px,2vw,36px)] leading-[1.14] text-brand-black">
            {note}
          </p>
        </div>
      )}
    </header>
  );
}
