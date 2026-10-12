# EduSkills Certificate Verification Portal (Static Clone)

This is a standalone, self-contained static clone of the **EduSkills & AICTE Official Certificate Verification Portal**.

## Features
- **Standalone & Independent**: Located in this separate folder so it does not disturb the EduSkills Student Portal.
- **Pixel-Perfect Verification Card**:
  - Matches the exact official verification layout.
  - Verification badge seal in centered white container.
  - Certificate details for **HARSHA PRIYA PUTTA** (Celonis Business Analyst Virtual Internship).
  - Official grade scale breakdown table.
- **Official Header Banner**: Contains the high-resolution AICTE, Ministry of Education, and partner banner image.
- **Integrated Certificate PDF**: Embedded official PDF link to view or download directly.
- **Zero Dependencies**: Pure HTML5 and CSS. No `npm install`, node_modules, or build tools needed.

## How to View Locally
Simply double-click `index.html` or open it with any web browser (Chrome, Edge, Firefox, Safari).

Alternatively, serve with any local HTTP server:
```bash
npx serve .
# or
python -m http.server 8080
```

## How to Deploy (e.g. to Render, Vercel, or GitHub Pages)
- **Render**: Create a "Static Site" pointing to the `verification-portal` directory. Set publish directory to `.`.
- **GitHub Pages**: You can publish this directory directly or host it alongside your other repos.
