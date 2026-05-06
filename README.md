# lucamannella.github.io

Personal website of Luca Mannella, hosted on GitHub Pages.

Website: https://lucamannella.github.io

## Overview

This repository contains a small static academic website with pages for:

- home and selected publications
- full publications list and theses
- CV
- contact information and academic profiles

The site is intentionally simple to edit and deploy: content is stored directly in HTML files, shared styling lives in a single CSS file, and a small JavaScript file supports the inline BibTeX viewer on the publications page.

## 📁 Main Files

- `index.html` — homepage with short bio, research overview, and selected publications
- `publications.html` — journal papers, conference papers, and theses
- `cv.html` — academic and professional background
- `contact.html` — email, affiliation, and profile links
- `style.css` — shared site styling and responsive rules
- `publications.css` — print styling for the publications page
- `publications.js` — BibTeX toggle/viewer behavior
- `assets/bibtex/` — individual BibTeX entries and a combined bibliography file

## Publications Content

Publication and thesis entries may include:

- title, authors, venue, and year
- DOI, arXiv, institutional repository, or thesis-page links
- BibTeX download links
- optional supplementary resources such as slides, videos, and thesis PDFs

Selected publications shown on the homepage are a curated subset of the full list on `publications.html` and should be kept in sync when featured entries change.

## Technical Notes

- static site, no build step required
- semantic HTML with shared reusable styling
- responsive layout for desktop and mobile
- relative paths for GitHub Pages compatibility

## Maintenance Notes

- when publications are added or edited, update both `publications.html` and any mirrored featured entries in `index.html`
- keep BibTeX files aligned with publication entries in `assets/bibtex/`
- prefer README updates that describe structure and behavior rather than hard-coded counts or rapidly changing inventories

## Deployment

The site is deployed via GitHub Pages. After changes are pushed to the repository, the public site updates automatically.
