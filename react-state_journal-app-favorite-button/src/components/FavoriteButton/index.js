import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";
//import useState
import { useState } from "react";


export default function FavoriteButton() {
  // const isFavorite = false;
  //switched off const declaration, as react can't handle it with this useState function. Instead, we need a new function that react can read. We start with false, as that is the initial variable
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      className="favorite-button"
      onClick={() => {
        // console.log("favorite button clicked");
        //here we set the function for the toggle to work. Clicking means the opposite image is used. 
        setIsFavorite(!isFavorite);
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
