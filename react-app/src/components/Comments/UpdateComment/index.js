import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { useParams, useHistory } from "react-router-dom";
import {
   getEveryCommentThunk,
   updateCommentThunk,
} from "../../../store/comments";

export default function UpdateCommentModal({ commentId }) {
   const dispatch = useDispatch();
   const { closeModal } = useModal();
   const oneComment = useSelector(
      (state) => state.comments.allComments[commentId]
   );
   const [refresh, setRefresh] = useState(false);
   const [comment, setComment] = useState(oneComment.comment);

   useEffect(() => {
      dispatch(getEveryCommentThunk());
   }, [refresh, dispatch]);

   const disableSubmit = () => {
      if (comment.length < 10) return true;
   };

   //we need to figure out why the comment isnt updating consistently when we are hitting update.
   const handleSubmit = (e) => {
      e.preventDefault();

      const updatedComment = {
         comment: comment,
      };

      dispatch(updateCommentThunk(updatedComment, commentId));

      setComment("");
      setRefresh(true);
      return closeModal();
   };

   return (
      <form onSubmit={handleSubmit} className="comment-form-container">
         <label>
            <textarea
               type="text"
               id="comment-text-area"
               value={comment}
               placeholder="Add a comment about this photo..."
               onChange={(e) => setComment(e.target.value)}
            />
         </label>

         <button type="submit" id="comment-submit" disabled={disableSubmit()}>
            Update Comment
         </button>
      </form>
   );
}
