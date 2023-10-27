import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { useParams, useHistory } from "react-router-dom";
import {
   getEveryCommentThunk,
   updateCommentThunk,
} from "../../../store/comments";

export default function UpdateCommentModal({ commentId, setRefreshUpdate }) {
   const dispatch = useDispatch();
   const [validationObject, setValidationObject] = useState({})
   const [disableSubmitButton, setdisableSubmitButton] = useState(true);
   const { closeModal, setOnModalClose } = useModal();
   const oneComment = useSelector(
      (state) => state.comments.allComments[commentId]
   );

   const [comment, setComment] = useState(oneComment.comment);

   useEffect(() => {
      dispatch(getEveryCommentThunk());
   }, [dispatch]);

   useEffect(() => {
      const errorsObject = {};

      if (comment.length < 10) {
         errorsObject.comment = "Comment must be more than 10 characters."
      }




      setValidationObject(errorsObject)
   }, [comment])

   useEffect(() => {
      setdisableSubmitButton(!(comment.length >= 10));
   }, [comment]);


   const handleSubmit = (e) => {
      e.preventDefault();

      const updatedComment = {
         comment: comment,
      };

      dispatch(updateCommentThunk(updatedComment, commentId));

      setComment("");
      setRefreshUpdate(updatedComment.comment);
      return closeModal();
   };

   return (
      <div className="update-comment-container">
         <h1 className="update-comment1">Update Comment</h1>
         <div className="error-box">
            {validationObject.comment && <p
               className="errors-one"> {validationObject.comment}</p>}
         </div>
         <form onSubmit={handleSubmit} className="comment-form-container">
            <h3 className="comment-h3">Comment</h3>
            <label>
               <textarea
                  type="text"
                  id="comment-text-area"
                  value={comment}
                  placeholder="Add a comment about this photo..."
                  onChange={(e) => setComment(e.target.value)}
               />
            </label>

            <button
               type="submit"
               className="comment-submit"
               disabled={Object.keys(validationObject).length > 0}
            >
               Update Comment
            </button>
         </form>
      </div>
   );
}
