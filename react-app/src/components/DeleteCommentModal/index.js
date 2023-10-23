import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { deleteCommentThunk } from "../../store/comments";
import { getEveryPostThunk } from "../../store/posts";
import { useParams, useHistory } from "react-router-dom";

export default function DeleteCommentModal({ commentId, id }) {
   console.log("🚀 ~ file: index.js:31 ~ handleSubmit ~ id:", id);
   const dispatch = useDispatch();
   const { closeModal } = useModal();
   const { push } = useHistory();

   const handleSubmit = async (e) => {
      e.preventDefault();

      return dispatch(deleteCommentThunk(commentId))
         .then(closeModal())
         .then(push(`/posts/${id}`));
   };

   return (
      <div id="delete-comment-modal-container">
         <h1>Confirm Delete</h1>
         <div>Are you sure you want to remove this comment?</div>
         <button
            id="delete-comment-modal-button"
            className="action-button"
            onClick={handleSubmit}
         >
            Yes (Delete comment)
         </button>
         <button id="keep-comment" onClick={closeModal}>
            No (Keep comment)
         </button>
      </div>
   );
}
