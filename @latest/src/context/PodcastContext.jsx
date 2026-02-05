import { createContext, useEffect, useState } from "react";

export const PodcastContext = createContext();

export const PodcastProvider = ({ children }) => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const res = await fetch("https://podcast-api.netlify.app/shows");
        if (!res.ok) throw new Error("Failed to fetch podcasts");

        const data = await res.json();
        setShows(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, []);

  return (
    <PodcastContext.Provider value={{ shows, loading, error }}>
      {children}
    </PodcastContext.Provider>
  );
};
