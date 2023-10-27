import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import DeleteAlbumModel from "../deletealbummodel";
import { useModal } from "../../../context/Modal";
import OpenModalButton from "../../OpenModalButton";
import CreatePostModal from "../../Posts/CreatePostModal";
import { setUser } from "../../../store/session";
import { thunkGetAllAlbums} from "../../../store/albums";
import { getEveryPostThunk } from "../../../store/posts";
import { NavLink } from "react-router-dom";
import UserBanner from "../../UserBanner";
import "../../CSS/john.css";

export default function SpecificAlbumPage() {
   const { id } = useParams();
   const dispatch = useDispatch();

   const getAlbums = useSelector((state) => state.albums.allAlbums);

   const getPosts = useSelector((state) => state.posts.allPosts);

   const thisAlbumPosts = Object.values(getPosts).filter((post) => post.albumId == id)
   console.log("🚀 ~ file: index.js:23 ~ SpecificAlbumPage ~ thisAlbumPosts:", thisAlbumPosts)

   const postsToMap = [...thisAlbumPosts]


   useEffect(() => {
      dispatch(thunkGetAllAlbums());
      dispatch(getEveryPostThunk());
   }, [dispatch]);

   // if (thisAlbum?.posts == undefined || !thisAlbum?.posts) {
   //    return (
   //       <div className="specific-album-container">
   //          <div>
   //             <OpenModalButton
   //                buttonText="Create a new post"
   //                modalComponent={
   //                   <CreatePostModal
   //                      id={id}
   //                   />
   //                }
   //             />
   //          </div>
   //          <div>
   //             <OpenModalButton
   //                buttonText="Delete"
   //                modalComponent={<DeleteAlbumModel id={id} />}
   //             />
   //          </div>
   //          <h1>Add Photos to Album</h1>
   //       </div>
   //    );
   // }
   return (
      <div className="specific-album-container">
         <UserBanner />
         <div>
            <OpenModalButton
               buttonText="Create a new post"
               modalComponent={
                  <CreatePostModal
                     id={id}
                  />
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
            {postsToMap.map((post) => (
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
