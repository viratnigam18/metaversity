# 🌐 Metaversity — Metaverse Club, VIT Bhopal

> **Where Reality Meets the Next Dimension**

The official website of **Metaversity**, the Metaversity Club of VIT Bhopal University. Built with React and Vite, featuring smooth animations and a modern dark theme.

---

## ✨ Features

- **Home** — Hero section with animated logo, taglines, feature cards & sponsor showcase
- **Events** — Upcoming events (Jashn-e-Sangeet 🎶) with registration + past event archive
- **About** — Club mission, vision & activities
- **Team** — Meet the core team members
- **Gallery** — Photo gallery with lightbox viewer
- **FAQ** — Expandable Q&A section
- **Join Us** — Membership info & Instagram CTA
- **Event Popup** — Floating notification for upcoming events

## 🛠️ Tech Stack

| Layer | Tech |
|-------|------|
| Framework | [React 18](https://react.dev/) |
| Build Tool | [Vite](https://vitejs.dev/) |
| Routing | React Router DOM |
| Animations | Framer Motion |
| Styling | Vanilla CSS (glassmorphism, gradients) |
| Font | [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/metaversity.git
cd metaversity

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The production build will be output to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
metaversity/
├── public/
├── src/
│   ├── assets/            # Images & logos
│   ├── components/        # Reusable components
│   │   ├── Navbar.jsx     # Navigation bar
│   │   ├── Footer.jsx     # Footer
│   │   ├── FestPopup.jsx  # Event notification popup
│   │   └── Countdown.jsx  # Countdown timer
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── Event.jsx
│   │   ├── About.jsx
│   │   ├── Team.jsx
│   │   ├── Gallery.jsx
│   │   ├── FAQ.jsx
│   │   └── JoinUs.jsx
│   ├── App.jsx            # Root component with routing
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles & design tokens
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary | `#6A427C` |
| Text | `#B87CD3` |
| Background | `#0f0515` |
| Accent Glow | `rgba(184, 124, 211, 0.3)` |

## 🌍 Deployment

This project is deployed on **Vercel**. Any push to the `main` branch triggers an automatic deployment.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📬 Contact

- **Instagram** — [@metaverseclub_vitb](https://www.instagram.com/metaverseclub_vitb)
- **College** — VIT Bhopal University

## 📄 License

This project is maintained by the Metaversity Club, VIT Bhopal.

---

<p align="center">
  Built with ❤️ by <strong>Virat Nigam & Md. Anzal Khan</strong> — The Metaverse Club
</p>
