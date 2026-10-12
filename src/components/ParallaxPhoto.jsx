import { useEffect, useRef } from "react";

// The photo and the green block behind it drift in opposite directions as the
// pointer moves, which gives the flat brutalist frame some depth.
export default function ParallaxPhoto({ src, alt }) {
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
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        el.style.setProperty("--px", x.toFixed(3));
        el.style.setProperty("--py", y.toFixed(3));
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <figure className="photo" ref={ref}>
      <span className="photo-block" aria-hidden="true" />
      <span className="photo-frame">
        <img src={src} alt={alt} width="768" height="1024" />
      </span>
    </figure>
  );
}
