import { useEffect, useRef } from "react";

// Cut-out portrait behind the hero text, background removed so the rain shows
// around it. It fades into the black and drifts a few pixels with the pointer.
export default function HeroPhoto({ src, alt }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || still) return;
    let raf = 0;
    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--px", ((e.clientX / window.innerWidth - 0.5) * 2).toFixed(3));
        el.style.setProperty("--py", ((e.clientY / window.innerHeight - 0.5) * 2).toFixed(3));
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div className="hero-photo" ref={ref}>
      <img
        src={src}
        srcSet={`${src.replace(".webp", "-1080.webp")} 1075w, ${src} 2150w`}
        sizes="(max-width: 960px) 100vw, 62vw"
        alt={alt} width="2150" height="2162" fetchPriority="high"
      />
    </div>
  );
}
