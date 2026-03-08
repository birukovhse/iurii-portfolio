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
    <section className="relative z-10 px-[clamp(16px,2.5vw,48px)] pb-[clamp(200px,22vw,420px)] first:pt-0 pt-[clamp(40px,4vw,80px)]">
      <div
        className={`grid gap-y-[clamp(64px,8vw,140px)] gap-x-[clamp(60px,6vw,120px)] lg:items-start ${
          invert
            ? 'lg:grid-cols-[minmax(340px,1.1fr)_minmax(260px,0.72fr)]'
            : 'lg:grid-cols-[minmax(260px,0.72fr)_minmax(340px,1.1fr)]'
        }`}
      >
        {/* Text column */}
        <div className={`min-w-0 ${invert ? 'lg:order-2' : ''}`}>
          {!hideTitle && (
            <h2 className="font-black uppercase leading-[0.84] tracking-[-0.05em] text-[clamp(52px,7.5vw,140px)] text-brand-black">
              {title}
              {titleAccent && (
                <>
                  <br />
                  <span>{titleAccent}</span>
                </>
              )}
            </h2>
          )}

          {description && (
            <p
              className={`max-w-[640px] text-[clamp(17px,1.45vw,26px)] leading-[1.18] text-brand-black ${
                hideTitle ? '' : 'mt-[clamp(36px,4vw,72px)]'
              }`}
            >
              {description}
            </p>
          )}

          {blocks.length > 0 && (
            <div className={`${description ? 'mt-[clamp(48px,5.5vw,100px)]' : hideTitle ? '' : 'mt-[clamp(36px,4vw,72px)]'} space-y-[clamp(40px,4.5vw,80px)]`}>
              {blocks.map((block) => (
                <div key={block.label}>
                  <h3 className="mb-[clamp(12px,1.2vw,20px)] text-[clamp(11px,0.9vw,16px)] font-black uppercase tracking-[0.14em] text-brand-gray">
                    {block.label}
                  </h3>
                  <p className="max-w-[640px] text-[clamp(17px,1.45vw,26px)] leading-[1.18] text-brand-black">
                    {block.text}
                  </p>
                </div>
              ))}
            </div>
          )}

          {note && (
            <p className="mt-[clamp(36px,4vw,72px)] max-w-[640px] text-[clamp(17px,1.45vw,26px)] font-black uppercase leading-[1.06] text-brand-black">
              {note}
            </p>
          )}
        </div>

        {/* Media column */}
        <div className={`relative min-w-0 ${invert ? 'lg:order-1' : ''}`}>
          {media}
        </div>
      </div>
    </section>
  );
}
