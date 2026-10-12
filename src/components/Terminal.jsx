import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { projects } from "../data/projects";
import { experience, links, skills } from "../data/site";

const SUGGESTED = ["help", "whoami", "projects", "open asli", "contact"];

function respond(raw, navigate) {
  const input = raw.trim();
  const [cmd, ...rest] = input.toLowerCase().split(/\s+/);
  const arg = rest.join(" ");
  const slugs = projects.map((p) => p.slug);

  switch (cmd) {
    case "":
      return [];
    case "help":
      return [
        "whoami          who I am",
        "projects        list my work",
        "open <name>     read a case study, e.g. open asli",
        "experience      where I've worked",
        "skills          what I work with",
        "contact         how to reach me",
        "email | github | linkedin",
        "clear           clear the screen",
      ];
    case "whoami":
      return [
        "Nihar Girish. AI engineer in Bengaluru.",
        "AI Engineer at EngConvo. Master of IT in AI at James Cook University from Feb 2027.",
      ];
    case "ls":
    case "projects":
      return projects.map((p) => `${p.slug.padEnd(15)} ${p.tagline}`);
    case "open":
    case "cd": {
      const target = slugs.find((s) => s === arg || projects.find((p) => p.slug === s).name.toLowerCase() === arg);
      if (!target) return [`no project called "${arg || "?"}". try: ${slugs.join(", ")}`];
      setTimeout(() => navigate(`/work/${target}`, { viewTransition: true }), 350);
      return [`opening ${target}...`];
    }
    case "experience":
      return experience.map((e) => `${e.when.padEnd(22)} ${e.role}, ${e.org}`);
    case "skills":
      return skills.map((s) => `${s.group.padEnd(17)} ${s.items.join(", ")}`);
    case "contact":
      return [`email     ${links.email}`, `linkedin  ${links.linkedin}`, `github    ${links.github}`];
    case "email":
      window.location.href = `mailto:${links.email}`;
      return [`opening your mail app for ${links.email}`];
    case "github":
    case "linkedin":
      window.open(links[cmd], "_blank", "noopener");
      return [`opening ${links[cmd]}`];
    case "sudo":
      return arg.startsWith("hire")
        ? ["permission granted.", `send the offer to ${links.email}`]
        : ["nice try."];
    default:
      if (slugs.includes(cmd)) {
        setTimeout(() => navigate(`/work/${cmd}`, { viewTransition: true }), 350);
        return [`opening ${cmd}...`];
      }
      return [`command not found: ${cmd}. type help`];
  }
}

export default function Terminal() {
  const navigate = useNavigate();
  const [lines, setLines] = useState([{ kind: "out", text: "type help, or tap a command below" }]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState([]);
  const [hIndex, setHIndex] = useState(-1);
  const logRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [lines]);

  const run = (cmd) => {
    if (cmd.trim().toLowerCase() === "clear") {
      setLines([]);
    } else {
      const out = respond(cmd, navigate).map((text) => ({ kind: "out", text }));
      setLines((l) => [...l, { kind: "in", text: cmd }, ...out].slice(-60));
    }
    if (cmd.trim()) setHistory((h) => [cmd, ...h].slice(0, 30));
    setHIndex(-1);
    setValue("");
  };

  const onKey = (e) => {
    if (e.key === "ArrowUp" && history.length) {
      e.preventDefault();
      const i = Math.min(hIndex + 1, history.length - 1);
      setHIndex(i);
      setValue(history[i]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const i = hIndex - 1;
      setHIndex(Math.max(i, -1));
      setValue(i >= 0 ? history[i] : "");
    }
  };

  return (
    <section className="term" aria-label="Interactive terminal">
      <div className="term-bar" aria-hidden="true">
        <span /><span /><span />
        <b>nihar@portfolio: ~</b>
      </div>
      <div className="term-log" ref={logRef} role="log" aria-live="polite" onClick={() => inputRef.current.focus()}>
        {lines.map((l, i) => (
          <p key={i} className={l.kind === "in" ? "term-in" : ""}>
            {l.kind === "in" && <span className="term-prompt">$ </span>}{l.text}
          </p>
        ))}
        <form className="term-form" onSubmit={(e) => { e.preventDefault(); run(value); }}>
          <label htmlFor="term-input" className="term-prompt">$</label>
          <input
            id="term-input" ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={onKey}
            autoComplete="off" autoCapitalize="none" spellCheck="false" aria-label="Type a command"
          />
        </form>
      </div>
      <div className="term-chips">
        {SUGGESTED.map((s) => (
          <button key={s} type="button" onClick={() => run(s)}>{s}</button>
        ))}
      </div>
    </section>
  );
}
