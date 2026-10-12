import { useRef, useState } from "react";

// Red duotone portrait. Moving over it opens a lens that shows the original
// photo, with a live coordinate readout. Works with touch: tap to place the lens.
export default function ScanPhoto({ src, alt }) {
  const ref = useRef(null);
  const [pos, setPos] = useState(null);

  const place = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = Math.round(e.clientX - r.left);
    const y = Math.round(e.clientY - r.top);
    ref.current.style.setProperty("--mx", `${x}px`);
    ref.current.style.setProperty("--my", `${y}px`);
    setPos({ x, y });
  };

  const clear = () => {
    ref.current.style.setProperty("--mx", "-999px");
    ref.current.style.setProperty("--my", "-999px");
    setPos(null);
  };

  return (
    <figure className="scan" ref={ref} onPointerMove={place} onPointerDown={place} onPointerLeave={clear}>
      <div className="scan-frame">
        <img className="scan-base" src={src} alt={alt} width="1075" height="1081" />
        <img className="scan-lens" src={src} alt="" aria-hidden="true" width="1075" height="1081" />
        <span className="scan-line" aria-hidden="true" />
        <span className="hud hud-tl" aria-hidden="true" />
        <span className="hud hud-tr" aria-hidden="true" />
        <span className="hud hud-bl" aria-hidden="true" />
        <span className="hud hud-br" aria-hidden="true" />
      </div>
      <figcaption className="scan-readout" aria-hidden="true">
        <span>id: nihar_g</span>
        <span>{pos ? `x ${String(pos.x).padStart(3, "0")}  y ${String(pos.y).padStart(3, "0")}` : "hover to scan"}</span>
      </figcaption>
    </figure>
  );
}
