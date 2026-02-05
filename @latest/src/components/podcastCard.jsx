import { Link } from "react-router-dom";
import { genreMap } from "../utils/genreMap";

const PodcastCard = ({ podcast }) => {
  if (!podcast) return null;

  const genres = podcast.genres
    ?.map((g) => genreMap[g])
    .filter(Boolean)
    .join(" • ");

  return (
    <Link to={`/show/${podcast.id}`} className="podcast-card">
      <img src={podcast.image} alt={podcast.title} />
      <h3>{podcast.title}</h3>
      <p>{genres}</p>
    </Link>
  );
};

export default PodcastCard;
