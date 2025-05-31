# 🏗️ LinuxBuddy - FSD Architecture

This project follows **Feature-Sliced Design (FSD)** architecture principles for better maintainability and scalability.

## 📁 Project Structure

```
src/
├── shared/           # Shared utilities and components
│   ├── ui/          # Reusable UI components
│   │   ├── Layout/  # Main layout wrapper
│   │   └── CodeBlock/ # Code syntax highlighting
│   └── data/        # Shared data and constants
│       └── chapters.js # Course chapters data
├── pages/           # Page-level components
│   ├── HomePage/    # Landing page
│   └── ChapterPage/ # Individual chapter pages
├── components/      # Legacy components (to be refactored)
└── App.jsx         # Main app with routing
```

## 🚀 Key Features

### 1. **Routing System**
- **React Router v6** for client-side navigation
- **Dynamic routes** for chapters: `/chapter/:slug`
- **Nested routing** with shared layout

### 2. **Chapter System**
- **Clickable chapter cards** navigate to dedicated pages
- **Rich content** with code examples and explanations
- **Copy-to-clipboard** functionality for code blocks
- **Responsive design** for all devices

### 3. **Data Management**
- **Centralized chapter data** in `shared/data/chapters.js`
- **Slug-based routing** for SEO-friendly URLs
- **Structured content** with sections and code examples

## 🎯 How It Works

### Chapter Navigation
1. User clicks on a chapter card from the homepage
2. Router navigates to `/chapter/{slug}`
3. `ChapterPage` component loads the specific chapter data
4. Content is rendered with syntax-highlighted code blocks

### Adding New Chapters
1. Add chapter data to `src/shared/data/chapters.js`
2. Include: `id`, `icon`, `title`, `description`, `slug`, and `content`
3. Chapter automatically appears in the grid and is accessible via routing

### Code Examples
- **Syntax highlighting** for bash/shell commands
- **Copy button** for easy code copying
- **Terminal-style** design with window controls

## 🔧 Technical Stack

- **React 19** with functional components
- **React Router v6** for routing
- **Tailwind CSS v4** for styling
- **Vite** for development and building

## 📝 Content Structure

Each chapter follows this structure:
```javascript
{
  id: '01',
  icon: '🐧',
  title: 'CHAPTER TITLE',
  description: 'Brief description',
  slug: 'url-friendly-slug',
  content: {
    overview: 'Chapter overview text',
    sections: [
      {
        title: 'Section Title',
        content: 'Section explanation',
        codeExample: 'bash commands here'
      }
    ]
  }
}
```

## 🎨 Design Principles

- **Terminal-inspired** dark theme
- **Linux green** accent colors (#00ff00)
- **Monospace fonts** for authentic feel
- **Responsive grid** layouts
- **Smooth transitions** and hover effects

## 🚀 Future Enhancements

- [ ] Search functionality
- [ ] Progress tracking
- [ ] Interactive terminal
- [ ] User authentication
- [ ] Bookmarking system
- [ ] Mobile app version
