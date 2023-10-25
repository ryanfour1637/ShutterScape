import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import DeleteAlbumModel from "../deletealbummodel";
import { useModal } from "../../../context/Modal";
import OpenModalButton from "../../OpenModalButton";
import CreatePostModal from "../../Posts/CreatePostModal";
import { setUser } from "../../../store/session";

export default function AlbumLandingPage() {
   const { id } = useParams();
   const dispatch = useDispatch();
   const [refreshCreate, setRefreshCreate] = useState("");

   const user = useSelector((state) => state.session.user);

   useEffect(() => {
      dispatch(setUser(user));
      setRefreshCreate("");
   }, [dispatch]);

   if (!user.albums) {
      return null;
   } else {
      const allAlbums = [...user.albums];
   }

   return (
      <div>
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
               buttonText="Delete"
               modalComponent={<DeleteAlbumModel id={id} />}
            />
         </div>
      </div>
   );
}
