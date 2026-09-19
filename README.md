# Data Analysis and Report Writing — Training of Trainers

A static, multi-page course website for the Phase 1 Training of Trainers (Bangladesh,
Côte d'Ivoire, Rwanda, Tanzania), Istanbul, 29 March – 2 April 2027. A CDC Foundation
program under Bloomberg Philanthropies' Data for Health Initiative, Data Impact Program.

No build step, no framework, no dependencies beyond two Google Fonts loaded over CDN.
Every page is plain HTML with a shared stylesheet and a small shared script.

## Structure

```
.
├── index.html            Program overview (the "Index" section)
├── agenda.html            Full five-day schedule, linking into each day page
├── day1.html              Monday   — full session content (7 sessions)
├── day2.html              Tuesday  — full session content (7 sessions)
├── day3.html              Wednesday — full session content (7 sessions)
├── day4.html              Thursday — full session content (6 sessions)
├── day5.html              Friday   — full session content (6 sessions)
├── facilitators.html      Facilitator profiles (currently placeholders — see below)
├── materials.html         Full training resource library, grouped by day
├── logistics.html         Venue, schedule and travel information
└── assets/
    ├── css/style.css      Shared stylesheet for every page
    └── js/main.js         Shared nav toggle, active-link highlighting, scrollspy
```

## Viewing it locally

No server or build step is required. Open `index.html` directly in a browser, or serve
the folder with any static file server, for example:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000/`.

## Publishing with GitHub Pages

1. Push this folder to a GitHub repository (the contents of this folder should sit at
   the repository root, or in a `/docs` folder if you prefer that convention).
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a branch," choose the
   branch (usually `main`), and the folder (`/root` or `/docs` to match step 1).
4. Save. GitHub will publish the site at `https://<your-org>.github.io/<repo-name>/`.

No Jekyll configuration is required — this is plain static HTML. If you later want to
avoid repeating the nav markup across nine files, converting the site to use Jekyll
includes (or another static-site generator) is a reasonable next step, but is not
required for GitHub Pages to serve it as-is.

## What still needs your input

Three things are intentionally left as clearly marked placeholders rather than invented:

- **Facilitator names, titles and bios** — `facilitators.html` has three placeholder
  cards, each marked with a red **`add details`** tag. Replace the bracketed text.
- **Material file links** — `materials.html` lists every resource referenced across the
  agenda with an **"Add link"** status tag and a `.docx`/`.xlsx`/`.pdf`/`.pptx` format
  badge. Once you add the actual files (for example under a `materials/` folder you
  create), replace each `<span class="status">Add link</span>` with a real
  `<a href="materials/day1/...">Download</a>` link.
- **Logistics items marked "to confirm"** — visa guidance, dress code, accommodation
  booking instructions, per diem process, and an on-site contact are shown in amber in
  `logistics.html` because they were not in the source material. The verified facts
  (venue address, check-in/out times, nearest airport) came from a web search and can be
  trusted as-is.

## About the agenda reconstruction

The five-day schedule in `agenda.html` and the day pages was reconstructed from a source
concept note whose schedule table has several merged cells that don't extract cleanly
into a flat grid. Every session shown maps to a real entry in that source table, with one
exception: a handful of Thursday and Friday afternoon blocks had no text in the source
table at all. Those are clearly marked with a **`not in source`** tag in `agenda.html`
and called out in the corresponding day page's session description. Review those before
finalizing — they're reasonable placeholders, not confirmed content.

## License / ownership

This site was produced as a training deliverable for the CDC Foundation. No license file
is included; add one appropriate to your organization's policy before making the
repository public.
