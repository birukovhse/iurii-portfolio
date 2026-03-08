import { Link } from 'react-router-dom';

interface SubpageNavProps {
  category: string;
  note?: string;
  firstProjectTitle?: string;
  firstProjectAccent?: string;
}

const navSize = 'text-[clamp(28px,4.32vw,83px)]';

export default function SubpageNav({ category, note, firstProjectTitle, firstProjectAccent }: SubpageNavProps) {
  return (
    <header
      className={`px-[clamp(16px,2.66vw,51px)] pt-[clamp(20px,2.24vw,43px)] pb-[clamp(24px,2vw,40px)] ${note ? 'pb-[clamp(80px,10vw,180px)]' : ''}`}
    >
      <nav className="flex flex-wrap items-center gap-x-[clamp(10px,1vw,20px)] gap-y-[clamp(8px,0.8vw,14px)]">
        <Link
          to="/"
          className={`font-black ${navSize} uppercase text-brand-gray hover:text-brand-black transition-colors duration-200`}
        >
          back
        </Link>
        <span className={`font-black ${navSize} uppercase`} style={{ color: '#F74429' }}>
          {category}
        </span>
        {firstProjectTitle != null && (
          <span className={`font-black ${navSize} uppercase`}>
            <span className="text-brand-black">{firstProjectTitle}</span>
            {firstProjectAccent && (
              <span style={{ color: '#F74429' }}> {firstProjectAccent}</span>
            )}
          </span>
        )}
      </nav>
      {note && (
        <p className="mt-[clamp(20px,2vw,36px)] max-w-[720px] text-[clamp(16px,1.35vw,24px)] leading-[1.2] text-brand-black">
          {note}
        </p>
      )}
    </header>
  );
}
