import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../../context/Modal";
import { thunkDeleteAlbum } from "../../../store/albums";


export default function DeleteAlbumModel({ id }) {
   const { closeModal } = useModal();
   const { push } = useHistory();
   const dispatch = useDispatch();

   async function deleteAlbum() {

      dispatch(thunkDeleteAlbum(id))
      push("/albums");
      return closeModal();
   }

   return (
      <div id="delete-album-modal-container">
         <h1 className="confirm-delete">Delete Album</h1>
         <div className="delete-writing1">Are you sure you want to remove this album?</div>
         <button
            id="delete-album-modal-button"
            className="delete-da-bttn"
            onClick={() => deleteAlbum()}
         >
            Yes (Delete Album)
         </button>
         <button className="cancel-delete" id="keep-album" onClick={closeModal}>
            No (Keep Album)
         </button>
      </div>
   );
}
