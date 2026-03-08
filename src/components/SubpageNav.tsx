import { Link } from 'react-router-dom';

interface SubpageNavProps {
  category: string;
  note?: string;
  firstProjectTitle?: string;
  firstProjectAccent?: string;
}

export default function SubpageNav({ category, note, firstProjectTitle, firstProjectAccent }: SubpageNavProps) {
  return (
    <header className="px-[clamp(16px,2.66vw,51px)] pt-[clamp(24px,2.8vw,56px)] pb-[clamp(120px,15vw,260px)]">
      <div className="grid gap-[clamp(40px,6vw,120px)] lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.95fr)] lg:items-end">
        <div className="order-2 max-w-[760px] lg:order-1">
          {note && (
            <p className="max-w-[760px] text-[clamp(18px,1.6vw,28px)] leading-[1.08] text-brand-black">
              {note}
            </p>
          )}
        </div>

        <div className="order-1 min-w-0 lg:order-2 lg:justify-self-end">
          <Link
            to="/"
            className="inline-block text-[clamp(18px,1.75vw,30px)] font-black uppercase tracking-[-0.04em] text-brand-gray transition-colors duration-200 hover:text-brand-black"
          >
            back
          </Link>

          <div className="mt-[clamp(18px,2vw,32px)]">
            <p className="text-[clamp(11px,0.9vw,15px)] uppercase tracking-[0.18em] text-brand-gray">
              Selected work
            </p>

            <h1
              className="mt-[clamp(12px,1.4vw,20px)] max-w-[8ch] font-black uppercase leading-[0.82] tracking-[-0.055em]"
              style={{ color: '#F74429', fontSize: 'clamp(54px,8.3vw,154px)' }}
            >
              {category}
            </h1>

            {firstProjectTitle != null && (
              <p className="mt-[clamp(28px,3vw,52px)] text-[clamp(24px,2.5vw,44px)] font-black uppercase leading-[0.92] tracking-[-0.05em]">
                <span className="text-brand-black">{firstProjectTitle}</span>
                {firstProjectAccent && (
                  <span style={{ color: '#F74429' }}> {firstProjectAccent}</span>
                )}
              </p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
