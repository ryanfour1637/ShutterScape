import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { deletePostThunk } from "../../../store/posts";
import { useParams, useHistory } from "react-router-dom";

export default function DeletePostModal({ postId }) {
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
         .then(push("/"));
   };

   return (
      <div id="delete-post-modal-container">
         <h1>Confirm Delete</h1>
         <div>Are you sure you want to remove this post?</div>
         <button
            id="delete-post-modal-button"
            className="action-button"
            onClick={handleSubmit}
         >
            Yes (Delete Post)
         </button>
         <button id="keep-post" onClick={closeModal}>
            No (Keep Post)
         </button>
      </div>
   );
}
