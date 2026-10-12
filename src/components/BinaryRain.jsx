import { useEffect, useRef } from "react";

// Falling 0s and 1s behind the hero. Columns near the pointer glow green and
// fall faster. Pauses off screen and in background tabs; with reduced motion
// it draws one still frame.
export default function BinaryRain({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const size = 15;
    let cols = 0;
    let drops = [];
    let speeds = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;
    const pointer = { x: -9999, y: -9999 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = `${size}px "Martian Mono Variable", ui-monospace, monospace`;
      cols = Math.ceil(w / size);
      drops = Array.from({ length: cols }, () => Math.random() * (h / size));
      speeds = Array.from({ length: cols }, () => 0.12 + Math.random() * 0.22);
      ctx.fillStyle = "#011207";
      ctx.fillRect(0, 0, w, h);
    };

    const frame = () => {
      ctx.fillStyle = "rgba(1, 18, 7, 0.06)";
      ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < cols; i++) {
        const before = Math.floor(drops[i]);
        const x = i * size;
        const near = Math.max(0, 1 - Math.hypot(x - pointer.x, before * size - pointer.y) / 180);
        drops[i] += speeds[i] * (1 + near * 2.5);
        const row = Math.floor(drops[i]);
        if (row === before) continue; // draw once per row so digits stay crisp
        ctx.fillStyle = near > 0
          ? `rgba(139, 197, 61, ${0.4 + near * 0.6})`
          : "rgba(226, 240, 204, 0.2)";
        ctx.fillText(Math.random() > 0.5 ? "1" : "0", x, row * size);
        if (row * size > h && Math.random() > 0.95) drops[i] = 0;
      }
    };

    const loop = () => {
      if (visible && !document.hidden) frame();
      raf = requestAnimationFrame(loop);
    };

    resize();
    for (let n = 0; n < 400; n++) frame(); // start with a full screen of rain
    if (!still) {
      raf = requestAnimationFrame(loop);
    }

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
    };
    const onLeave = () => { pointer.x = pointer.y = -9999; };
    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    io.observe(canvas);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
