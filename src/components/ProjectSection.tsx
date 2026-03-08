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
}

export default function ProjectSection({
  title,
  titleAccent,
  description,
  blocks = [],
  media,
  note,
  hideTitle = false,
}: ProjectSectionProps) {
  return (
    <section className="border-t border-brand-black/15 px-[clamp(24px,3.5vw,68px)] py-[clamp(220px,24vw,440px)] first:border-t-0">
      <div className="grid gap-[clamp(96px,12vw,220px)] lg:grid-cols-[minmax(0,0.9fr)_minmax(340px,0.95fr)] lg:items-start">
        <div className="min-w-0">
          {!hideTitle && (
            <h2 className="font-black text-[clamp(36px,5vw,96px)] uppercase leading-[0.95] tracking-[-0.03em]">
              <span className="text-brand-black">{title}</span>
              {titleAccent && (
                <span style={{ color: '#F74429' }}> {titleAccent}</span>
              )}
            </h2>
          )}

          {description && (
            <p className={`max-w-[680px] text-[clamp(16px,1.35vw,24px)] leading-[1.2] text-brand-black ${hideTitle ? '' : 'mt-[clamp(36px,3.8vw,72px)]'}`}>
              {description}
            </p>
          )}

          {blocks.length > 0 && (
            <div className="mt-[clamp(56px,6vw,108px)] space-y-[clamp(40px,4.5vw,84px)]">
              {blocks.map((block) => (
                <div key={block.label}>
                  <h3 className="mb-[clamp(14px,1.4vw,24px)] text-[clamp(16px,1.35vw,24px)] font-black uppercase tracking-normal text-brand-black">
                    {block.label}
                  </h3>
                  <p className="max-w-[680px] text-[clamp(16px,1.35vw,24px)] leading-[1.2] text-brand-black">
                    {block.text}
                  </p>
                </div>
              ))}
            </div>
          )}

          {note && (
            <p className="mt-[clamp(32px,3.5vw,60px)] text-[clamp(18px,1.6vw,28px)] font-black uppercase leading-[1.08] text-brand-black">
              {note}
            </p>
          )}
        </div>

        <div className="relative min-w-0 pt-[clamp(24px,2vw,36px)]">
          <div className="relative p-0">
            {media}
          </div>
        </div>
      </div>
    </section>
  );
}
