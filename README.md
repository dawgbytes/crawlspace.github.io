# 🏡 The Crawl Space Guys NC — High-Converting Lead Generation Website

A professional, high-performance, mobile-first local service website designed specifically for crawl space repair, encapsulation, moisture control, and structural wood rot repair in Raleigh, NC and surrounding Triangle communities.

---

## 🚀 Quick Start

### 1. Install Dependencies
Run this in the project root:
```bash
npm install
```

### 2. Start Local Development Server
Launch the hot-reloading development server:
```bash
npm run dev
```
Open the provided local URL (typically `http://localhost:5173/`) in your browser to preview the site.

### 3. Build for Production
Generate the optimized production bundle under `/dist`:
```bash
npm run build
```

---

## 🛠️ Customization & Branding Guide

The entire website is powered by a central configuration file located at `src/config/siteConfig.js`. You can customize all business data instantly by changing values in this file.

### Editing `src/config/siteConfig.js`
Open [siteConfig.js](file:///C:/RJ%20Biz%20Websites/Crawlspace/src/config/siteConfig.js) and modify the fields:

- **Business Details**: Change the `companyName`, `phone` (with a clean raw `phoneNumeric` for mobile click-to-call), `email`, `address`, and state `licenseInfo`.
- **Financing Terms**: Update the `financingInfo` to match current promos (e.g. 0% for 12 months).
- **Service Areas**: Add or remove local cities/towns in the Triangle area list to automatically update the Raleigh section.
- **Reviews**: Add 5-star testimonials from real Raleigh area homeowners.
- **FAQs**: Modify the interactive Q&A questions and answers.

---

## 📈 SEO, Performance & Conversion Optimization

This website has been built to achieve exceptional performance and conversion metrics out of the box:

### 1. On-Page & Local SEO
- **Descriptive Titles & Meta**: Rich meta tags optimized for "Crawl Space Repair Raleigh NC", "Crawl Space Encapsulation", and triangle cities.
- **Location-Based Copy**: Highlights geological factors like Raleigh's dense red clay expansion and the Stack Effect physics in NC homes.
- **NAP Data**: Name, Address, and Phone numbers are fully consistent and structured.
- **Semantic HTML5**: Native layout tags (`<header>`, `<main>`, `<section>`, `<footer>`) with a single `<h1>` tag in the hero and appropriate `<h2>`/`<h3>` hierarchies.

### 2. Technical SEO & Schema
- **JSON-LD Local Business Schema**: Injected into `index.html` as a `HomeAndConstructionBusiness` containing geocoordinates, telephone, area served, and services offered.
- **JSON-LD FAQ Schema**: Configured for immediate rich snippets in Google Search Results.
- **Robots & Sitemap**: Pre-generated `robots.txt` and `sitemap.xml` referencing correct canonical endpoints.

### 3. Performance & Accessibility
- **Performance**: Vanilla lightweight CSS, Zero heavy frameworks, and native `loading="lazy"` tags on all images.
- **Skip-To-Content Link**: Perfect keyboard navigation support for screen readers.
- **High Contrast Styling**: Earthy premium green and navy palettes with large, easy-to-read typography (Google Fonts Outfit + Inter).
- **Interactive Focus**: Problem cards support keydown events for complete keyboard accessibility (`tabIndex={0}`, `onKeyDown`).

### 4. High-Conversion Lead Funnels
- **Primary CTA Form**: "Schedule a Free Inspection" hero form with zip code, contact fields, and structural message context.
- **Secondary Callback Form**: A quick-action "Request Call Back" container in the final CTA designed for mobile users who want an instant call back.
- **Interactive Problems Grid**: Homeowners clicking on a specific warning card (e.g., "Musty Smells", "Sagging Floors") are automatically scrolled to the main inspection form with a pre-filled concern message.
