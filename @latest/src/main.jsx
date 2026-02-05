import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PodcastProvider } from "./context/PodcastContext";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PodcastProvider>
      <App />
    </PodcastProvider>
  </StrictMode>
);