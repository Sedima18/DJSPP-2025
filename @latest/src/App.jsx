import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/Home";
import ShowDetail from "./app/ShowDetail";
import Favourites from "./app/Favourites";
import NotFound from "./app/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show/:id" element={<ShowDetail />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;