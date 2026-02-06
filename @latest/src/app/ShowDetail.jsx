import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchShowById } from "../utils/api";
import { genreMap } from "../utils/genreMap";
import ThemeToggle from "../components/ThemeToggle";
import "../index.css";

const ShowDetail = () => {
  const { id } = useParams();

  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);

  useEffect(() => {
    const loadShow = async () => {
      try {
        const data = await fetchShowById(id);
        setShow(data);

        if (data.seasons?.length > 0) {
          setSelectedSeason(data.seasons[0]); // default to first season
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadShow();
  }, [id]);

  if (loading) return <p>Loading show details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!show) return <p>No show found.</p>;

  const genreNames = show.genres
    ? show.genres.map((id) => genreMap[id] || "Unknown")
    : [];

  const updatedDate = show.updated
    ? new Date(show.updated).toLocaleDateString()
    : "N/A";

  return (
    <main>
      {/*  Theme Toggle visible on Show Detail */}
      <header className="show-detail-header">
        <ThemeToggle />
      </header>

      <div className="show-detail">
        {show.image && (
          <img src={show.image} alt={show.title} />
        )}

        <div className="show-info">
          <h1>{show.title}</h1>
          <p>{show.description}</p>

          {genreNames.length > 0 && (
            <p>
              <strong>Genres:</strong> {genreNames.join(" • ")}
            </p>
          )}

          <p>
            <strong>Number of Seasons:</strong>{" "}
            {show.seasons?.length || 0}
          </p>

          <p>
            <strong>Last updated:</strong> {updatedDate}
          </p>

          {/* Season Selector Dropdown */}
          {show.seasons?.length > 0 && (
            <div className="season-selector">
              <label htmlFor="season">Current Season: </label>
              <select
                id="season"
                value={selectedSeason?.id || ""}
                onChange={(e) => {
                  const season = show.seasons.find(
                    (s) => s.id.toString() === e.target.value
                  );
                  setSelectedSeason(season);
                }}
              >
                {show.seasons.map((season) => (
                  <option key={season.id} value={season.id}>
                    {season.title}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Episodes for selected season */}
      {selectedSeason && (
        <div className="season">
          <h2>{selectedSeason.title} – Episodes</h2>

          {selectedSeason.episodes?.map((ep) => (
            <div className="episode" key={ep.id}>
              {ep.image && (
                <img src={ep.image} alt={ep.title} />
              )}
              <p>{ep.title}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default ShowDetail;