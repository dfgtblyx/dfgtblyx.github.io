# Personal Robotics Portfolio

A modern portfolio website built with [Astro](https://astro.build) to showcase my robotics projects.

## 📁 Project Structure

```
/
├── public/
│   ├── projects/          # Project images go here
│   │   └── README.md      # Image guidelines
│   └── favicon.svg
├── src/
│   ├── data/
│   │   └── projects.ts    # ⭐ All project data (update this!)
│   ├── layouts/
│   │   └── Layout.astro   # HTML layout + global styles
│   ├── pages/
│   │   ├── index.astro    # Homepage
│   │   └── projects/
│   │       └── [slug].astro  # Dynamic project detail pages
│   └── env.d.ts
├── package.json
└── astro.config.mjs
```

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ✏️ How to Update Content

### 1. Update Project Information

Edit `src/data/projects.ts` to add/update your projects:

```typescript
{
  slug: "my-robot-project",           // URL-friendly name
  title: "Autonomous Robot Navigation",
  description: "Brief 2-3 sentence overview",
  image: "/projects/robot.jpg",        // Image in public/projects/
  technologies: ["Python", "ROS", "PyTorch"],
  category: "RL Algorithm",            // or "Low-Level Control"
  github: "https://github.com/...",
  video: "https://youtube.com/...",

  // Detailed page content
  detailedDescription: "Full project description...",
  challenges: "Challenges you faced...",
  solutions: "How you solved them...",
  results: "Outcomes and impact...",
  images: ["/projects/image1.jpg", "/projects/image2.jpg"]
}
```

### 2. Update Personal Information

Edit `src/pages/index.astro`:
- Line 76: Your name
- Line 81-84: Your bio
- Line 116-135: Contact links (GitHub, email, lab website)

Edit `src/layouts/Layout.astro`:
- Line 10-17: Meta tags (title, description)
- Line 31-37: Color scheme (optional)

### 3. Update Skills

Edit `src/pages/index.astro` (lines 8-12) to list your skills.

### 4. Add Project Images

Place images in `public/projects/` folder and reference them as `/projects/filename.jpg` in your project data.

## 📄 Pages

- **Homepage** (`/`): Hero section, projects grid, skills sidebar, contact info
- **Project Pages** (`/projects/[slug]`): Detailed view for each project

## 🎨 Customization

### Colors

Edit CSS variables in `src/layouts/Layout.astro` (lines 31-37):
```css
--color-primary: #1e40af;    /* Deep blue */
--color-accent: #06b6d4;     /* Cyan */
```

### Layout

- Homepage layout: `src/pages/index.astro`
- Project page layout: `src/pages/projects/[slug].astro`
- Global styles: `src/layouts/Layout.astro`

## 📝 TODO Checklist

Look for `TODO:` comments in the code to find all items that need updating:

```bash
# Search for all TODOs
grep -r "TODO:" src/
```

Key files with TODOs:
- `src/data/projects.ts` - Project data
- `src/pages/index.astro` - Personal info, skills
- `src/layouts/Layout.astro` - Meta tags, colors

## 🔗 Useful Links

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)
