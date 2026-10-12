# Nihar Girish, portfolio

My portfolio site: five featured projects with a case study each, my experience, skills and contact details.

## What's on it

The site is red on black and built like an instrument panel. The home page opens with my name decoding from random characters over a field of falling 0s and 1s; digits near your cursor glow and fall faster.

My photo fills the right side of the hero with no frame and no filter, fading into the black behind my name, and drifts a few pixels as you move the cursor. The rain falls behind it, so nothing crosses my face. On phones the photo fills the top of the screen and fades down into the text.

Under the hero sits a working terminal. Type `help`, `whoami`, `projects`, `experience`, `skills` or `contact`, or `open asli` to jump straight to a case study. Up and down arrows recall earlier commands, and clickable chips cover the main commands for anyone who doesn't want to type.

Below that, a bento grid holds the five featured projects: Asli, DatasetFinder, ICAO Weather Risk, Muse Copywriter and the AQ-10 Screener. Project titles scramble when you hover them. Click a card and the screenshot and title carry over into the case study page through the View Transitions API. Each case study covers the problem, what I built, how it works, the results, and what I'd improve, plus more screenshots and a link to the next project.

The rest of the home page covers experience, skills, other projects, about, education and contact.

## Stack

React 19 with React Router 7 and Vite. Styling is one plain CSS file. Archivo (its width axis pushed to fully expanded for the display type) and Martian Mono (for the terminal and small HUD readouts) ship with the build through Fontsource. There are no animation libraries: the rain is a canvas, the photo fade is a CSS mask, and the page transitions are native.

## Editing content

All text lives in two files, so updating the site means editing data, not components:

- `src/data/projects.js` holds the featured projects and their case studies.
- `src/data/site.js` holds contact links, experience, skills, other projects and education.

Screenshots go in `public/work/<project>/` as WebP.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run lint
npm run build
```

## Deploy

`netlify.toml` builds with `npm run build` and publishes `dist`. `public/_redirects` sends every path to `index.html`, so case study URLs like `/work/asli` work on refresh.

## Accessibility and motion

- With reduced motion turned on, the rain draws one still frame, text doesn't scramble, the photo stays still, and page transitions switch off.
- Scrambled text keeps its real wording in an `aria-label`, so screen readers never hear the random characters.
- The terminal is a labelled form with a live log, so it works with a keyboard and a screen reader.
- The rain pauses when it scrolls out of view or the tab is hidden.
- Every interactive element has a visible focus style, and the nav collapses to a single Contact button on phones.
