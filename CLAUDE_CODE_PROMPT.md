# Personal Website Build Prompt for Claude Code

**Create a personal website using React + Vite. Build it completely from scratch.**

## Project Overview

Build a React single-page application with Vite that features a landing page with interactive image cycling, navigation menu, and project showcase. The site should be fully responsive and styled with a cohesive design system.

## Design System

- **Background Color:** Pastel brown (#C4A57B) used throughout all pages
- **Header Font:** "Love Ya Like A Sister" from Google Fonts
- **Body Font:** "Stack Sans Text" from Google Fonts
- **Paper Effect for Headers:** Behind each page header (h1), place a white SVG shape that looks like a ripped/torn piece of paper. The SVG should:
  - Be slightly larger than the text it sits behind
  - Have irregular, organic edges that look hand-torn (use curved paths with Q/T Bezier curves)
  - Sit at z-index 1 while text sits at z-index 2
  - Be positioned absolutely centered behind the text
  - Example SVG path: `M 10 15 Q 30 5, 50 10 T 90 8...` (create wavy, uneven edges)
  - Only appear as subtle background, not dominating the design

## Directory Structure

```
personal-website/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Navigation.css
│   │   ├── ProjectCard.jsx
│   │   └── ProjectCard.css
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── LandingPage.css
│   │   ├── AboutMe.jsx
│   │   ├── AboutMe.css
│   │   ├── Projects.jsx
│   │   └── Projects.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
│   ├── landing-1.jpg
│   ├── landing-2.jpg
│   ├── landing-3.jpg
│   ├── landing-4.jpg
│   └── landing-5.jpg
├── index.html
├── vite.config.js
├── package.json
├── .gitignore
└── README.md
```

## Detailed Component Specs

### 1. LandingPage (`src/pages/LandingPage.jsx`)

**Purpose:** Interactive entry point with image carousel and click-to-tilt animation.

**Functionality:**
- Display 5 images from `public/` (landing-1.jpg through landing-5.jpg)
- Images are 300x300px (on desktop), with rounded corners (8px radius)
- Pastel brown background behind images
- When user presses/clicks/touches the image:
  - Image should tilt/rotate 20 degrees to the right
  - Animation should be fairly fast (~0.15s)
  - Use CSS transform: `rotateZ(20deg)`
- When user releases mouse/touch:
  - Image snaps back to upright (0deg) even faster (~0.08s)
  - Once it completes the snap-back, the image cycles to the next one
  - Images cycle: 1→2→3→4→5→1 (repeats)
- Text below image says "check out the hamburger menu"
- Mobile responsive: images scale down to 200x200px on mobile

### 2. Navigation (`src/components/Navigation.jsx`)

**Purpose:** Hamburger menu navigation.

**Functionality:**
- Fixed hamburger icon in top-right corner
- Three horizontal lines that animate when clicked:
  - Line 1 and 3 rotate to form an X
  - Line 2 fades out
- When hamburger is clicked, a menu slides in from the right
- Menu has semi-transparent dark overlay behind it
- Menu items (all using "Love Ya Like A Sister" font):
  - Home (links to `/`)
  - About Me (links to `/about`)
  - Projects (links to `/projects`)
- Clicking a menu item closes the menu and navigates
- Clicking outside the menu closes it

### 3. AboutMe (`src/pages/AboutMe.jsx`)

**Purpose:** Biography/about section.

**Functionality:**
- Page header "About Me" with paper-effect SVG background
- Placeholder text that user will replace with their bio
- Full-width responsive layout
- Text content area with good line-height (1.8) for readability

### 4. Projects (`src/pages/Projects.jsx`)

**Purpose:** Showcase of projects in a grid layout.

**Functionality:**
- Page header "Projects" with paper-effect SVG background
- Grid layout with project cards (responsive: auto-fill with 300px minimum, 1fr maximum)
- On mobile (max-width 768px): single column
- Each card is a ProjectCard component (see below)
- Grid gap: 2rem

### 5. ProjectCard (`src/components/ProjectCard.jsx`)

**Purpose:** Individual project display card.

**Props:**
```javascript
{
  name: string,           // Project name
  description: string,    // 1-2 sentence description
  codeLink: string,       // URL to GitHub or code repo
  writeupLink: string,    // URL to detailed write-up (Google Doc, etc.)
  gifSrc: string,         // Optional: path to GIF demonstrating project
  isCurrentlyWorking: boolean  // Shows red badge if true
}
```

**Styling:**
- White background with rounded corners (8px)
- Padding: 1.5rem
- Box shadow for depth
- Hover effect: slight upward translation (-4px) + increased shadow
- If `gifSrc` provided: display 200px tall image at top with `object-fit: cover`
- Project name uses "Love Ya Like A Sister" font, 1.5rem size
- Description: 0.95rem, line-height 1.6
- Links (Code/Write-up) styled as buttons:
  - Background: pastel brown (#C4A57B)
  - Padding: 0.5rem 1rem
  - Rounded corners 4px
  - Hover: reduced opacity
  - Flex layout, gap 1rem
- Red badge (#ff6b6b) in top-right if `isCurrentlyWorking` is true:
  - Text: "Currently Working On"
  - Uppercase, bold, small font (0.75rem)
  - Padding: 0.25rem 0.75rem
  - Border radius: 20px (pill shape)

## Routing Setup

Use React Router (v6):
- `/` → LandingPage (full screen, no navigation)
- `/about` → Navigation + AboutMe
- `/projects` → Navigation + Projects

## Key Implementation Details

**Landing Image Animation:**
- Use `onMouseDown` / `onMouseUp` for desktop
- Use `onTouchStart` / `onTouchEnd` for mobile
- Also handle `onMouseLeave` to trigger mouseup if user drags away
- Use CSS transition for smooth animation
- Image cycling happens after animation completes (on release)

**Paper Effect SVG:**
- Create a simple SVG with a single path element
- Path should use quadratic Bezier curves (Q command) for organic edges
- Example: `M 10 15 Q 30 5, 50 10 T 90 8 T 130 12 T 170 8 T 210 15 L 230 20 Q 235 35, 230 50 L 220 60 Q 200 65, 180 60 T 140 65 T 100 62 T 60 65 T 20 60 Q 5 50, 10 35 Z`
- Fill: white, opacity: 0.6
- Width/height: ~250x80 (adjust based on text length)

**Responsive Design:**
- Mobile breakpoint: 768px
- On mobile:
  - Landing images: 200x200px (from 300x300px)
  - Font sizes reduced by ~10-15%
  - Padding reduced
  - Project grid: single column
  - Menu takes full width (or 80% with right margin)

**Global Styles:**
- All pages have pastel brown background
- Default line-height: 1.8 for text
- All fonts loaded from Google Fonts in index.html

## Setup Instructions for Claude Code

1. Initialize Vite React project: `npm create vite@latest personal-website -- --template react`
2. Navigate to directory: `cd personal-website`
3. Install React Router: `npm install react-router-dom`
4. Delete default Vite example files
5. Create all folders and files as specified above
6. Copy the 5 landing images into `public/` (they will be provided)
7. Run `npm install` to ensure all dependencies
8. Run `npm run dev` to start development server
9. Verify site runs at `http://localhost:5173`

## Result

A fully functional, responsive personal website with:
- ✅ Interactive landing page with image cycling
- ✅ Paper-effect headers on all pages
- ✅ Hamburger navigation menu
- ✅ Project showcase grid
- ✅ Mobile responsive design
- ✅ Cohesive pastel brown + hand-drawn font aesthetic
- ✅ Ready to customize with user's content
