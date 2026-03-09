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
    <section className="relative z-10 px-6 pb-24 md:pb-[200px]">
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

      <div
        className={`w-full grid gap-x-[clamp(48px,5vw,100px)] lg:items-start ${
          invert
            ? 'lg:grid-cols-[minmax(340px,1.1fr)_minmax(260px,0.72fr)]'
            : 'lg:grid-cols-[minmax(260px,0.72fr)_minmax(340px,1.1fr)]'
        }`}
        style={{ marginTop: 80, rowGap: 80 }}
      >
        <div className={`min-w-0 ${invert ? 'lg:order-2' : ''}`}>
          {description && (
            <p className="max-w-[640px] text-[clamp(17px,1.45vw,26px)] leading-[1.18] text-brand-black">
              {description}
            </p>
          )}

          {blocks.length > 0 && (
            <div style={{ marginTop: description ? 60 : 0 }} className="space-y-[48px]">
              {blocks.map((block) => (
                <div key={block.label}>
                  <h3 className="mb-[clamp(10px,1vw,18px)] text-[clamp(11px,0.9vw,16px)] font-black uppercase tracking-[0.14em] text-brand-gray">
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
            <p style={{ marginTop: 48 }} className="max-w-[640px] text-[clamp(17px,1.45vw,26px)] font-black uppercase leading-[1.06] text-brand-black">
              {note}
            </p>
          )}
        </div>

        <div className={`relative min-w-0 ${invert ? 'lg:order-1' : ''}`}>
          {media}
        </div>
      </div>
    </section>
  );
}
