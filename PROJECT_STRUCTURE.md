# Project Structure

## 📁 Organized File Structure

```
PORTFOLIO/
├── public/                    # Static assets (served at root)
│   ├── images/               # All images (logos, tech icons, project images)
│   │   ├── logo.jpg
│   │   ├── html.png
│   │   ├── css3.png
│   │   ├── javascript.png
│   │   ├── react.svg
│   │   ├── split_bill.jpg
│   │   ├── weather_API.jpg
│   │   └── ... (all other images)
│   ├── videos/                # Video files
│   │   ├── me_portfolio1.mp4
│   │   └── me_portfolio.mp4
│   ├── documents/             # PDFs and documents
│   │   └── CV.pdf
│   └── projects/             # Standalone HTML projects (if needed)
│
├── projects/                  # Standalone HTML project files
│   ├── split-bill/
│   │   ├── index.html
│   │   ├── script.js
│   │   └── style.css
│   ├── choices-game/
│   │   ├── index.html
│   │   ├── script.js
│   │   └── style.css
│   ├── depression-test/
│   │   ├── index.html
│   │   ├── script.js
│   │   └── style.css
│   └── sushi-restaurant/
│       ├── index.html
│       ├── script.js
│       └── style.css
│
├── src/                       # React source code
│   ├── components/            # React components
│   │   ├── Header.jsx
│   │   ├── About.jsx
│   │   ├── Stack.jsx
│   │   ├── SkillsChart.jsx
│   │   ├── VideoSection.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── data.js                # Portfolio data configuration
│   ├── App.jsx                # Main React app
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles
│
├── index.html                 # Vite entry point
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies
└── README.md                  # Documentation
```

## 📂 Directory Explanations

### `public/`
Files in the `public/` directory are served at the root URL. For example:
- `public/images/logo.jpg` → accessible at `/images/logo.jpg`
- `public/videos/video.mp4` → accessible at `/videos/video.mp4`

### `projects/`
Standalone HTML projects that can be accessed independently:
- `/projects/split-bill/` - Split Bill Calculator
- `/projects/choices-game/` - Choices Game
- `/projects/depression-test/` - Depression Assessment
- `/projects/sushi-restaurant/` - Sushi Restaurant

### `src/`
React application source code:
- **components/** - Reusable React components
- **data.js** - Centralized data (technologies, projects, chart config)
- **App.jsx** - Main application component
- **main.jsx** - React entry point

## 🔗 Asset Paths

All asset paths in the React app are relative to the `public/` folder:

- Images: `/images/filename.ext`
- Videos: `/videos/filename.ext`
- Documents: `/documents/filename.ext`
- Projects: `/projects/project-name/`

## 🚀 Development

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Build for production: `npm run build`


