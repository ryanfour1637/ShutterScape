import React, { useEffect } from "react";
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
   const all_posts = useSelector((state) => state.posts.allPosts);
   const postsArr = Object.values(all_posts);

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
               {postsArr &&
                  postsArr.map((singlePost) =>
                     singlePost.ownerId === user.id ? (
                        <div key={singlePost.id}>
                           <Link to={`/posts/${singlePost.id}`}>
                              <img
                                 className="userpost-images"
                                 src={singlePost.photoUrl}
                                 alt={singlePost.title}
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
