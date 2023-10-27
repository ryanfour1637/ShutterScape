import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { deletePostThunk } from "../../../store/posts";
import { useParams, useHistory } from "react-router-dom";

export default function DeletePostModal({ postId, albumId }) {
   const dispatch = useDispatch();
   const { closeModal } = useModal();
   const [errors, setErrors] = useState({});
   const { push } = useHistory();

   const handleSubmit = (e) => {
      e.preventDefault();

      setErrors({});

      return dispatch(deletePostThunk(postId))
         .then(closeModal)
         .catch(async (res) => {
            const data = await res.json();

            if (data.errors) {
               setErrors(data.errors);
            } else {
            }
         })
         .then(push(`/userposts`));
   };

   return (
      <div id="delete-comment-modal-container">
         <h1 className="confirm-delete1">Delete Post</h1>
         <p className="delete-writing">
            Are you sure you want to remove this Post?
         </p>
         <button className="delete-da-bttn" onClick={handleSubmit}>
            Yes (Delete Post)
         </button>
         <button className="cancel-delete" onClick={closeModal}>
            No (Keep Post)
         </button>
      </div>
   );
}
