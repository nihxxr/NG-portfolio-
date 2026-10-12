import { Link, Outlet, ScrollRestoration, useLocation } from "react-router";
import { useEffect } from "react";
import { links } from "../data/site";

function Nav() {
  return (
    <header className="nav">
      <Link to="/" className="nav-name" viewTransition>Nihar Girish</Link>
      <nav aria-label="Main">
        <Link to="/#work">Work</Link>
        <Link to="/#experience">Experience</Link>
        <Link to="/#about">About</Link>
        <Link to="/#contact" className="nav-cta">Contact</Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>Nihar Girish, Bengaluru</p>
      <ul>
        <li><a href={`mailto:${links.email}`}>Email</a></li>
        <li><a href={links.linkedin}>LinkedIn</a></li>
        <li><a href={links.github}>GitHub</a></li>
      </ul>
    </footer>
  );
}

// Jump to #section after navigating from a case study back to the home page.
function HashScroll() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) requestAnimationFrame(() => el.scrollIntoView());
  }, [hash, pathname]);
  return null;
}

export default function Layout() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main"><Outlet /></main>
      <Footer />
      <ScrollRestoration />
      <HashScroll />
    </>
  );
}

