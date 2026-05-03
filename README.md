# Country Explorer

A React + Vite app for browsing countries by region.

## Features

- Region pages for North America, Europe, and Asia
- Country cards with flag and population data
- Routing with `react-router-dom`
- Tailwind CSS styling

## Data Source

This project uses the [REST Countries API](https://restcountries.com/) to fetch country data.

Examples used in the app include region endpoints like:

- `https://restcountries.com/v3.1/region/americas`
- `https://restcountries.com/v3.1/region/europe`
- `https://restcountries.com/v3.1/region/asia`

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown in your terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Run the app in development mode
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint
