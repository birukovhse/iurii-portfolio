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
  sectionIndex?: number;
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
  sectionIndex,
}: ProjectSectionProps) {
  return (
    <section
      className="relative z-10 border-t border-[#1C1C1C]"
      style={{ paddingLeft: '28px', paddingRight: '28px', paddingBottom: 'clamp(80px, 12vw, 180px)' }}
    >
      {!hideTitle && (
        <div
          className="flex items-start justify-between"
          style={{ paddingTop: 'clamp(32px,4vh,72px)' }}
        >
          <h2
            className="font-black uppercase leading-[0.84] tracking-[-0.04em] text-[clamp(50px,7vw,136px)] font-display"
            style={{ color: '#E8E3D8' }}
          >
            {title}
            {titleAccent && (
              <>
                <br />
                <span>{titleAccent}</span>
              </>
            )}
          </h2>
          {sectionIndex !== undefined && (
            <span
              className="text-[clamp(9px,0.75vw,12px)] font-mono shrink-0 ml-4 mt-[0.5em]"
              style={{ color: '#282828' }}
            >
              {String(sectionIndex).padStart(2, '0')}
            </span>
          )}
        </div>
      )}

      <div
        className={`w-full grid gap-x-[clamp(48px,5vw,100px)] lg:items-start ${
          invert
            ? 'lg:grid-cols-[minmax(340px,1.1fr)_minmax(260px,0.72fr)]'
            : 'lg:grid-cols-[minmax(260px,0.72fr)_minmax(340px,1.1fr)]'
        }`}
        style={{ marginTop: 'clamp(36px, 5vw, 72px)', rowGap: 'clamp(36px, 5vw, 72px)' }}
      >
        <div className={`min-w-0 ${invert ? 'lg:order-2' : ''}`}>
          {description && (
            <p
              className="max-w-[640px] text-[clamp(16px,1.4vw,25px)] leading-[1.22] font-inter"
              style={{ color: '#666666' }}
            >
              {description}
            </p>
          )}

          {blocks.length > 0 && (
            <div style={{ marginTop: description ? 56 : 0 }} className="space-y-[44px]">
              {blocks.map((block) => (
                <div key={block.label}>
                  <h3
                    className="mb-[clamp(10px,1vw,18px)] text-[clamp(10px,0.85vw,14px)] font-black uppercase tracking-[0.16em] font-mono"
                    style={{ color: '#282828' }}
                  >
                    {block.label}
                  </h3>
                  <p
                    className="max-w-[640px] text-[clamp(16px,1.4vw,25px)] leading-[1.22] font-inter"
                    style={{ color: '#666666' }}
                  >
                    {block.text}
                  </p>
                </div>
              ))}
            </div>
          )}

          {note && (
            <p
              style={{ marginTop: 48, color: '#E8E3D8' }}
              className="max-w-[640px] text-[clamp(16px,1.4vw,25px)] font-black uppercase leading-[1.08] font-display"
            >
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
