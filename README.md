# TEDxKCT: Living Through VUCA 🔴✖️

Welcome to the official web application repository for **TEDxKCT** hosted at Kumaraguru College of Technology. The theme for this event is **"Living Through VUCA"**.

This platform is a beautifully engineered, mobile-first, and highly dynamic Single Page Application (SPA) designed to give users an immersive, premium introduction to our speakers, schedule, and event details.

## ✨ Features

- **Modern Glassmorphism UI**: Beautiful, frosted-glass components with deep contrast against a sleek dark mode.
- **Dynamic VUCA Animations**: An interactive, custom-built HTML5 `<canvas>` particle background that visualizes Volatility, Uncertainty, Complexity, and Ambiguity.
- **Touch-Optimized (Mobile-First)**: Meticulously designed for touch devices. Includes satisfying `cubic-bezier` scroll-reveal animations and interactive `:active` button states for app-like feedback.
- **Interactive Speaker Profiles**: Fluid, dynamic flex layout handling 7+ speakers with seamlessly scaled, uncropped images. Clicking a profile triggers a smooth glassmorphic modal with rich bios and integrated Instagram links.
- **Smooth Navigation**: Custom-built sticky Navbar and a comprehensive minute-by-minute timeline tracker for the entire event schedule.

## 🛠️ Tech Stack

- **Core**: [React.js](https://react.org/) (18+)
- **Build Tool**: [Vite](https://vitejs.dev/) for lightning-fast HMR and highly optimized production bundles.
- **Styling**: Vanilla CSS (CSS3) utilizing CSS variables, Flexbox/Grid architectures, and media queries for perfect responsiveness.
- **Icons**: [Lucide React](https://lucide.dev/) (with optimized inline SVGs where required).

## 🚀 Getting Started

To run the application locally on your machine, follow these steps:

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-github-repo-url>
   cd tedxkct
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available locally at `http://localhost:5173`.

## 📦 Building for Production

To create an optimized production build for deployment (e.g., Vercel, Netlify, or standard web hosting):

```bash
npm run build
```
This compiles the application into the `dist/` directory. You can preview the production build locally using:
```bash
npm run preview
```

## 📂 Key Project Structure

- `src/components/`: Modular React components (`Hero`, `About`, `Speakers`, `Schedule`, `Navbar`, `Footer`, etc.) along with their dedicated component-scoped `.css` files.
- `public/`: Houses static assets including `KCT.png`, the `agenda.pdf`, and the `speakers/` image directory.
- `src/index.css`: Defines global CSS variables, resets, and site-wide utility classes (like `.reveal` and `.glass-panel`).

## 📞 Contact & Details

- **Organizer Contact:** Allwin Kenneth P (+91 93611 05343)
- **Instagram:** [@tedxkct](https://www.instagram.com/tedxkct)
- **College:** [kct.ac.in](https://kct.ac.in)
- **Venue:** SKT Auditorium, Kumaraguru Campus, Coimbatore

---
*This independent TEDx event is operated under license from TED to Kumaraguru College of Technology.*
