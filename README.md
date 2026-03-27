# Harlan Stone — Character Sheet

A print-ready D&D character sheet for Harlan Stone (Human Variant Druid 3, Circle of the Moon), built with Astro and Tina CMS. Mobile responsive, with a fixed 9×6in card layout on desktop and in print.

## Getting started

Install dependencies:

```sh
npm install
```

If port 9000 is already in use from a previous session that wasn't cleanly shut down:

```sh
lsof -ti :9000 | xargs kill -9
```

Start the dev server:

```sh
npm run dev
```

| URL | What it is |
| :-- | :--------- |
| `http://localhost:4321/` | Character sheet |
| `http://localhost:4321/admin/index.html` | Tina CMS editor |

## Editing content

All character data lives in `content/characters/harlan.json`. You can edit it directly, or use the Tina CMS editor at `/admin/index.html` for a visual interface. Changes to the JSON hot-reload the sheet instantly in dev.

## Commands

| Command | Action |
| :-- | :-- |
| `npm run dev` | Start Tina + Astro dev server |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview the production build locally |

## Adding a second character

1. Add a new JSON file to `content/characters/` following the same structure as `harlan.json`
2. Create a new page at `src/pages/[name].astro` that imports the JSON

## Deploying

`npm run build` produces a static site in `./dist/` that can be hosted on Netlify, GitHub Pages, or any static host. To enable editing on the deployed site (rather than just locally), sign up at [tina.io](https://tina.io) and add `PUBLIC_TINA_CLIENT_ID` and `TINA_TOKEN` environment variables.
