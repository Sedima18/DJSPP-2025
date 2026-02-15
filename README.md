## 🎧 Dynamic Podcast App ##

A modern, responsive podcast platform built with React. Explore podcasts, view seasons and episodes, play audio with a persistent global player, save favourites, toggle themes, and enjoy a smooth, engaging browsing experience.

## ✅ Live Demo: View on Vercel
The app automatically deploys on Vercel after each push to GitHub.

Live app: https://sedmoh-24033-pto-2503-group-a-mohal-mu.vercel.app/


## 🚀 Features
🌐 SPA & Routing

Fully single-page application (SPA) using React Router

Smooth navigation between pages without reloading

Automatic routing for show details and favourites

🔊 Global Audio Player

Fixed bottom player accessible on all pages

Play, pause, seek, and track progress

Audio continues across page navigation

Reload confirmation prompt when audio is playing

Built with HTML5 Audio API and React Context

Smooth UI transitions

## ❤️ Favourites System

Persisted using localStorage

Add/remove favourite episodes

Dedicated Favourites page

Displays show title, season, and date/time added

Visual heart icon feedback

Group favourites by show

Sort options: A–Z / Z–A, Newest / Oldest

## 🎨 Theme Toggle

Light/Dark theme switcher

Saved in localStorage

Instant theme updates across the app

Accessible color contrast

Dynamic sun/moon icons

## 🔍 Podcast Browsing

Filterable and searchable list of shows

Sort by categories

Clear, responsive preview cards

Genre tags and pagination

Show & Episode views with play buttons

Progress indicator in the global audio player

## 🎠 Recommended Shows Carousel

Horizontally scrollable carousel

Arrow and swipe navigation

Looped scrolling

Displays show image, title, and genres

Clicking a show navigates to its detail page

## $ Technologies Used

React (component-based UI)

React Router (SPA routing)

Context API (global audio, theme, favourites)

HTML5 Audio API

CSS Modules

JavaScript ES6+

Node.js + npm

Vercel for deployment

## 📦 Project Structure
project-root/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── api/
│   ├── components/
│   │   ├── Filters/ (GenreFilter, SearchBar, SortSelect)
│   │   ├── Podcast/ (EpisodeCard, PodcastCard, PodcastDetail, PodcastGrid)
│   │   ├── UI/ (AudioPlayerBar, Carousel, Header, Loading, Pagination, GenreTags)
│   │   └── index.js
│   ├── context/ (AudioPlayerContext, FavouritesContext, PodcastContext, ThemeContext)
│   ├── pages/ (Favourites, Home, ShowDetails)
│   ├── utils/ (formatDate.js)
│   ├── App.jsx
│   ├── data.js
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

⚙️ Setup Instructions
Prerequisites

Node.js 14+

Git

A browser

Code editor (VS Code recommended)

Install & Run Locally
# 1. Clone the repo
git clone https://github.com/Sedima18/SEDMOH24033_PTO2503_Group-A-Mohale-DJSPP-2025.git

# 2. Navigate into the project
cd @latest

# 3. Install dependencies
npm install

# 4. Run development server
npm run dev

Deployment

The app automatically deploys on Vercel after each push to GitHub.

Live app: https://sedmoh-24033-pto-2503-group-a-mohal-mu.vercel.app/

