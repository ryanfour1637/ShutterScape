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
   //  const tenPhotos = [];
   //  const nonUserPosts = posts.filter((post) => post.id !== user.id);
   console.log("posts", posts);
   useEffect(() => {
      dispatch(getTenRandomNonOwnerPosts());
   }, [dispatch]);

   const goToPost = (post) => {
      push(`/posts/${post.id}`);
      return;
   };

   //  useEffect(() => {
   //     for (let i = 0; i < 11; i++) {
   //        const randomIndex = Math.floor(Math.random() * nonUserPosts.length);
   //        const item = nonUserPosts[randomIndex];
   //        tenPhotos.push(item);
   //     }
   //  });

   if (Object.values(posts).length === 0) return null;

   return (
      <>
         <div>
            {arrPosts.map((post) => (
               <div onClick={() => goToPost(post)}>
                  <img src={post.photoUrl} alt="" key={post.id}></img>
               </div>
            ))}
         </div>
      </>
   );
}
