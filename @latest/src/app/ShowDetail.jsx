import { useLocation } from "react-router-dom";
import { genreMap } from "../utils/genreMap";

const ShowDetail = () => {
  const location = useLocation();
  const { show } = location.state || {}; // <-- get the show

  if (!show) return <p>No show details available.</p>; // <-- shows this if not passed

  const genreNames = show.genres
    ? show.genres.map((id) => genreMap[id] || "Unknown")
    : [];

  const updatedDate = new Date(show.updated).toLocaleDateString();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>{show.title}</h1>
      {show.image && <img src={show.image} alt={show.title} width="300" />}
      <p>
        <strong>Seasons:</strong> {show.seasons?.length || 0}
      </p>
      {genreNames.length > 0 && (
        <p>
          <strong>Genres:</strong> {genreNames.join(" • ")}
        </p>
      )}
      <p>
        <strong>Last updated:</strong> {updatedDate}
      </p>
    </main>
  );
};

export default ShowDetail;
