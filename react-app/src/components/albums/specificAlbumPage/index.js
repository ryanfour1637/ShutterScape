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

export default function SpecificAlbumPage() {
   const { id } = useParams();
   console.log("🚀 ~ file: index.js:14 ~ SpecificAlbumPage ~ id:", id)
   const dispatch = useDispatch();
   const [refreshCreate, setRefreshCreate] = useState("");

   const getAlbums = useSelector((state) => state.albums.allAlbums)

   const thisAlbum = getAlbums[id]
   console.log("🚀 ~ file: index.js:19 ~ SpecificAlbumPage ~ thisAlbum:", thisAlbum)

   
   useEffect(() => {
      dispatch(thunkGetAllAlbums())
      setRefreshCreate("");
   }, [dispatch, refreshCreate]);

   if (thisAlbum?.posts == undefined || !thisAlbum?.posts) {
      return (<div>
      <div>
         <OpenModalButton
            buttonText="Create a new post"
            modalComponent={
               <CreatePostModal id={id} setRefreshCreate={setRefreshCreate} />
            }
         />
      </div>
      <div>
         <OpenModalButton
            buttonText="Delete"
            modalComponent={<DeleteAlbumModel id={id} />}
         />
      </div>
   </div>)
   }
   return (
      <div>
         <div>
            <OpenModalButton
               buttonText="Create a new post"
               modalComponent={
                  <CreatePostModal id={id} setRefreshCreate={setRefreshCreate} />
               }
            />
         </div>
         <div>
            <OpenModalButton
               buttonText="Delete"
               modalComponent={<DeleteAlbumModel id={id} />}
            />
         </div>
         <div>
            {thisAlbum.posts.map((post) => (
               <NavLink to={`/posts/${post.id}`}>
                  <div title={`${post.title}`}><img src={post.photoUrl}></img></div>
               </NavLink>
            ))}
         </div>
      </div>
   );
}
