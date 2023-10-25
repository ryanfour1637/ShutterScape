import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getTenRandomNonOwnerPosts } from "../../../store/posts";

export default function GetPosts() {
   const { push } = useHistory();
   const user = useSelector((state) => state.session.user);
   const dispatch = useDispatch();
   const posts = useSelector((state) => state.posts.allPosts);
   const arrPosts = Object.values(posts);
 
   console.log("posts", posts);
   useEffect(() => {
      dispatch(getTenRandomNonOwnerPosts());
   }, [dispatch]);

   const goToPost = (post) => {
      push(`/posts/${post.id}`);
      return;
   };

   if (Object.values(posts).length === 0) return null;

   return (
      <>
         <div>
            {arrPosts.map((post) => (
               <div onClick={() => goToPost(post)} key={post.id}>
                  <img src={post.photoUrl} alt=""></img>
               </div>
            ))}
         </div>
      </>
   );
}
