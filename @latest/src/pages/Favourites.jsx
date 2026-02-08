import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";
import { Link } from "react-router-dom";

const Favourites = () => {
  const { favourites, removeFavourite } = useContext(FavouritesContext);

  if (!favourites || favourites.length === 0)
    return <p>No favourites added yet.</p>;

  // Group by show
  const grouped = favourites.reduce((acc, ep) => {
    if (!acc[ep.showTitle]) acc[ep.showTitle] = [];
    acc[ep.showTitle].push(ep);
    return acc;
  }, {});

  return (
    <main>
      <h1>Favourite Episodes</h1>
      {Object.keys(grouped).map((showTitle) => (
        <section key={showTitle}>
          <h2>{showTitle}</h2>
          <ul>
            {grouped[showTitle].map((ep) => (
              <li key={ep.id} className="favourite-episode">
                <Link to={`/show/${ep.showId}`}>{ep.title}</Link>
                <button onClick={() => removeFavourite(ep.id)}>Remove</button>
                <span>
                  Added: {new Date(ep.dateAdded).toLocaleDateString()}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
};

export default Favourites;
