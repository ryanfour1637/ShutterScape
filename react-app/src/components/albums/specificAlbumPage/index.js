import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import DeleteAlbumModel from "../deletealbummodel";
import { useModal } from "../../../context/Modal";
import OpenModalButton from "../../OpenModalButton";
import CreatePostModal from "../../Posts/CreatePostModal";
import { setUser } from "../../../store/session";
import { thunkGetAllAlbums } from "../../../store/albums";
import { NavLink } from "react-router-dom";
import UserBanner from "../../UserBanner";
import "../../CSS/john.css";


export default function SpecificAlbumPage() {
   const { id } = useParams();
   const dispatch = useDispatch();
   const [refreshCreate, setRefreshCreate] = useState("");

   const getAlbums = useSelector((state) => state.albums.allAlbums);

   const thisAlbum = getAlbums[id];
   console.log(
      "🚀 ~ file: index.js:19 ~ SpecificAlbumPage ~ thisAlbum:",
      thisAlbum
   );

   useEffect(() => {
      dispatch(thunkGetAllAlbums());
      setRefreshCreate("");
   }, [dispatch, refreshCreate]);

   if (thisAlbum?.posts == undefined || !thisAlbum?.posts) {
      return (
         <div className="specific-album-container">
            <div>
               <OpenModalButton
                  buttonText="Create a new post"
                  modalComponent={
                     <CreatePostModal
                        id={id}
                        setRefreshCreate={setRefreshCreate}
                     />
                  }
               />
            </div>
            <div>
               <OpenModalButton
                  buttonText="Delete"
                  modalComponent={<DeleteAlbumModel id={id} />}
               />
            </div>
            <h1>Add Photos to Album</h1>
         </div>
      );
   }
   return (

      <div>
         <UserBanner />
      <div className="specific-album-container">

         <div>
            <OpenModalButton
               buttonText="Create a new post"
               modalComponent={
                  <CreatePostModal setRefreshCreate={setRefreshCreate} />
               }
            />
         </div>
         <div>
            <OpenModalButton
               buttonText="Delete Album"
               modalComponent={<DeleteAlbumModel id={id} />}
            />
         </div>
         <h1 className="album-page-h1">Photos in Album</h1>
         <div className="allposts-photos">
            {thisAlbum.posts.map((post) => (
               <NavLink to={`/posts/${post.id}`}>
                  <div title={`${post.title}`}>
                     <img
                        src={post.photoUrl}
                        className="userpost-images"
                        alt=""
                     ></img>
                  </div>
               </NavLink>
            ))}
         </div>
      </div>
   );
}
