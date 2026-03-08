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
          width="26"
          height="34"
          viewBox="0 0 13 17"
          fill="none"
          style={{
            transform: 'translate(-3px, -2px)',
            filter: `drop-shadow(0 0 10px ${cursor.color}66)`,
          }}
        >
          <path
            d="M6.5 0.5C5.7 0.5 5 1.2 5 2V7H3.2C2.4 7 1.7 7.7 1.7 8.5V9.5C1.7 10.3 2.4 11 3.2 11H5V14.5C5 15.3 5.7 16 6.5 16C7.3 16 8 15.3 8 14.5V11H9.8C10.6 11 11.3 10.3 11.3 9.5V8.5C11.3 7.7 10.6 7 9.8 7H8V2C8 1.2 7.3 0.5 6.5 0.5Z"
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
