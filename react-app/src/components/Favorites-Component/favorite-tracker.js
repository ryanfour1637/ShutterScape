import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
   thunkCreateFavorite,
   thunkDeleteFavorite,
   thunkGetAllFavorites,
} from "../../store/favorites";

export default function FavoriteTracker({ postId, userId }) {
   const dispatch = useDispatch();
   const getAllFavorites = useSelector((state) => state.favorites.allFavorites);
   const [favorite, setFavorite] = useState(null);

   const ownerFavorites = Object.values(getAllFavorites).filter(
      (favorite) => favorite.userId == userId
   );

   const thisPostFavorites = ownerFavorites.filter(
      (favorite) => favorite.postId == postId
   );

   let favId;
   if (thisPostFavorites.length) {
      favId = thisPostFavorites[0]?.id;
   }
   const deleteFavorite = async () => {
      const res = await dispatch(thunkDeleteFavorite(favId));
      if (res.errors) {
         return setFavorite(true);
      } else {
         return setFavorite(false);
      }
   };

   const createFavorite = async () => {
      const res = await dispatch(thunkCreateFavorite(postId));
      dispatch(thunkGetAllFavorites());

      if (res.errors) return setFavorite(true);
   };

   useEffect(() => {
      dispatch(thunkGetAllFavorites());
   }, [dispatch, favorite]);

   return (
      <div>
         <button
            hidden={!thisPostFavorites.length}
            className="fav-button"
            onClick={() => deleteFavorite()}
         >
            <i className={"fa-solid fa-star filled-fav"}></i>
         </button>
         <button
            hidden={thisPostFavorites.length}
            className="fav-button"
            onClick={() => createFavorite()}
         >
            <i className={"fa-solid fa-star unfilled-fav"}></i>
         </button>
      </div>
   );
}
