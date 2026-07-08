# Aman Raj Kushwaha — Portfolio

A responsive, single-page developer portfolio built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**. Features dark/light theme, smooth scroll navigation, and animated sections.

---

## Tech Stack

- **React 19** — UI library
- **Vite** — build tool & dev server
- **Tailwind CSS v4** — utility-first styling
- **Framer Motion** — animations & transitions
- **react-scroll** — smooth anchor-based navigation
- **react-icons** — icon library

---

## Project Structure

```
src/
├── main.jsx              # Entry point — mounts ThemeProvider + App
├── App.jsx               # Root layout — composes all sections
├── index.css             # Global styles & Tailwind directives
│
├── context/
│   └── ThemeContext.jsx  # Dark/light theme state (sessionStorage persisted)
│
├── hooks/
│   └── useActiveSection.js  # IntersectionObserver — tracks visible section
│
├── data/
│   └── portfolioData.js  # Single source of truth for all content
│
└── components/
    ├── ScrollProgress.jsx   # Fixed top progress bar (framer-motion spring)
    ├── Navbar.jsx           # Sticky nav with active link, theme toggle, resume download
    ├── Home.jsx             # Landing section — name, title, CTA buttons
    ├── About.jsx            # Bio, stats, and feature cards
    ├── Skills.jsx           # Skill categories with icons
    ├── Projects.jsx         # Project cards with tech stack & GitHub links
    ├── Experience.jsx       # Work/project experience timeline
    ├── Education.jsx        # Education history cards
    ├── Achievements.jsx     # Certifications & DSA milestones
    ├── Contact.jsx          # Contact form / info section
    ├── Footer.jsx           # Footer with links
    └── FloatingWidgets.jsx  # Floating social sidebar (desktop) + bottom nav (mobile) + back-to-top
```

---

## Component Flow

```
main.jsx
└── ThemeProvider          (provides isDark, toggleTheme via context)
    └── App.jsx
        ├── ScrollProgress     (fixed progress bar — always visible)
        ├── Navbar             (fixed top — uses useActiveSection + ThemeContext)
        ├── <main>
        │   ├── Home           (section: home)
        │   ├── About          (section: about)
        │   ├── Skills         (section: skills)
        │   ├── Projects       (section: projects)
        │   ├── Experience     (section: experience)
        │   ├── Education      (section: education)
        │   ├── Achievements   (section: achievements)
        │   └── Contact        (section: contact)
        ├── Footer
        └── FloatingWidgets    (social links + back-to-top — always visible)
```

### Data Flow

- `portfolioData.js` exports all static content (personal info, projects, skills, etc.)
- Every component imports only what it needs from `portfolioData.js`
- `ThemeContext` provides `isDark` and `toggleTheme` to any component via `useTheme()`
- `useActiveSection` hook uses `IntersectionObserver` on all section IDs and returns the currently visible one — consumed by `Navbar` to highlight the active link

---

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

---

## Customization

All content lives in `src/data/portfolioData.js` — update your name, links, projects, skills, and education there without touching any component.
