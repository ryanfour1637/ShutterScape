import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
   createCommentThunk,
   getEveryCommentThunk,
} from "../../../store/comments";

export default function CreateCommentForm({ postId }) {
   const { push } = useHistory();
   const dispatch = useDispatch();
   const [comment, setComment] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();

      const newComment = {
         comment: comment,
      };

      dispatch(createCommentThunk(postId, newComment));
      setComment("");
      return dispatch(getEveryCommentThunk());
   };

   const disableSubmit = () => {
      if (comment.length < 10) return true;
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
            Add Comment
         </button>
      </form>
   );
}
