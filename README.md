# 🐧 LinuxBuddy - Complete Linux Learning Platform

A comprehensive, modern Linux learning platform with **34 complete chapters** covering everything from Linux basics to advanced DevOps tools. Built with React and Feature-Sliced Design (FSD) architecture - completely **FREE forever**!

## ✨ Features

### 🎯 **Complete Learning Experience**
- **34 Full Chapters**: From "Start using Linux" to "Coolify" - complete curriculum
- **Interactive Navigation**: Next/Previous chapter buttons for seamless learning flow
- **Rich Content**: Each chapter includes overview, detailed sections, and code examples
- **Copy-to-Clipboard**: Terminal-style code blocks with one-click copying
- **Responsive Design**: Perfect experience on desktop, tablet, and mobile

### 🏗️ **Modern Architecture**
- **Feature-Sliced Design (FSD)**: Maintainable and scalable code structure
- **React Router v6**: Seamless navigation with SEO-friendly URLs
- **Component-Based**: Reusable UI components and shared utilities
- **TypeScript Ready**: Clean, type-safe development experience

### 🎨 **Professional Design**
- **Terminal-Inspired Theme**: Authentic Linux command-line aesthetic
- **Linux Green Accents**: Consistent branding throughout
- **Smooth Animations**: Hover effects and transitions
- **Mobile-First**: Responsive design for all devices

## 🛠️ Tech Stack

- **React 18** - Modern UI library with hooks and functional components
- **React Router v6** - Client-side routing with nested routes
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Feature-Sliced Design** - Scalable frontend architecture
- **ESLint & Prettier** - Code quality and formatting

## 📦 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mrx-arafat/linux-buddy.git
cd linux-buddy

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

## 📚 Complete Course Curriculum

### 🎯 **34 Comprehensive Chapters**

**Basic Linux (01-10)**
- 01 🐧 Start using Linux
- 02 💿 10 Linux Distros
- 03 🤘 Linux 101
- 04 💪 10 Essential Commands
- 05 🗃️ The File System
- 06 🗺️ WTF is $PATH
- 07 🔐 File Permissions
- 08 🦸 Sudo
- 09 🐚 Bash Shell
- 10 🎨 Bash Config

**Intermediate (11-20)**
- 11 📃 Text Editors
- 12 🔎 Grep && Sed
- 13 🪫 Process Management
- 14 ⏰ Cron Jobs
- 15 🪄 Tar & Gzip
- 16 📦 Package Managers
- 17 ⌨️ Choosing a VPS
- 18 🗝️ SSH
- 19 🖥️ Build an App
- 20 🔥 Firewall

**Advanced VPS (21-30)**
- 21 🍴 Code Transfer
- 22 🛡️ SSL
- 23 🚅 Nginx
- 24 🍱 Env Vars
- 25 🤖 Systemd
- 26 💽 Mount a Volume
- 27 🚀 Final Checklist
- 28 🎊 Linux History
- 29 🍟 Linux in 100 Seconds
- 30 🐳 Docker 101

**Expert Level (31-34)**
- 31 🔪 Ansible
- 32 🔨 SST
- 33 🎸 Neovim
- 34 😎 Coolify

### ✨ **Learning Features**
- **Rich Content**: Each chapter includes overview, detailed sections, and practical examples
- **Code Examples**: Copy-to-clipboard terminal commands and scripts
- **Sequential Learning**: Next/Previous navigation for structured progression
- **Mobile Friendly**: Learn anywhere on any device
- **Completely FREE**: No cost, no subscriptions, no hidden fees

## 🏗️ Project Structure (FSD)

```
src/
├── shared/           # Shared utilities and components
│   ├── ui/          # Reusable UI components
│   │   ├── Layout/  # Main layout wrapper
│   │   └── CodeBlock/ # Code syntax highlighting
│   └── data/        # Course content and data
├── pages/           # Page-level components
│   ├── HomePage/    # Landing page
│   └── ChapterPage/ # Individual chapter pages
├── components/      # Feature components
└── App.jsx         # Main app with routing
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify
```bash
# Build the project
npm run build

# Deploy dist/ folder to Netlify
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Easin Arafat**
- GitHub: [@mrx-arafat](https://github.com/mrx-arafat)
- Project: [LinuxBuddy](https://github.com/mrx-arafat/linux-buddy)

---

**Built with ❤️ for the Linux community - FREE forever!** 🐧
