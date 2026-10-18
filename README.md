# Ishaan Garg — Portfolio

A single-page portfolio built with React 18 and Vite. No UI libraries: styling is plain CSS with theme tokens and a dark and a light theme.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Editing content

All text (profile, projects, experience, education, skills, achievements) lives in [`src/data.js`](src/data.js).
Project screenshots are in `public/shots/` and are referenced by file name (without `.png`) in each project's `images` array.
