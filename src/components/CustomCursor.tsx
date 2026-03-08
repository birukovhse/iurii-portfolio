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
          width="28"
          height="38"
          viewBox="0 0 20 28"
          fill="none"
          style={{
            transform: 'translate(-7px, -1px)',
            filter: `drop-shadow(0 0 8px ${cursor.color}55)`,
          }}
        >
          <path
            d="M8.2 0.5C6.8 0.5 5.8 1.6 5.8 3L5.8 13.2L4.2 12.2C3.2 11.6 1.8 11.8 1.1 12.8C0.4 13.8 0.6 15.2 1.6 15.9L6.2 21.8C6.9 22.8 8.2 23.5 9.5 23.5L13.2 23.5C15.8 23.5 17.8 21.4 17.8 18.8L17.8 14.8C17.8 13.6 16.8 12.6 15.6 12.6C15 12.6 14.5 12.9 14.2 13.3L14.2 11.6C14.2 10.4 13.2 9.4 12 9.4C11.4 9.4 10.9 9.6 10.5 10.1L10.2 3C10.2 1.6 9.2 0.5 8.2 0.5Z"
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
            filter: `drop-shadow(0 0 8px ${cursor.color}55)`,
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
