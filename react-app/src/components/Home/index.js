import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTenRandomPostsThunk } from "../../store/posts";
import OpenModalButton from "../OpenModalButton";
import SignupFormModal from "../SignupFormModal";
import "../CSS/john.css";

export default function Home() {
   const dispatch = useDispatch();
   const allPost = useSelector((state) => state.posts.allPosts);
   const [currentImageIndex, setCurrentImageIndex] = useState(0);
   const [nextImageIndex, setNextImageIndex] = useState(1); // Track the next image to preload

   useEffect(() => {
      dispatch(getTenRandomPostsThunk());
   }, [dispatch]);

   const imageUrls = [
      "https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-07.jpg",
      "https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-29.jpg",
      "https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-56.jpg",
      "https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-098.jpg",
      "https://shutterscape.s3.us-west-1.amazonaws.com/shutterscape/seedpic-116.jpg",
   ];

   useEffect(() => {
      const interval = setInterval(() => {
         // Update the current and next image indices
         setCurrentImageIndex((prevIndex) =>
            prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
         );
         setNextImageIndex((prevIndex) =>
            prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
         );
      }, 5000);

      return () => clearInterval(interval);
   }, []);

   const backgroundImageStyle = {
      backgroundImage: `url(${imageUrls[currentImageIndex]})`,
      backgroundSize: "100% 100%",
      backgroundPosition: "center",
      height: "100vh",
      position: "relative",
   };

   // Preload the next image
   const preloadNextImage = () => {
      const img = new Image();
      img.src = imageUrls[nextImageIndex];
   };

   useEffect(() => {
      preloadNextImage();
   }, [nextImageIndex]);

   return (
      <div className="home-container" style={backgroundImageStyle}>
         <div className="text-container">
            <h1 className="inspiration">Find your inspiration.</h1>
            <h2 classname="join">Join the ShutterScape community, home to tens of hundreds of photos.</h2>
            <OpenModalButton
               className="start-for-button"
               buttonText="Start for free"
               modalComponent={<SignupFormModal />}
            />
         </div>
      </div>
   );
}
