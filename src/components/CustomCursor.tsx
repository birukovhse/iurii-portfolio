import { useEffect, useState } from 'react';

function mixCursorColor(position: number) {
  const clamped = Math.max(0, Math.min(1, position));
  const r = Math.round(0xf9 + (0xf6 - 0xf9) * clamped);
  const g = Math.round(0x7b + (0x23 - 0x7b) * clamped);
  const b = Math.round(0x27 + (0x2a - 0x27) * clamped);
  return `rgb(${r},${g},${b})`;
}

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursor, setCursor] = useState({
    x: -100,
    y: -100,
    color: 'rgb(249,123,39)',
    variant: 'arrow' as 'arrow' | 'hand',
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const syncEnabled = () => setEnabled(mediaQuery.matches);
    syncEnabled();

    const handleMove = (event: PointerEvent) => {
      const ratio = event.clientY / Math.max(1, window.innerHeight);
      const hoveredElement = document.elementFromPoint(event.clientX, event.clientY);
      const variant = hoveredElement?.closest('a, button, [data-cursor-hand]')
        ? 'hand'
        : 'arrow';
      setCursor({
        x: event.clientX,
        y: event.clientY,
        color: mixCursorColor(ratio),
        variant,
      });
    };

    mediaQuery.addEventListener('change', syncEnabled);
    window.addEventListener('pointermove', handleMove);

    return () => {
      mediaQuery.removeEventListener('change', syncEnabled);
      window.removeEventListener('pointermove', handleMove);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{
        transform: `translate(${cursor.x}px, ${cursor.y}px)`,
      }}
    >
      {cursor.variant === 'hand' ? (
        <svg
          width="32"
          height="42"
          viewBox="0 0 18 24"
          fill="none"
          style={{
            transform: 'translate(-4px, -4px) rotate(-12deg)',
            filter: `drop-shadow(0 0 10px ${cursor.color}66)`,
          }}
        >
          <path
            d="M7.9 1C6.9 1 6.1 1.8 6.1 2.8V10.7L4.5 9.3C3.66 8.57 2.39 8.61 1.58 9.42C0.77 10.23 0.78 11.54 1.61 12.33L5.95 16.52C6.35 16.9 6.88 17.12 7.43 17.12H11.52C12.77 17.12 13.79 16.1 13.79 14.85V11.82H14.72C15.71 11.82 16.52 11.01 16.52 10.02C16.52 9.03 15.71 8.22 14.72 8.22H13.79V7.05C13.79 6.14 13.05 5.4 12.14 5.4C11.8 5.4 11.49 5.5 11.22 5.69V4.44C11.22 3.53 10.48 2.79 9.57 2.79C9.17 2.79 8.81 2.93 8.53 3.18V2.8C8.53 1.8 8.02 1 7.9 1Z"
            fill={cursor.color}
          />
        </svg>
      ) : (
        <svg
          width="28"
          height="40"
          viewBox="0 0 14 20"
          fill="none"
          style={{
            transform: 'translate(-2px, -2px)',
            filter: `drop-shadow(0 0 10px ${cursor.color}66)`,
          }}
        >
          <path
            d="M1 1L1.2 18.2L5.7 13.5L9.4 18.8L11.8 17.2L8.2 11.9L14 11.2L1 1Z"
            fill={cursor.color}
          />
        </svg>
      )}
    </div>
  );
}
