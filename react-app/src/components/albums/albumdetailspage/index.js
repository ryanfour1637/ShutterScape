import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getEveryPostThunk } from "../../../store/posts";
import { NavLink } from "react-router-dom";
import { useModal } from "../../../context/Modal";
import OpenModalButton from "../../OpenModalButton";
import CreateAlbumModel from "../createnewalbummodel";

export default function AlbumDetailsPage() {
   const dispatch = useDispatch();
   const [refresh, setRefresh] = useState("");
   const [photo, setPhoto] = useState(
      "https://www.seekpng.com/png/full/346-3460840_add-camera-icon-icon-add.png"
   );
   const allPosts = useSelector((state) => state.posts.allPosts);
   const user = useSelector((state) => state.session.user);

   const arrAllPosts = Object.values(allPosts);

   let userId;

   if (user) {
      userId = user.id;
   }

   const albumArray = [...user.albums[0]];
   const newAlbumArray = [];

   useEffect(() => {
      dispatch(getEveryPostThunk());
   }, [dispatch]);

   if (!arrAllPosts) return null;
   if (!user) return null;

   while (albumArray.length) {
      const filteredPosts = arrAllPosts.filter(
         (post) => albumArray[0].id == post.albumId
      );
      if (filteredPosts.length > 0) {
         albumArray[0]["imageUrl"] = filteredPosts[0].imageUrl;
         newAlbumArray.shift(albumArray);
      } else {
         albumArray[0]["imageUrl"] =
            "https://www.seekpng.com/png/full/346-3460840_add-camera-icon-icon-add.png";
         newAlbumArray.shift(albumArray);
      }
   }

   console.log("this is the album array", newAlbumArray);
   return (
      <div>
         <h1>Album Details Page</h1>
         <div>
            <OpenModalButton
               buttonText="Create New Album"
               modalComponent={
                  <CreateAlbumModel refresh={refresh} setRefresh={setRefresh} />
               }
            />
         </div>
         <div className="albumMapping">
            {newAlbumArray.map((album) => (
               <div key={album.id}>
                  <NavLink to="posts/current">
                     <div className="albumImageTitleContainer">
                        <div>
                           <img
                              className="testIMG"
                              alt=""
                              src="https://www.seekpng.com/png/full/346-3460840_add-camera-icon-icon-add.png"
                           ></img>
                        </div>
                        <div>{album.title}</div>
                     </div>
                  </NavLink>
               </div>
            ))}
         </div>
      </div>
   );
}
