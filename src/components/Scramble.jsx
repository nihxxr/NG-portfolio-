import { useCallback, useEffect, useRef, useState } from "react";

const GLYPHS = "01<>/\\[]{}#$%&*+=?ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const still = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Decodes text from random glyphs, left to right. Runs on mount and again on hover.
// Screen readers always get the real text through aria-label.
export default function Scramble({ text, as = "span", className, style, onMount = true, duration = 700 }) {
  const Tag = as;
  const [shown, setShown] = useState(text);
  const raf = useRef(0);

  const run = useCallback(() => {
    if (still()) return;
    cancelAnimationFrame(raf.current);
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const settled = Math.floor(t * text.length);
      let out = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        out += i < settled || ch === " " || ch === "\n" ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
      setShown(out);
      if (t < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
  }, [text, duration]);

  useEffect(() => {
    if (onMount) run();
    return () => cancelAnimationFrame(raf.current);
  }, [run, onMount]);

  return (
    <Tag className={className} style={style} aria-label={text} onPointerEnter={run}>
      <span aria-hidden="true">
        {shown.split("\n").map((line, i, all) => (
          <span key={i}>{line}{i < all.length - 1 && <br />}</span>
        ))}
      </span>
    </Tag>
  );
}
