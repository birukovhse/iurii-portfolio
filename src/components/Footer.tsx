export default function Footer() {
  return (
    <footer
      className="w-full uppercase font-black text-[clamp(9px,1.35vw,22px)] tracking-[0.06em] overflow-hidden font-display"
      style={{ padding: 'clamp(14px,1.2vw,20px) clamp(28px,4vw,80px) clamp(18px,1.4vw,24px)', color: '#2E2E2E' }}
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-y-[6px]">
        <div className="flex flex-wrap items-baseline gap-x-[clamp(12px,4vw,80px)] gap-y-[4px] min-w-0">
          <a
            href="mailto:birukovhse@gmail.com"
            className="transition-colors duration-300 shrink-0 hover:text-brand-orange"
            style={{ color: 'inherit' }}
          >
            birukovhse@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/iurii-biriukov-756447208/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 shrink-0 hover:text-brand-orange"
            style={{ color: 'inherit' }}
          >
            LinkedIn
          </a>
          <a
            href="tel:+31647021279"
            className="transition-colors duration-300 shrink-0 hover:text-brand-orange"
            style={{ color: 'inherit' }}
          >
            +31647021279
          </a>
        </div>
        <span className="shrink-0 sm:ml-[clamp(12px,2vw,40px)]">
          Randstad Netherlands
        </span>
      </div>
    </footer>
  );
}
