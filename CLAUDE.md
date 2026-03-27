# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing website for **Impermeabilizaciones Zavala**, a waterproofing company in Mallorca, Spain. No build tools, no bundler, no framework — plain HTML/CSS/JS served as static files.

## Development

Open `index.html` directly in a browser or use any static file server (e.g., `python3 -m http.server 8000`). There are no build steps, no package manager, and no tests.

## Architecture

- **`index.html`** — Single-page landing with all sections: hero, services, pricing, case studies, gallery (with lightbox), process steps, guarantee, reviews, blog teasers, contact, and footer. Sections are linked via anchor IDs (`#servicios`, `#precios`, `#casos`, `#garantia`, `#blog`, `#contacto`).
- **`styles.css`** — All styling via CSS custom properties defined in `:root`. No preprocessor.
- **`scripts.js`** — Vanilla JS: IntersectionObserver for scroll-reveal animations, mobile nav toggle, sticky header shadow, contact form -> WhatsApp redirect, smooth scroll, and gallery lightbox.
- **`blog/`** — SEO-oriented blog posts as standalone HTML files (each links back to `../styles.css` and has its own inline `<style>` overrides).
- **`fotos/` and `fotos_seleccion/`** — Project photography. Root-level `.jpg` files are curated gallery images used in `index.html`.

## Design System

- **Fonts**: Cormorant Garamond (headings) + DM Sans (body), loaded from Google Fonts
- **Palette**: Cream `#F5F0E8`, Deep Blue `#1B3A5C`, Gold `#C9A84C` — all via CSS variables (`--color-cream`, `--color-blue`, `--color-gold`, etc.)
- **Animations**: `.reveal` class + IntersectionObserver triggers `.visible`; stagger with `.reveal-delay-1` through `.reveal-delay-4`
- **Mobile**: Responsive via `@media` blocks at the bottom of `index.html` (inline `<style>`) and in `styles.css`. Sticky mobile CTA bar replaces floating WhatsApp button on small screens.

## Key Details

- All content is in **Spanish** (lang="es"). Keep all user-facing text in Spanish.
- Primary CTA channels: WhatsApp (`wa.me/34650589899` and `wa.me/34670219181`) and phone (`+34 650 589 899`).
- The contact form in `scripts.js` still has a placeholder WhatsApp number (`34XXXXXXXXX`) — the live links in `index.html` use the real numbers.
- Blog posts use a different font (Inter) than the main site — this is intentional per-page styling.
