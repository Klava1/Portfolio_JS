# Klava's Portfolio - React Version

A modern, responsive portfolio website built with React and Vite.

## Features

- 🎨 Modern, dark-themed design with glassmorphism effects
- ⚛️ Built with React 18
- 🚀 Fast development with Vite
- 📊 Interactive radar chart using Chart.js
- 🎬 GSAP animations throughout
- 📱 Fully responsive design
- ♿ Accessible with ARIA labels

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The site will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
PORTFOLIO/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── About.jsx
│   │   ├── Stack.jsx
│   │   ├── SkillsChart.jsx
│   │   ├── VideoSection.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── data.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/          # Static assets (images, videos, PDFs)
├── index.html
├── vite.config.js
└── package.json
```

## Technologies Used

- React 18
- Vite
- GSAP (animations)
- Chart.js (radar chart)
- CSS3 (custom styling)

## Customization

To add or modify projects, technologies, or chart data, edit `src/data.js`.

## License

MIT


