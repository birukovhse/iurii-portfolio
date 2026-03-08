interface ContentBlock {
  label: string;
  text: string;
}

interface ProjectSectionProps {
  title: string;
  titleAccent?: string;
  description?: string;
  blocks?: ContentBlock[];
  media: React.ReactNode;
  note?: string;
  hideTitle?: boolean;
  invert?: boolean;
}

export default function ProjectSection({
  title,
  titleAccent,
  description,
  blocks = [],
  media,
  note,
  hideTitle = false,
  invert = false,
}: ProjectSectionProps) {
  return (
    <section className="border-t border-brand-black/15 px-[clamp(24px,3.5vw,68px)] py-[clamp(260px,28vw,520px)] first:border-t-0">
      <div
        className={`grid gap-[clamp(110px,13vw,240px)] lg:items-start ${
          invert
            ? 'lg:grid-cols-[minmax(360px,1fr)_minmax(280px,0.82fr)]'
            : 'lg:grid-cols-[minmax(280px,0.82fr)_minmax(360px,1fr)]'
        }`}
      >
        <div className={`min-w-0 ${invert ? 'lg:order-2' : ''}`}>
          {!hideTitle && (
            <h2 className="font-black uppercase leading-[0.82] tracking-[-0.055em] text-[clamp(44px,6vw,118px)]">
              <span className="block text-brand-black">{title}</span>
              {titleAccent && (
                <span className="mt-[clamp(6px,0.8vw,12px)] block" style={{ color: '#F74429' }}>
                  {titleAccent}
                </span>
              )}
            </h2>
          )}

          <div
            className={`max-w-[760px] border-l border-brand-black/20 pl-[clamp(18px,2vw,34px)] ${
              hideTitle ? '' : 'mt-[clamp(42px,4.5vw,86px)]'
            }`}
          >
            {description && (
              <p className="max-w-[700px] text-[clamp(18px,1.55vw,28px)] leading-[1.12] text-brand-black">
                {description}
              </p>
            )}

            {blocks.length > 0 && (
              <div className={`${description ? 'mt-[clamp(54px,6vw,112px)]' : ''} space-y-[clamp(46px,5vw,92px)]`}>
                {blocks.map((block) => (
                  <div key={block.label}>
                    <h3 className="mb-[clamp(14px,1.4vw,24px)] text-[clamp(15px,1.1vw,19px)] font-black uppercase tracking-[0.08em] text-brand-black">
                      {block.label}
                    </h3>
                    <p className="max-w-[700px] text-[clamp(18px,1.55vw,28px)] leading-[1.12] text-brand-black">
                      {block.text}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {note && (
              <p className="mt-[clamp(38px,4vw,72px)] text-[clamp(18px,1.6vw,28px)] font-black uppercase leading-[1.04] text-brand-black">
                {note}
              </p>
            )}
          </div>
        </div>

        <div className={`relative min-w-0 ${invert ? 'lg:order-1' : ''} lg:pt-[clamp(22px,2vw,46px)]`}>
          <div className="relative mx-auto w-full max-w-[860px]">
            {media}
          </div>
        </div>
      </div>
    </section>
  );
}
