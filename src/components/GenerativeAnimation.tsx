import { useEffect, useRef } from 'react';

const FLOATING_COUNT = 28;
const LABEL_COUNT = 4;

interface Floater {
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  height: number;
  angle: number;
  angularVelocity: number;
  driftX: number;
  driftY: number;
  phaseX: number;
  phaseY: number;
  homeX: number;
  homeY: number;
  radius: number;
  points: Array<{ x: number; y: number }>;
  isBlob: boolean;
}

interface MouseState {
  x: number;
  y: number;
  active: boolean;
}

function generateHandDrawnRect(
  w: number,
  h: number,
  nPoints: number,
): Array<{ x: number; y: number }> {
  const hw = w / 2;
  const hh = h / 2;
  const corners = [
    { x: -hw, y: -hh },
    { x: hw, y: -hh },
    { x: hw, y: hh },
    { x: -hw, y: hh },
  ];
  const extra = nPoints - 4;
  const extraPerEdge = Math.floor(extra / 4);
  const wobble = Math.min(w, h) * 0.07;

  const pts: Array<{ x: number; y: number }> = [];

  for (let edge = 0; edge < 4; edge++) {
    const from = corners[edge];
    const to = corners[(edge + 1) % 4];

    pts.push({
      x: from.x + (Math.random() - 0.5) * wobble * 0.5,
      y: from.y + (Math.random() - 0.5) * wobble * 0.5,
    });

    const edgeDX = to.x - from.x;
    const edgeDY = to.y - from.y;
    const edgeLen = Math.hypot(edgeDX, edgeDY) || 1;
    const perpX = -edgeDY / edgeLen;
    const perpY = edgeDX / edgeLen;

    for (let j = 1; j <= extraPerEdge; j++) {
      const t = j / (extraPerEdge + 1);
      const bx = from.x + t * edgeDX;
      const by = from.y + t * edgeDY;
      const offset = (Math.random() - 0.5) * wobble;
      pts.push({ x: bx + perpX * offset, y: by + perpY * offset });
    }
  }

  return pts;
}

function generateHandDrawnBlob(
  w: number,
  h: number,
  nPoints: number,
): Array<{ x: number; y: number }> {
  return Array.from({ length: nPoints }, (_, i) => {
    const angle = (Math.PI * 2 * i) / nPoints;
    const r = 0.72 + Math.random() * 0.34;
    return {
      x: Math.cos(angle) * (w / 2) * r,
      y: Math.sin(angle) * (h / 2) * r,
    };
  });
}

function calcBoundingRadius(points: Array<{ x: number; y: number }>): number {
  if (points.length === 0) return 0;
  return Math.max(...points.map((p) => Math.hypot(p.x, p.y)));
}

export type HoverMode = 'line' | 'pulse' | 'gravity' | null;

interface GenerativeAnimationProps {
  hoverMode?: HoverMode;
}

