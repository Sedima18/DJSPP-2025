import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";

const Favourites = () => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <>
      <h1>Favourites</h1>
      {favourites.map((fav) => (
        <p key={fav.id}>{fav.title}</p>
      ))}
    </>
  );
};

export default Favourites;
