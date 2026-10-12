# Nihar Girish, portfolio

My portfolio site: five featured projects with a case study each, my experience, skills and contact details.

## What's on it

The home page opens with my name set large over a field of falling 0s and 1s. Digits near your cursor turn green and fall faster. My photo sits in a brutalist frame on the right and shifts as you move the pointer, while the green block behind it moves the other way.

Below that, a bento grid holds the five featured projects: Asli, DatasetFinder, ICAO Weather Risk, Muse Copywriter and the AQ-10 Screener. Click a card and the screenshot and title carry over into the case study page through the View Transitions API. Each case study covers the problem, what I built, how it works, the results, and what I'd improve, plus more screenshots and a link to the next project.

The rest of the home page covers experience, skills, other projects, about, education and contact.

## Stack

React 19 with React Router 7 and Vite. Styling is one plain CSS file. Archivo (its width axis pushed to fully expanded for the display type) and Martian Mono (only in the binary rain) ship with the build through Fontsource. There are no animation libraries; the rain is a canvas and the transitions are native.

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

- With reduced motion turned on, the rain draws one still frame, the photo stays put, and page transitions switch off.
- The rain pauses when it scrolls out of view or the tab is hidden.
- Every interactive element has a visible focus style, and the nav collapses to a single Contact button on phones.
