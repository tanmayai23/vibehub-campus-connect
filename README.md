# VibeHub — Campus Connect

A comprehensive digital platform designed to enhance college life. VibeHub brings together students, teachers, and college administrators in one unified workspace — with dashboards, notice boards, calendars, an AI chatbot assistant, and role-based admin panels.

**Live site:** https://vibehub.com
**Repository:** https://github.com/tanmayai23/vibehub-campus-connect

---

## Features

- **Role-based dashboards** for students, teachers, and college admins
- **Notice board** for campus-wide announcements
- **Calendar** for academic events, deadlines, and schedules
- **AI chatbot assistant** for instant help and queries
- **Settings panel** with theme toggle (light / dark mode)
- **Modern UI** built with shadcn/ui + Tailwind CSS
- **Responsive layout** — works across desktop, tablet, and mobile

---

## Tech Stack

- **Vite** — lightning-fast build tooling
- **React 18** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui** for the design system
- **React Router** for client-side routing
- **TanStack Query** for data fetching & caching
- **React Hook Form** + **Zod** for forms and validation
- **Lucide** icons

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm

### Install & run locally

```sh
# 1. Clone the repo
git clone https://github.com/tanmayai23/vibehub-campus-connect.git

# 2. Move into the project
cd vibehub-campus-connect

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

The dev server runs on http://localhost:8080.

### Available scripts

| Command           | What it does                           |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Start the local dev server             |
| `npm run build`   | Build the production bundle to `dist/` |
| `npm run preview` | Preview the production build locally   |
| `npm run lint`    | Run ESLint across the codebase         |

---

## Project Structure

```
vibehub-campus-connect/
├── public/                 # Static assets (favicon, robots.txt)
├── src/
│   ├── components/
│   │   ├── dashboard/      # Calendar, NoticeBoard, ChatbotButton, ...
│   │   ├── layout/         # Sidebar, Header
│   │   └── ui/             # shadcn/ui primitives
│   ├── pages/
│   │   ├── student/        # Student-side pages
│   │   ├── Index.tsx       # Main dashboard
│   │   ├── Login.tsx
│   │   ├── StudentAdmin.tsx
│   │   ├── TeacherAdmin.tsx
│   │   └── CollegeAdmin.tsx
│   ├── index.css           # Global styles & Tailwind layers
│   └── main.tsx            # App entry point
├── index.html
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

---

## Deployment

The app is deployed at **https://vibehub.com**.

To deploy your own instance, push this repo to any platform that supports Vite static builds (Vercel, Netlify, Cloudflare Pages, etc.). The build command is `npm run build` and the output directory is `dist`.

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## License

This project is private. All rights reserved © VibeHub.
