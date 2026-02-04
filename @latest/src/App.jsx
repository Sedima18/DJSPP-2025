import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages (routes)
import Home from "./app/Home";
import ShowDetail from "./app/ShowDetails";
import Favourites from "./app/Favourites";
import NotFound from "./app/NotFound";

// Components
import AudioPlayer from "./components/AudioPlayer";

// Context providers
import { AudioProvider } from "./context/AudioContext";
import { FavouritesProvider } from "./context/FavouritesContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <AudioProvider>
        <FavouritesProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/show/:id" element={<ShowDetail />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="*" element={<NotFound />} />
            </Routes>

            {/* Global audio player stays mounted */}
            <AudioPlayer />
          </Router>
        </FavouritesProvider>
      </AudioProvider>
    </ThemeProvider>
  );
}

export default App;