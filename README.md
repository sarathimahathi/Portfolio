# Sarathi R — AI & Machine Learning Portfolio Website

A premium, modern personal portfolio website crafted for **Sarathi R**, Computer Science Engineering student specializing in **Machine Learning, Artificial Intelligence, Retrieval-Augmented Generation (RAG) systems, and AI-powered applications**.

Built with an editorial **Warm Sand, Beige & Terracotta** visual identity (`#FFFFFF` & `#EFEAE6` background with `#9E5D3E` terracotta and `#542917` espresso accents), high-fashion minimalism, floating 3D tech elements, responsive layouts, and scroll-triggered microinteractions.

---

## 🎨 Visual Identity & Color System

- **Primary Background**: Pure White (`#FFFFFF`)
- **Secondary Background**: Warm Sand / Nude Beige (`#EFEAE6`)
- **Primary Accent**: Warm Terracotta / Cognac (`#9E5D3E`)
- **Deep Accent**: Rich Espresso (`#542917`)
- **Dark Typography**: Editorial Noir (`#1A1614`)
- **Secondary Typography**: Warm Taupe (`#6E645E`)
- **Borders**: Refined Linen (`#E6DFD7`)
- **Ambient Glow**: `rgba(158, 93, 62, 0.14)`

---

## 🚀 Key Features

1. **Page Loading Experience**:
   - Custom animated geometric neural monogram with expanding rings.
   - Smooth progress counter and seamless reveal transition into the hero section.

2. **Navigation Bar**:
   - Translucent glassmorphic sticky header with active section tracking (ScrollSpy).
   - Custom SVG monogram brand mark.
   - Interactive mobile drawer menu with smooth spring animations.
   - Direct "Let's Connect" action and Résumé preview modal.

3. **Hero Section**:
   - Live availability badge: *"Exploring AI • Building Intelligent Systems"*.
   - Large bold typography: *"Turning Ideas Into Intelligent Solutions."*
   - Interactive floating 3D technology composition with cursor parallax response, glass tokens (`ML`, `AI`, `RAG`, `Python`, `LLMs`), and ambient glowing jade core.

4. **Editorial About Me Section**:
   - Two-column editorial layout detailing academic foundations and engineering mindset.
   - Personal philosophy highlight: *"Build with purpose. Learn continuously. Solve meaningful problems."*
   - 4 focus area cards: Machine Learning, Generative AI & RAG, Intelligent Automation, and Full-Stack AI Engineering.

5. **Curated Technical Skills Grid**:
   - Tailored for high-profile AI/ML engineering roles (Python, PyTorch, Scikit-learn, LangGraph, Qdrant, FastAPI, Docker, TypeScript).
   - Filter tabs by discipline with proficiency badges (`Specialized`, `Advanced`, `Core`). No fake percentage meters.

6. **Featured Engineering Projects**:
   - **AI-Powered Depression Prediction**: Ethical, privacy-first NLP risk scoring with SHAP explainability.
   - **Sovereign AI Workbench**: Air-gapped confidential document workbench with Qdrant vector retrieval and LangGraph.
   - **Real-Time Patient Anomaly Detector**: Streaming telemetry anomaly detector with isolation forests and sub-42ms latency.
   - **AgroSim-AI Decision Simulator**: Climate-aware sowing and crop yield simulator.
   - In-depth **Project Architecture Modal** for viewing system blueprints, technical innovations, and responsible AI safeguards.

7. **Vertical Experience & Milestones Timeline**:
   - Glowing connected timeline of academic milestones (BE Computer Science), hackathons, certifications, and LeetCode algorithmic problem solving.

8. **Beyond The Code (Engineering Approach)**:
   - 3 interactive cards with 3D cursor tilt effects: **Explore**, **Build**, and **Improve**.

9. **Interactive Contact Section**:
   - Client-validated contact form with real-time feedback and transmission simulation.
   - Direct links for Email, GitHub, LinkedIn, and LeetCode profiles.
   - Floating orbital monogram symbol.

10. **Curriculum Vitae / Résumé Modal**:
    - Clean formatted modal displaying full professional background, education, and credentials with instant print/save PDF support.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 8
- **Styling**: Tailwind CSS + Custom CSS Design System
- **Animations**: Framer Motion
- **Icons**: Lucide React + Custom SVG Monograms
- **Fonts**: Plus Jakarta Sans, Outfit, JetBrains Mono

---

## 📁 Project Structure

```
├── public/
│   └── favicon.svg              # Custom jade green brand monogram
├── src/
│   ├── assets/                  # Static assets
│   ├── components/
│   │   ├── About.tsx            # Editorial bio and focus area cards
│   │   ├── Approach.tsx         # 3D tilt "Beyond The Code" cards
│   │   ├── BrandMonogram.tsx    # Geometric AI neural monogram
│   │   ├── Contact.tsx          # Validated contact form and direct links
│   │   ├── CustomCursor.tsx     # Non-intrusive desktop pointer accent
│   │   ├── Experience.tsx       # Vertical milestone timeline
│   │   ├── Footer.tsx           # Footer with social links & back-to-top
│   │   ├── Hero.tsx             # Hero section & floating technology composition
│   │   ├── Icons.tsx            # Custom GitHub, LinkedIn, LeetCode SVGs
│   │   ├── LoadingScreen.tsx    # Center monogram loader & progress indicator
│   │   ├── Navbar.tsx           # Sticky translucent header with scroll spy
│   │   ├── ProjectModal.tsx     # Deep-dive architecture modal
│   │   ├── Projects.tsx         # Varied project showcase cards
│   │   ├── ResumeModal.tsx      # Printable CV preview sheet
│   │   ├── ScrollProgress.tsx   # Top progress bar
│   │   └── Skills.tsx           # Categorized competencies with filter tabs
│   ├── data/
│   │   └── portfolioData.ts     # Single source of truth for all portfolio data
│   ├── App.tsx                  # Main application orchestrator
│   ├── index.css                # Tailwind directives & design system utilities
│   └── main.tsx                 # Entrypoint
├── index.html                   # SEO tags, OpenGraph, Google Fonts
├── tailwind.config.js           # White & Jade Green color tokens
└── package.json
```

---

## ⚙️ How to Customize Personal Information

All information (biography, skills, projects, links, and credentials) is organized in a single central file:
👉 [src/data/portfolioData.ts](file:///c:/Users/ASUS/Desktop/Portfolio/src/data/portfolioData.ts)

Edit `PERSONAL_DATA`, `SKILLS_DATA`, `PROJECTS_DATA`, and `TIMELINE_DATA` to update content anytime.

---

## 💻 Development & Deployment

### Run Locally:
```bash
npm install
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### Build for Production:
```bash
npm run build
```
The optimized bundle will be generated in the `dist/` directory.

### Deploy to Vercel / Netlify / GitHub Pages:
- **Vercel**: Run `npx vercel` or connect the GitHub repository. Build command: `npm run build`, Output directory: `dist`.
- **Netlify**: Drag and drop the `dist/` folder or connect via Git.
- **GitHub Pages**: Build the project and deploy the `dist/` directory via `gh-pages`.
