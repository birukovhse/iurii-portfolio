export default function Footer() {
  return (
    <footer className="w-full flex flex-wrap items-baseline justify-between gap-y-2 px-4 pb-4 md:px-6 md:pb-4 uppercase font-black text-[clamp(10px,1.51vw,29px)] tracking-wide text-brand-black overflow-hidden">
      <div className="flex items-baseline gap-[clamp(12px,4vw,80px)] min-w-0">
        <a href="mailto:birukovhse@gmail.com" className="hover:opacity-70 transition-opacity shrink-0">
          birukovhse@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/iurii-biriukov-756447208/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity shrink-0"
        >
          Linkedin
        </a>
        <a href="tel:+31647021279" className="hover:opacity-70 transition-opacity shrink-0">
          +31647021279
        </a>
      </div>
      <span className="shrink-0" style={{ marginLeft: 'clamp(12px, 2vw, 40px)' }}>Randstad Netherlands</span>
    </footer>
  );
}
