# DATA FUSION 2025 - Landing Website

A complete, production-ready, fully responsive landing website for DATA FUSION 2025 college fest.

## Tech Stack

- **React** + **TypeScript**
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Vaagdevi Color Palette** - Brand colors from Vaagdevi College of Engineering

## Features

- 🎨 Futuristic dark theme with Vaagdevi color palette
- 📱 Fully responsive (mobile-first design)
- ✨ Smooth scroll navigation with active section highlighting
- 🎭 Glassmorphism effects and glowing borders
- 📝 Registration form with Google Sheets integration
- 🎪 9 comprehensive sections covering all event details

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

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
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Tracks.tsx
│   │   ├── Schedule.tsx
│   │   ├── Highlights.tsx
│   │   ├── Coordinators.tsx
│   │   ├── Register.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

## Google Sheets Integration Setup

The registration form is configured to submit data to Google Sheets via Google Apps Script. To set this up:

1. Create a new Google Sheet with columns: Timestamp, Student Name, Branch, Roll No, Section, Gender, Email, Mobile
2. Open Google Apps Script (Extensions → Apps Script)
3. Create a web app script (see `docs/GOOGLE_SHEETS_SETUP.md` for detailed instructions)
4. Deploy the script as a web app and get the URL
5. Update the `GOOGLE_SCRIPT_URL` constant in `src/components/Register.tsx`

## Customization

All text content is easily editable at the top of each component file. Key sections to customize:

- **Hero Section**: Dates, venue, tagline
- **About Section**: Event description
- **Tracks Section**: Technical and non-technical events
- **Schedule Section**: Day-wise activities
- **Coordinators Section**: Team members and contact details
- **Register Section**: Pricing and form fields

## Color Palette

The website uses Vaagdevi College color palette:

- **Primary Red**: `#D90000` (Vaagdevi brand red)
- **Dark Gray**: `#6C757D` (for buttons/cards)
- **Cyan**: `#00CED1` (accent color)
- **Blue**: `#007bff` (accent color)
- **Dark Background**: `#0a0e27` (futuristic dark theme)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Data Fusion – CSE (Data Science), Vaagdevi College of Engineering. All rights reserved.

Designed & Developed by the Data Quest Web Team.

