#  My Portfolio - Haseeb Javed

A modern, interactive full-stack developer portfolio website showcasing projects, skills, and experience. Built with cutting-edge web technologies and featuring smooth animations, dark/light theme support, and a fully responsive design.

**Live Demo:** [Portfolio Website](https://yourportfolio.com)  
**GitHub Repository:** [My-Portfolio-4](https://github.com/haseebjaved4212/My-Portfolio-4)

---

## ✨ Key Features

###  Modern Design & UX
- **Responsive Layout** - Seamless experience across desktop, tablet, and mobile devices
- **Dark/Light Theme** - Built-in theme toggle for user preference
- **Custom Cursor** - Unique interactive cursor experience
- **Smooth Animations** - Elegant transitions and micro-interactions using Motion/React
- **Professional Typography** - Google Fonts integration (JetBrains Mono, Playfair Display, Plus Jakarta Sans)

###  Core Sections
1. **Hero Section** - Eye-catching introduction with call-to-action buttons
2. **About Section** - Personal background and professional summary
3. **Skills Section** - Organized technology stack across multiple categories:
   - Frontend (HTML, CSS, JavaScript, TypeScript, React, Next.js, Three.js, etc.)
   - Backend (Python, Django, FastAPI, Nest.js)
   - Database (PostgreSQL, Supabase, Firebase, Redis)
   - Other specialties (Git, DevOps, Networking, AI Automation)

4. **Projects Section** - Showcase of notable projects including:
   - AirPods Control (Kotlin/Android)
   - AniTrack (Anime tracking platform)
   - CoolBraze AI (Customer support system)
   - Graphite (Image to sketch converter)
   - And more...

5. **Workflow Section** - Development process and methodology
6. **Contact Section** - Interactive contact form with email integration
7. **Footer** - Social links and navigation

###  Technical Features
- **EmailJS Integration** - Functional contact form for inquiries
- **AI-Powered Elements** - Integration with Google Generative AI
- **SEO Optimized** - Comprehensive meta tags for social sharing
- **Performance Optimized** - Vite for fast builds and development
- **Type-Safe** - Full TypeScript support

---

##  Tech Stack

### Frontend
- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 4
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React
- **UI Utilities:** clsx, tailwind-merge

### Backend (Optional Server)
- **Runtime:** Node.js with Express
- **API Integration:** EmailJS, Google Generative AI

### Development
- **Language:** TypeScript 5.8
- **Package Manager:** npm/yarn/pnpm
- **Build Optimization:** esbuild

### DevTools
- **Linting:** TypeScript strict mode
- **Code Quality:** Type checking with `tsc --noEmit`

---

##  Prerequisites

- **Node.js** 18+ and npm/yarn/pnpm
- **Git** for version control
- **Modern web browser** with ES2020+ support

### Required Environment Variables
Create a `.env` file in the project root:

```env
# EmailJS Configuration
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id

# Google Generative AI (Optional)
VITE_GOOGLE_GENAI_API_KEY=your_google_genai_api_key
```

---

##  Getting Started

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/haseebjaved4212/My-Portfolio-4.git
   cd My-Portfolio-4
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your API keys
   ```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The portfolio will be available at `http://localhost:3000` by default.

**Development Server Options:**
- Auto-reload on file changes
- Fast TypeScript checking
- Tailwind CSS with JIT compilation
- Full sourcemaps for debugging

### Production Build

Create an optimized production build:

```bash
npm run build
```

This generates a `dist/` folder with minified and optimized assets.

### Preview Production Build

Test the production build locally:

```bash
npm run preview
```

### Clean Build Artifacts

Remove build files and generated server:

```bash
npm run clean
```

### Linting & Type Checking

Check for TypeScript errors without emitting files:

```bash
npm run lint
```

---

##  Project Structure

```
My-Portfolio-4/
├── src/
│   ├── components/           # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Loader.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── TerminalModal.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── Workflow.tsx
│   ├── data/
│   │   └── index.ts          # Skills, projects, and content data
│   ├── lib/
│   │   ├── types.ts          # TypeScript type definitions
│   │   ├── pricing.ts        # Pricing utilities
│   │   └── utils.ts          # Utility functions
│   ├── hooks/
│   │   └── use-mobile.ts     # Mobile detection hook
│   ├── App.tsx               # Main App component
│   ├── main.tsx              # React DOM entry point
│   └── index.css             # Global styles
├── index.html                # HTML entry point
├── vite.config.ts            # Vite configuration
├── tailwind.config.ts        # Tailwind CSS config
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies & scripts
└── README.md                 # This file
```

---

##  Key Components

### ThemeProvider
Manages dark/light theme state and provides theme context to all components.

### CustomCursor
Custom interactive cursor that enhances user engagement and provides visual feedback.

### Loader
Splash screen animation that displays while the app loads, improving perceived performance.

### Contact
Interactive contact form with EmailJS integration for handling inquiries directly.

### Projects
Displays portfolio projects with descriptions, technologies used, GitHub links, and live demos.

### Skills
Organized skill showcase across frontend, backend, database, and other categories.

---

##  Social Links & External Services

The portfolio integrates with:

- **GitHub** - Portfolio projects repository
- **LinkedIn** - Professional networking
- **Twitter/X** - Social presence
- **Email** - Contact communication via EmailJS
- **Google Generative AI** - AI-powered features

Update these links in the component files or data files as needed.

---

##  Configuration

### Tailwind CSS
Customize colors, typography, and spacing in `tailwind.config.ts`. The project uses:
- Custom color variables
- Extended spacing scale
- Custom border radius values
- Dark mode support

### Vite Configuration
- **Port:** Default 3000 (configurable via environment)
- **Host:** 0.0.0.0 for network access
- **Plugins:** React, Tailwind CSS Vite plugin
- **Aliases:** `@` points to project root

### TypeScript
Strict mode enabled for type safety. See `tsconfig.json` for compiler options.

---

##  Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Deploy using CLI
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
# Build
npm run build

# Deploy dist folder to gh-pages branch
```

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

---

##  Performance Optimizations

- **Code Splitting:** Automatic chunk splitting by Vite
- **Tree Shaking:** Unused code is eliminated in production builds
- **Image Optimization:** SVG icons via Lucide React
- **CSS Purging:** Tailwind removes unused styles
- **Minification:** esbuild production optimization
- **Lazy Loading:** Components load only when needed

---

##  Troubleshooting

### Port Already in Use
```bash
# Use custom port
npm run dev -- --port 3001
```

### Module Not Found Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Environment Variables Not Loading
- Ensure `.env` file is in project root
- Variable names must start with `VITE_` for frontend access
- Restart dev server after changing `.env`

### Build Fails
```bash
# Run type checking
npm run lint

# Clear Vite cache
rm -rf node_modules/.vite
```

---

##  Security

- **Environment Variables:** Sensitive keys stored in `.env` (not committed)
- **Type Safety:** TypeScript prevents common vulnerabilities
- **Dependencies:** Keep packages updated with `npm audit`
- **CSP Headers:** Configure in deployment platform

---

##  Customization Guide

### Update Personal Information
Edit `src/data/index.ts` to modify:
- Skills array
- Projects portfolio
- Other personal data

### Change Color Scheme
Modify `tailwind.config.ts` to customize:
- Primary colors
- Accent colors
- Dark mode colors

### Add New Sections
1. Create a new component in `src/components/`
2. Import and add to `src/App.tsx`
3. Update navigation if needed

### Modify Contact Form
Update EmailJS configuration in `.env` and contact handler in `src/components/Contact.tsx`

---

##  Learning Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [Motion Library Docs](https://motion.dev)
- [EmailJS Documentation](https://www.emailjs.com/docs/)

---

##  Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

##  License

copy right © 2026 Haseeb Javed. All rights reserved.

---

##  Contact & Support

- **Email:** [contactimhaseeb@gmail.com](mailto:contactimhaseeb@gmail.com)
- **GitHub:** [@haseebjaved4212](https://github.com/haseebjaved4212)
- **LinkedIn:** [Haseeb Javed](https://www.linkedin.com/in/haseeb-javed-0332b3341/)

---

##  Acknowledgments

- [React](https://react.dev) - UI Library
- [Vite](https://vitejs.dev) - Build tool
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev) - Icons
- [EmailJS](https://www.emailjs.com) - Email service

---

##  Future Enhancements

- [ ] Blog section for technical articles
- [ ] Case studies for major projects
- [ ] Interactive skill level visualization
- [ ] Dark mode animations
- [ ] Search functionality
- [ ] Analytics integration
- [ ] Internationalization (i18n)
- [ ] CMS integration for content management

---

**Built with ❤️ by Haseeb Javed**

*Last updated: 2026*