export default function GenerativeAnimation({ hoverMode = null }: GenerativeAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const mouseRef = useRef<MouseState>({ x: 0, y: 0, active: false });
  const hoverModeRef = useRef<HoverMode>(hoverMode);
  hoverModeRef.current = hoverMode;

  useEffect(() => {
    const canvasElement = canvasRef.current;
    if (!canvasElement) return;

    const context = canvasElement.getContext('2d');
    if (!context) return;

    const canvas = canvasElement;
    const ctx = context;

    let w = 0;
    let h = 0;
    const floaters: Floater[] = [];
    const labelIndices: number[] = [];

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true,
      };
    };

    const onPointerLeave = () => {
      mouseRef.current.active = false;
    };

    function buildSystem() {
      floaters.length = 0;
      labelIndices.length = 0;

      const maxSmallSize = 72;
      for (let i = 0; i < FLOATING_COUNT; i += 1) {
        const isBlob = i === 0;
        const width = isBlob ? maxSmallSize * 5.75 : 18 + Math.random() * maxSmallSize;
        const height = isBlob ? maxSmallSize * 5.125 : 18 + Math.random() * maxSmallSize;
        const x = w * (0.58 + Math.random() * 0.28);
        const y = h * (0.1 + Math.random() * 0.8);
        const nPoints = isBlob ? 14 : 8 + Math.floor(Math.random() * 5);
        const points = isBlob
          ? generateHandDrawnBlob(width, height, nPoints)
          : generateHandDrawnRect(width, height, nPoints);
        const radius = calcBoundingRadius(points);
        const speedFactor = isBlob
          ? 0.055
          : Math.max(0.065, 0.26 - radius / 440);

        floaters.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.38 * speedFactor,
          vy: (Math.random() - 0.5) * 0.38 * speedFactor,
          width,
          height,
          angle: (Math.random() - 0.5) * (isBlob ? 0.5 : 1.2),
          angularVelocity: (Math.random() - 0.5) * (isBlob ? 0.00012 : 0.003),
          driftX: (isBlob ? 8 : 14) + Math.random() * (isBlob ? 18 : 36),
          driftY: (isBlob ? 8 : 14) + Math.random() * (isBlob ? 18 : 36),
          phaseX: Math.random() * Math.PI * 2,
          phaseY: Math.random() * Math.PI * 2,
          homeX: x,
          homeY: y,
          radius,
          points,
          isBlob,
        });
      }

      while (labelIndices.length < LABEL_COUNT) {
        const index = Math.floor(Math.random() * FLOATING_COUNT);
        if (!labelIndices.includes(index)) {
          labelIndices.push(index);
        }
      }
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildSystem();
    }

    function resolveCollisions() {
      for (let i = 0; i < floaters.length; i += 1) {
        for (let j = i + 1; j < floaters.length; j += 1) {
          const a = floaters[i];
          const b = floaters[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const distance = Math.hypot(dx, dy) || 1;
          const minDist = a.radius + b.radius;

          if (distance < minDist) {
            const nx = dx / distance;
            const ny = dy / distance;
            const overlap = minDist - distance;

            const massA = a.isBlob ? 6 : 1;
            const massB = b.isBlob ? 6 : 1;
            const totalMass = massA + massB;

            a.x -= nx * overlap * (massB / totalMass);
            a.y -= ny * overlap * (massB / totalMass);
            b.x += nx * overlap * (massA / totalMass);
            b.y += ny * overlap * (massA / totalMass);

            const rvx = b.vx - a.vx;
            const rvy = b.vy - a.vy;
            const separating = rvx * nx + rvy * ny;

            if (separating < 0) {
              const impulse = -separating * 0.8;
              a.vx -= nx * impulse * (massB / totalMass);
              a.vy -= ny * impulse * (massB / totalMass);
              b.vx += nx * impulse * (massA / totalMass);
              b.vy += ny * impulse * (massA / totalMass);
              a.angularVelocity += (Math.random() - 0.5) * 0.003;
              b.angularVelocity += (Math.random() - 0.5) * 0.003;
            }
          }
        }
      }
    }

    function drawFloater(floater: Floater, s = 1) {
      ctx.save();
      ctx.translate(floater.x, floater.y);
      ctx.rotate(floater.angle);
      ctx.scale(s, s);
      ctx.beginPath();
      floater.points.forEach((point, index) => {
        if (index === 0) {
          ctx.moveTo(point.x, point.y);
        } else {
          ctx.lineTo(point.x, point.y);
        }
      });
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    const startTime = performance.now();

    function draw(now: number) {
      const elapsed = now - startTime;
      const seconds = elapsed / 1000;
      const mouse = mouseRef.current;
      const mode = hoverModeRef.current;

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#ffffff';

      const lineCenterY = h * 0.5;
      const lineLeft = w * 0.08;
      const lineRight = w * 0.92;
      let heartbeat = 0;
      if (mode === 'pulse') {
        const cycle = 0.85;
        const phase = (seconds / cycle) % 1;
        if (phase < 0.18) heartbeat = Math.sin((phase / 0.18) * Math.PI);
        else if (phase < 0.38) heartbeat = Math.sin(((phase - 0.18) / 0.2) * Math.PI);
      }

      for (let i = 0; i < floaters.length; i += 1) {
        const floater = floaters[i];

        if (mode === 'line') {
          const targetX = lineLeft + (i / (floaters.length - 1 || 1)) * (lineRight - lineLeft);
          const targetY = lineCenterY;
          const k = 0.006;
          floater.vx += (targetX - floater.x) * k;
          floater.vy += (targetY - floater.y) * k;
          floater.vx *= 0.985;
          floater.vy *= 0.985;
        } else if (mode === 'gravity') {
          floater.vy += 0.22;
        } else {
          const organicForceX = Math.sin(seconds * 0.7 + floater.phaseX) * 0.006;
          const organicForceY = Math.cos(seconds * 0.82 + floater.phaseY) * 0.006;
          const driftForceX = Math.sin(seconds * 0.5 + floater.phaseX) * floater.driftX * 0.00018;
          const driftForceY = Math.cos(seconds * 0.55 + floater.phaseY) * floater.driftY * 0.00018;
          floater.vx += organicForceX + driftForceX;
          floater.vy += organicForceY + driftForceY;

          if (mouse.active) {
            const dx = floater.x - mouse.x;
            const dy = floater.y - mouse.y;
            const dist = Math.hypot(dx, dy) || 1;
            const influenceRadius = Math.min(w, h) * 0.26;
            if (dist < influenceRadius) {
              const force = (1 - dist / influenceRadius) * (floater.isBlob ? 0.12 : 0.44);
              floater.vx += (dx / dist) * force;
              floater.vy += (dy / dist) * force;
              floater.angularVelocity += (Math.random() - 0.5) * (floater.isBlob ? 0.0005 : 0.0013);
            }
          }

          floater.vx *= floater.isBlob ? 0.997 : 0.994;
          floater.vy *= floater.isBlob ? 0.997 : 0.994;
        }

        if (mode === 'gravity') {
          floater.angularVelocity = 0;
        } else if (mode === null) {
          floater.angularVelocity *= floater.isBlob ? 0.08 : 0.6;
        } else {
          floater.angularVelocity *= floater.isBlob ? 0.997 : 0.994;
        }
        floater.x += floater.vx;
        floater.y += floater.vy;
        floater.angle += floater.angularVelocity;

        if (floater.x - floater.radius < 0) {
          floater.x = floater.radius;
          floater.vx = Math.abs(floater.vx) * 0.88;
        }
        if (floater.x + floater.radius > w) {
          floater.x = w - floater.radius;
          floater.vx = -Math.abs(floater.vx) * 0.88;
        }
        if (floater.y - floater.radius < 0) {
          floater.y = floater.radius;
          floater.vy = Math.abs(floater.vy) * 0.88;
        }
        if (floater.y + floater.radius > h) {
          floater.y = h - floater.radius;
          floater.vy = -Math.abs(floater.vy) * 0.88;
        }
      }

      resolveCollisions();

      const scale = mode === 'pulse' ? 1 + 0.2 * heartbeat : 1;
      for (let i = 0; i < floaters.length; i += 1) {
        drawFloater(floaters[i], scale);
      }

      ctx.globalCompositeOperation = 'source-atop';
      const gradient = ctx.createLinearGradient(0, 0, 0, h);
      gradient.addColorStop(0, '#F97B27');
      gradient.addColorStop(1, '#F6232A');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'source-over';

      for (let i = 0; i < labelIndices.length; i += 1) {
        const floater = floaters[labelIndices[i]];
        if (!floater) continue;

        ctx.fillStyle = '#121616';
        ctx.font = '9px Inter, sans-serif';
        ctx.globalAlpha = 0.42;
        ctx.fillText(
          `x:${Math.round(floater.x)} y:${Math.round(floater.y)}`,
          floater.x + floater.width * 0.42,
          floater.y + floater.height * 0.08,
        );
        ctx.globalAlpha = 1;
      }

      animRef.current = requestAnimationFrame(draw);
    }

    resize();
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerleave', onPointerLeave);
    window.addEventListener('resize', resize);
    animRef.current = requestAnimationFrame(draw);

    return () => {
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerleave', onPointerLeave);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="block h-full w-full" />;
}
