import React from "react";
import { Link } from "react-router-dom";
import { genreMap } from "../utils/genreMap";

const PodcastCard = ({ show }) => {
  // Map genre IDs to names
  const genreNames = show.genres
    ? show.genres.map((id) => genreMap[id] || "Unknown")
    : [];

  const updatedDate = new Date(show.updated).toLocaleDateString();

  return (
    <Link
      to={`/show/${show.id}`}
      state={{ show }} // <-- pass the show object here
      className="podcast-card-link"
    >
      <div className="podcast-card">
        <img src={show.image} alt={show.title} />
        <div className="podcast-card-content">
          <h3 className="title">{show.title}</h3>
          <p className="seasons">
            <strong>Seasons:</strong> {show.seasons?.length || 0}
          </p>
          {genreNames.length > 0 && (
            <p className="genres">
              <strong>Genres:</strong> {genreNames.join(" • ")}
            </p>
          )}
          <p className="updated">
            <strong>Last updated:</strong> {updatedDate}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PodcastCard;
