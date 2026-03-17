import { useEffect, useRef } from 'react';

const SHAPE_COUNT = 2;

interface Shape {
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  height: number;
  angle: number;
  angularVelocity: number;
  phaseX: number;
  phaseY: number;
  points: Array<{ x: number; y: number }>;
  radius: number;
}

function generateBlobPoints(
  w: number,
  h: number,
  n: number,
): Array<{ x: number; y: number }> {
  return Array.from({ length: n }, (_, i) => {
    const angle = (Math.PI * 2 * i) / n;
    const r = 0.7 + Math.random() * 0.36;
    return { x: Math.cos(angle) * (w / 2) * r, y: Math.sin(angle) * (h / 2) * r };
  });
}

export default function BackgroundShapes() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0;
    let h = 0;
    const shapes: Shape[] = [];

    function buildShapes() {
      shapes.length = 0;
      const sizes = [
        { w: 260 + Math.random() * 120, h: 240 + Math.random() * 110 },
        { w: 140 + Math.random() * 80, h: 130 + Math.random() * 70 },
      ];

      for (let i = 0; i < SHAPE_COUNT; i++) {
        const sw = sizes[i].w;
        const sh = sizes[i].h;
        const nPts = 10 + Math.floor(Math.random() * 4);
        const points = generateBlobPoints(sw, sh, nPts);
        const radius = Math.max(...points.map((p) => Math.hypot(p.x, p.y)));

        shapes.push({
          x: w * (0.2 + Math.random() * 0.6),
          y: h * (0.15 + Math.random() * 0.7),
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          width: sw,
          height: sh,
          angle: Math.random() * Math.PI * 2,
          angularVelocity: (Math.random() - 0.5) * 0.0004,
          phaseX: Math.random() * Math.PI * 2,
          phaseY: Math.random() * Math.PI * 2,
          points,
          radius,
        });
      }
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas!.width = Math.max(1, Math.floor(w * dpr));
      canvas!.height = Math.max(1, Math.floor(h * dpr));
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildShapes();
    }

    const t0 = performance.now();

    function draw(now: number) {
      const sec = (now - t0) / 1000;
      ctx!.clearRect(0, 0, w, h);

      for (const s of shapes) {
        s.vx += Math.sin(sec * 0.4 + s.phaseX) * 0.003;
        s.vy += Math.cos(sec * 0.45 + s.phaseY) * 0.003;
        s.vx *= 0.997;
        s.vy *= 0.997;
        s.x += s.vx;
        s.y += s.vy;
        s.angle += s.angularVelocity;

        if (s.x - s.radius < 0) { s.x = s.radius; s.vx = Math.abs(s.vx); }
        if (s.x + s.radius > w) { s.x = w - s.radius; s.vx = -Math.abs(s.vx); }
        if (s.y - s.radius < 0) { s.y = s.radius; s.vy = Math.abs(s.vy); }
        if (s.y + s.radius > h) { s.y = h - s.radius; s.vy = -Math.abs(s.vy); }

        ctx!.save();
        ctx!.translate(s.x, s.y);
        ctx!.rotate(s.angle);
        ctx!.beginPath();
        s.points.forEach((p, idx) => {
          if (idx === 0) ctx!.moveTo(p.x, p.y);
          else ctx!.lineTo(p.x, p.y);
        });
        ctx!.closePath();
        ctx!.fillStyle = 'rgba(232, 227, 216, 0.022)';
        ctx!.fill();
        ctx!.restore();
      }

      animRef.current = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    animRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 block h-full w-full"
    />
  );
}
