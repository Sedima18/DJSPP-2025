🎧 Final Podcast App 🎯
A polished, production-ready React podcast platform with global audio playback, favourites, themes, routing, and rich UI enhancements. The Dynamic Podcast App is a modern, responsive podcast platform built with React. Users can explore podcasts, view seasons and episodes, play audio with a persistent global player, save favourites, toggle themes, and enjoy a smooth and engaging browsing experience.


🚀 Features
🔊 Global Audio Player

Fixed bottom global audio player

Continues playback across page navigation

Play, pause, seek, progress tracking

Reload confirmation prompt while audio is playing

Built using HTML5 Audio API + React Context

State persists until page refresh

Smooth UI transitions

❤️ Favourites System
Favourites are persisted with localStorage and support:

✅ Add/remove favourite episodes

✅ Favourites page

✅ Show the show title, season, and date/time added

✅ Visual heart icon feedback

✅ Group favourites by show

✅ Sorting options:

A–Z/ Z–A

Newest / Oldest by date added

🎠 Recommended Shows Carousel
Horizontally scrollable carousel

Swipe navigation

Arrow navigation

Looped scrolling

Displays show image, title, and genres

Clicking a show navigates to its detail page

Built with lightweight carousel handling

🌗 Theme Toggle (Light/Dark Mode)
Dark/light theme switcher

Saved in localStorage

Entire app updates instantly

Uses CSS Modules with theme-aware variables

Sun/moon icon changes dynamically

Accessible color contrast

🔍 Podcast Browsing
Filterable and searchable list of shows

Sort by categories

Clear preview cards

Genre tags

Pagination support

📺 Show & Episode Views
Show title, description, genres

Total seasons and total episodes

Sort and view episodes per season

Click to play episodes

Progress indicator in audio player

🛠️ Technologies Used
React (component-based UI)

React Router (SPA routing)

Context API (global audio + theme + favourites)

HTML5 Audio API

CSS Modules

JavaScript ES6+

Node.js + npm

Vercel for

📦 Project Structure

project-root/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── api/
│   ├── components/
│   │   ├── Filters/
│   │   │   ├── GenreFilter.jsx
│   │   │   ├── GenreFilter.module.css
│   │   │   ├── SearchBar.jsx
│   │   │   ├── SearchBar.module.css
│   │   │   ├── SortSelect.jsx
│   │   │   ├── SortSelect.module.css
│   │   │   └── index.js
│   │   ├── Podcast/
│   │   │   ├── EpisodeCard.jsx
│   │   │   ├── EpisodeCard.module.css
│   │   │   ├── PodcastCard.jsx
│   │   │   ├── PodcastCard.module.css
│   │   │   ├── PodcastDetail.jsx
│   │   │   ├── PodcastDetail.module.css
│   │   │   ├── PodcastGrid.jsx
│   │   │   ├── PodcastGrid.module.css
│   │   │   └── index.js
│   │   ├── UI/
│   │   │   ├── AudioPlayerBar.jsx
│   │   │   ├── AudioPlayerBar.module.css
│   │   │   ├── Error.jsx
│   │   │   ├── GenreTags.jsx
│   │   │   ├── GenreTags.module.css
│   │   │   ├── Header.jsx
│   │   │   ├── Header.module.css
│   │   │   ├── Loading.jsx
│   │   │   ├── Loading.module.css
│   │   │   ├── Pagination.jsx
│   │   │   ├── Pagination.module.css
│   │   │   ├── Carousel.jsx
│   │   │   ├── carousel.module.css
│   │   │   └── index.js
│   │   └── index.js
│   ├── context/
│   │   ├── AudioPlayerContext.jsx
│   │   ├── FavouritesContext.jsx
│   │   ├── PodcastContext.jsx
│   │   └── ThemeContext.jsx
│   ├── pages/
│   │   ├── Favourites.jsx
│   │   ├── Favourites.module.css
│   │   ├── Home.jsx
│   │   ├── Home.module.css
│   │   ├── ShowDetails.jsx
│   │   └── ShowDetails.module.css
│   ├── utils/
│   │   └── formatDate.js
│   ├── App.jsx
│   ├── data.js
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── .eslintrc.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js


⚙️ Setup Instructions
✅ Prerequisites

Node.js 14+

Git

A browser

Code editor (VS Code recommended)

✅ Install and Run Locally

# 1. Clone the repo
git clone 

# 2. Navigate into the project
cd @latest
# 3. Install dependencies:
npm install
# 4. Run development server:
npm run dev
🌐 Deployment
