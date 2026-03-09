export default function Footer() {
  return (
    <footer className="w-full flex flex-col md:flex-row md:flex-wrap md:items-baseline justify-between gap-y-3 md:gap-y-2 px-4 py-6 md:px-6 md:pb-4 md:py-0 uppercase font-black text-[14px] md:text-[clamp(10px,1.51vw,29px)] tracking-wide text-brand-black overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-baseline gap-y-1 md:gap-y-0 md:gap-x-[clamp(12px,4vw,80px)] min-w-0">
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
      <span className="shrink-0 md:ml-[clamp(12px,1.5vw,40px)]">Randstad Netherlands</span>
    </footer>
  );
}
