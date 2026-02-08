import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";
import PodcastGrid from "../components/PodcastGrid";
import ThemeToggle from "../components/ThemeToggle";

const Home = () => {
  const { shows, loading, error } = useContext(PodcastContext);

  if (loading) return <p>Loading podcasts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <header className="app-header">
        <h1>Podcasts</h1>
        <ThemeToggle />
      </header>

      <PodcastGrid shows={shows} />
    </main>
  );
};

export default Home;