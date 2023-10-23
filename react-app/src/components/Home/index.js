import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTenRandomPostsThunk } from "../../store/posts";
import OpenModalButton from "../OpenModalButton";
import SignupFormModal from "../SignupFormModal";
import "./Home.css";

export default function Home() {
   const dispatch = useDispatch();
   const allPost = useSelector((state) => state.posts.allPosts);
   const objPosts = Object.values(allPost)

   console.log("🚀 ~ file: index.js:8 ~ Home ~ allPost:", allPost);

   useEffect(() => {
      dispatch(getTenRandomPostsThunk());
   }, [dispatch]);

   return (
      <>
         <h1>Home Page</h1>
         <div>
            <img src={objPosts[0]?.photoUrl} alt=""></img>
         </div>

         <OpenModalButton
            className="home-button"
            buttonText="Start for free"
            modalComponent={<SignupFormModal />}
         />
      </>
   );
}
