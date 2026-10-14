import React, { useEffect, useRef } from 'react';

// Light, Luminous Dot Matrix with tight gaps & glowing electric cyan glide
export const MatrixCanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Tight matrix spacing (compact gaps between dots)
    const spacing = 15;
    let cols = Math.ceil(width / spacing) + 1;
    let rows = Math.ceil(height / spacing) + 1;

    // Mouse tracking with smooth lerp
    let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, speed: 0 };
    let lastMouse = { x: -1000, y: -1000, time: Date.now() };

    // Gliding wake trail
    interface TrailPoint {
      x: number;
      y: number;
      age: number;
    }
    const trail: TrailPoint[] = [];

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      cols = Math.ceil(width / spacing) + 1;
      rows = Math.ceil(height / spacing) + 1;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const dt = Math.max(1, now - lastMouse.time);
      const dist = Math.hypot(e.clientX - lastMouse.x, e.clientY - lastMouse.y);
      mouse.speed = Math.min(2.5, dist / dt);

      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;

      if (dist > 8) {
        trail.push({ x: e.clientX, y: e.clientY, age: 1.0 });
        if (trail.length > 14) trail.shift();
      }

      lastMouse.x = e.clientX;
      lastMouse.y = e.clientY;
      lastMouse.time = now;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Ultra-light, luminous sky blue & cyan tones for maximum text contrast
    const LUMINOUS_BLUES = [
      { r: 56, g: 189, b: 248 },  // #38BDF8 Soft Electric Sky Blue
      { r: 14, g: 165, b: 233 },  // #0EA5E9 Bright Azure
      { r: 125, g: 211, b: 252 }, // #7DD3FC Ice Sky
      { r: 186, g: 230, b: 253 }, // #BAE6FD Pale Sky
      { r: 224, g: 242, b: 254 }, // #E0F2FE Whisper Cyan
    ];

    const getMatrixColor = (t: number, alpha: number) => {
      const index = Math.min(LUMINOUS_BLUES.length - 1, Math.floor(t * (LUMINOUS_BLUES.length - 1)));
      const c = LUMINOUS_BLUES[index];
      return `rgba(${c.r}, ${c.g}, ${c.b}, ${alpha.toFixed(2)})`;
    };

    const render = () => {
      mouse.x += (mouse.targetX - mouse.x) * 0.16;
      mouse.y += (mouse.targetY - mouse.y) * 0.16;

      ctx.clearRect(0, 0, width, height);

      // Decay trail points
      for (let i = trail.length - 1; i >= 0; i--) {
        trail[i].age -= 0.05;
        if (trail[i].age <= 0) trail.splice(i, 1);
      }

      const radius = 200;

      // 1. Ethereal, ultra-light ambient backlight halo (lightens the background, never darkens)
      if (mouse.x > -500 && mouse.y > -500) {
        const auraRadius = 210 + mouse.speed * 25;
        const aura = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          auraRadius
        );
        aura.addColorStop(0, 'rgba(186, 230, 253, 0.18)'); // Gentle pale sky
        aura.addColorStop(0.45, 'rgba(224, 242, 254, 0.09)'); // Soft whisper blue
        aura.addColorStop(1, 'transparent');

        ctx.fillStyle = aura;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, auraRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Base faint dot matrix (crisp, delicate micro-dots on pure white)
      ctx.fillStyle = 'rgba(14, 165, 233, 0.08)';
      ctx.beginPath();
      for (let r = 0; r < rows; r++) {
        const y = r * spacing;
        for (let c = 0; c < cols; c++) {
          const x = c * spacing;
          ctx.rect(x - 0.4, y - 0.4, 0.8, 0.8);
        }
      }
      ctx.fill();

      // 3. Highlighted active dot matrix near mouse (luminous, ultra-crisp micro-dots)
      const minCol = Math.max(0, Math.floor((mouse.x - radius) / spacing));
      const maxCol = Math.min(cols, Math.ceil((mouse.x + radius) / spacing));
      const minRow = Math.max(0, Math.floor((mouse.y - radius) / spacing));
      const maxRow = Math.min(rows, Math.ceil((mouse.y + radius) / spacing));

      if (mouse.x > -500 && mouse.y > -500) {
        for (let r = minRow; r < maxRow; r++) {
          const baseY = r * spacing;
          for (let c = minCol; c < maxCol; c++) {
            const baseX = c * spacing;

            const dx = mouse.x - baseX;
            const dy = mouse.y - baseY;
            const dist = Math.hypot(dx, dy);

            if (dist < radius) {
              const force = 1 - dist / radius;
              const angle = Math.atan2(dy, dx);

              // Gentle subtle wave displacement
              const glidePush = Math.sin(force * Math.PI) * 2.5;
              const posX = baseX - Math.cos(angle) * glidePush;
              const posY = baseY - Math.sin(angle) * glidePush;

              // Refined micro-dot size (max 1.2px radius = 2.4px diameter) to keep text 100% visible
              const dotSize = 0.65 + force * 0.55;
              // Restrained alpha (max 0.22) so white background always shines through behind black text
              const alpha = 0.06 + force * 0.16;
              const color = getMatrixColor(1 - force, alpha);

              ctx.fillStyle = color;
              ctx.beginPath();
              ctx.arc(posX, posY, dotSize, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // 4. Gliding trail wake in soft luminous sky blue
      if (trail.length > 0) {
        for (let t = 0; t < trail.length; t++) {
          const pt = trail[t];
          const trailRadius = 50 * pt.age;
          const tMinCol = Math.max(0, Math.floor((pt.x - trailRadius) / spacing));
          const tMaxCol = Math.min(cols, Math.ceil((pt.x + trailRadius) / spacing));
          const tMinRow = Math.max(0, Math.floor((pt.y - trailRadius) / spacing));
          const tMaxRow = Math.min(rows, Math.ceil((pt.y + trailRadius) / spacing));

          for (let r = tMinRow; r < tMaxRow; r++) {
            const y = r * spacing;
            for (let c = tMinCol; c < tMaxCol; c++) {
              const x = c * spacing;
              const d = Math.hypot(pt.x - x, pt.y - y);
              if (d < trailRadius) {
                const trailForce = (1 - d / trailRadius) * pt.age;
                ctx.fillStyle = `rgba(56, 189, 248, ${(trailForce * 0.12).toFixed(2)})`;
                ctx.beginPath();
                ctx.arc(x, y, 0.9 * trailForce, 0, Math.PI * 2);
                ctx.fill();
              }
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 bg-transparent transition-opacity duration-300"
      style={{ willChange: 'transform' }}
      aria-hidden="true"
    />
  );
};
