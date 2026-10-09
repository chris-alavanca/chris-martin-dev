# Chris Martin: portfolio

Single-page portfolio of web and mobile apps, deployed on Vercel.

## Adding a project

1. Open `app.js`, find the `PROJECTS` list, copy one entry and fill it in (newest first, both languages).
2. Add the project's live address to `frame-src` in `vercel.json`. The page shows each project as a live preview, and the security policy only allows the addresses listed there. Without this the preview stays blank.
3. Commit. Vercel redeploys automatically.

## Files

- `index.html`: page structure. `styles.css`: styles. `app.js`: text (EN/ES) and the project list.
- `vercel.json`: security headers (content security policy, no framing, no content sniffing, referrer and permissions policies).

Static HTML, CSS and JavaScript. No build step and no third-party requests (system fonts only).
