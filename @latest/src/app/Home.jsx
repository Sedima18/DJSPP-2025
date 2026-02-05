import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";
import PodcastGrid from "../components/PodcastGrid";

const Home = () => {
  const context = useContext(PodcastContext);

  // Safety guard – prevents silent crashes
  if (!context) {
    return <p>Podcast context not available.</p>;
  }

  const { shows, loading, error } = context;

  if (loading) {
    return <p>Loading podcasts...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!shows || shows.length === 0) {
    return <p>No podcasts found.</p>;
  }

  return (
    <main>
      <h1>Podcasts</h1>
      <PodcastGrid shows={shows} />
    </main>
  );
};

export default Home;