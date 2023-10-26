import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
import { getEveryPostThunk } from "../../store/posts";
import { thunkGetAllFavorites } from "../../store/favorites";
import UserBanner from "../UserBanner";
import "../CSS/john.css";

export default function FavoritesPage() {
   const { id } = useParams();
   const { push } = useHistory();
   const dispatch = useDispatch();
   const user = useSelector((state) => state.session.user);
   const getAllFavorites = useSelector((state) => state.favorites.allFavorites);
   const ownerFavorites = Object.values(getAllFavorites).filter(
      (favorite) => favorite.userId == user.id
   );

   useEffect(() => {
      dispatch(getEveryPostThunk());
      dispatch(thunkGetAllFavorites());
   }, [dispatch]);

   return (
      <div>
         <UserBanner />
         <div className="allposts-parent-container">
            <h1>Posts You Have Favorited</h1>
            <div className="allposts-photos">
               {ownerFavorites &&
                  ownerFavorites.map((singleFav) =>
                     singleFav.userId == user.id ? (
                        <div key={singleFav.post.id}>
                           <Link to={`/posts/${singleFav.post.id}`}>
                              <img
                                 className="userpost-images"
                                 src={singleFav.post.photoUrl}
                                 alt={singleFav.post.title}
                              ></img>
                           </Link>
                        </div>
                     ) : null
                  )}
            </div>
         </div>
         <div className="allposts-account-details">
            <p>{user.email}</p>
         </div>
      </div>
   );
}
