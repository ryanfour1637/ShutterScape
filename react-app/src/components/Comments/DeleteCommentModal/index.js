import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { deleteCommentThunk } from "../../../store/comments";
import { getEveryPostThunk } from "../../../store/posts";
import { useParams, useHistory } from "react-router-dom";
import "../../CSS/john.css"

export default function DeleteCommentModal({ commentId, id }) {
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
         <h1 className="confirm-delete">Delete Comment</h1>
         <p className="delete-writing">Are you sure you want to remove this comment?</p>
         <button
            className="delete-da-bttn"
            onClick={handleSubmit}
         >
            Yes (Delete comment)
         </button>
         <button className="cancel-delete" onClick={closeModal}>
            No (Keep comment)
         </button>
      </div >
   );
}
