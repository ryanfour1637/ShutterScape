import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getEveryPostThunk } from "../../../store/posts";
import { NavLink } from "react-router-dom";
import { useModal } from "../../../context/Modal";
import OpenModalButton from "../../OpenModalButton";
import CreateAlbumModel from "../createnewalbummodel";
import { thunkGetAllAlbums } from "../../../store/albums";
import UserBanner from "../../UserBanner";

import "../../CSS/john.css";

export default function AllAlbumPage() {
   const dispatch = useDispatch();

   const getAlbums = useSelector((state) => state.albums.allAlbums);
   const userId = useSelector((state) => state.session.user.id);

   const allAlbums = Object.values(getAlbums);

   const albums = allAlbums.filter((album) => album.userId == userId);

   useEffect(() => {
      dispatch(getEveryPostThunk());
      dispatch(thunkGetAllAlbums());
   }, [dispatch]);

   if (albums?.length > 0) {
   } else {
      return (
         <div>
            <UserBanner />
            <h1>Album Details Page</h1>

            <div className="da-album-page">
               <h1 className="album-page-h1">Add Albums</h1>

               <div>
                  <OpenModalButton
                     buttonText="Create New Album"
                     modalComponent={<CreateAlbumModel />}
                  />
               </div>
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
      <div className="da-album-page">
         <UserBanner />
         <h1 className="album-page-h1">Album Details Page</h1>

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
                                 src={
                                    album.posts
                                       ? album.posts[0].photoUrl
                                       : "https://cdn-icons-png.flaticon.com/512/3767/3767084.png"
                                 }
                              ></img>
                           </div>
                           <div className="album-title">{album.title}</div>
                        </div>
                     </NavLink>
                  </div>
               ))}
         </div>
      </div>
   );
}
