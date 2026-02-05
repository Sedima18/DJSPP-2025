import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchShowById } from "../utils/api"; // make sure this exists

const ShowDetail = () => {
  const { id } = useParams();

  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadShow = async () => {
      try {
        const data = await fetchShowById(id);
        console.log("Fetched show:", data); // debug
        setShow(data);
      } catch (err) {
        console.error(err);
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

  return (
    <main>
      <h1>{show.title}</h1>
      {show.image && <img src={show.image} alt={show.title} width="300" />}
      <p>{show.description}</p>

      <h2>Seasons</h2>
      {show.seasons?.map((season) => (
        <div key={season.id}>
          <h3>{season.title}</h3>
          <ul>
            {season.episodes?.map((ep) => (
              <li key={ep.id}>{ep.title}</li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
};

export default ShowDetail;