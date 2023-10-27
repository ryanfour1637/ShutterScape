import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getNineRandomNonOwnerPosts } from "../../../store/posts";
import "../../CSS/john.css"

export default function GetPosts() {
   const { push } = useHistory();
   const user = useSelector((state) => state.session.user);
   const dispatch = useDispatch();
   const getPosts = useSelector((state) => state.posts.ninePosts);
   const arrPosts = Object.values(getPosts);
   const posts = [...arrPosts]

   useEffect(() => {
      dispatch(getNineRandomNonOwnerPosts());
   }, [dispatch]);

   const goToPost = (post) => {
      push(`/posts/${post.id}`);
      return;
   };

   if (Object.values(posts).length === 0) return null;

   return (
      <>
         <h1 className="album-page-h1">Trending</h1>
         <div className="allposts-photos">
            {arrPosts.map((post) => (
               <div onClick={() => goToPost(post)} key={post.id}>
                  <img src={post.photoUrl} alt="" className="userpost-images"></img>
               </div>
            ))}
         </div>
      </>
   );
}
