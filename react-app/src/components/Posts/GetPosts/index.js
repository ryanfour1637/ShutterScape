import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getNineRandomNonOwnerPosts } from "../../../store/posts";
import "../../CSS/john.css";

export default function GetPosts() {
   const { push } = useHistory();
   const dispatch = useDispatch();
   const getPosts = useSelector((state) => state.posts.ninePosts);
   const user = useSelector((state) => state.session.user);
   const arrPosts = Object.values(getPosts);
   const [postsToDisplay, setPostsToDisplay] = useState([]);
   const posts = [...arrPosts];

   useEffect(() => {
      dispatch(getNineRandomNonOwnerPosts());
      setPostsToDisplay(posts);
   }, [dispatch]);

   const goToPost = (post) => {
      push(`/posts/${post.id}`);
      return;
   };

   const getRandomPhotos = () => {
      dispatch(getNineRandomNonOwnerPosts());
      setPostsToDisplay(posts);
   };

   if (Object.values(posts).length === 0) return null;

   return (
      <>
         <h1 className="album-page-h1">Trending</h1>
         {user !== null && (
            <button onClick={getRandomPhotos}>See more photos</button>
         )}
         <div className="allposts-photos">
            {postsToDisplay.map((post) => (
               <div onClick={() => goToPost(post)} key={post.id}>
                  <img
                     src={post.photoUrl}
                     alt=""
                     className="userpost-images"
                  ></img>
               </div>
            ))}
         </div>
      </>
   );
}
