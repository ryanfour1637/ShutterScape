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
   const allPosts = useSelector((state) => state.posts.allPosts);
   const user = useSelector((state) => state.session.user);
   const albums = useSelector((state) => state.session.albums);

   const arrAllPosts = Object.values(allPosts);

   let userId;

   if (user) {
      userId = user.id;
   }

   useEffect(() => {
      dispatch(getEveryPostThunk());
      // dispatch(getAllAlbumsThunk());
   }, [dispatch]);

   console.log(albums);
   if (albums?.length > 0) {
   } else {
      return (
         <div>
            <h1>Album Details Page</h1>
            <div>
               <OpenModalButton
                  buttonText="Create New Album"
                  modalComponent={<CreateAlbumModel />}
               />
            </div>
         </div>
      );
   }

   // while (albumArray.length) {
   //    const filteredPosts = arrAllPosts.filter(
   //       (post) => albumArray[0].id == post.albumId
   //    );
   //    if (filteredPosts.length > 0) {
   //       albumArray[0]["imageUrl"] = filteredPosts[0].imageUrl;
   //       newAlbumArray.shift(albumArray);
   //    } else {
   //       albumArray[0]["imageUrl"] =
   //          "https://www.seekpng.com/png/full/346-3460840_add-camera-icon-icon-add.png";
   //       newAlbumArray.shift(albumArray);
   //    }
   // }

   if (!albums) return null;
   return (
      <div>
         <h1>Album Details Page</h1>
         <div>
            <OpenModalButton
               buttonText="Create New Album"
               modalComponent={<CreateAlbumModel />}
            />
         </div>
         <div className="albumMapping">
            {albums.length > 0 &&
               albums.map((album) => (
                  <div key={album.id}>
                     <NavLink to={`/albums/${album.id}`}>
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
