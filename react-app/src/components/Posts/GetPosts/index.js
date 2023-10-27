import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getNineRandomNonOwnerPosts } from "../../../store/posts";
import "../../CSS/john.css";

export default function GetPosts() {
   const { push } = useHistory();
   const dispatch = useDispatch();
   const getPosts = useSelector((state) => state.posts.ninePosts);
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

   return (
      <>
         <h1 className="album-page-h1">Trending</h1>
         <button onClick={getRandomPhotos} id="see-more-bttn">
            See more photos
         </button>
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
