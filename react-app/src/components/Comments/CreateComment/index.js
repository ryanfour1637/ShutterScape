import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
   createCommentThunk,
   getEveryCommentThunk,
} from "../../../store/comments";
import { useModal } from "../../../context/Modal";
import "../../CSS/john.css";

export default function CreateCommentForm({ postId, setRefreshCreate }) {
   //    const { push } = useHistory();
   const dispatch = useDispatch();
   const [comment, setComment] = useState("");
   const { closeModal } = useModal();

   const handleSubmit = (e) => {
      e.preventDefault();

      const newComment = {
         comment: comment,
      };

      dispatch(createCommentThunk(postId, newComment));
      setComment("");
      setRefreshCreate(newComment.comment);
      return dispatch(getEveryCommentThunk()).then(closeModal());
   };

   const disableSubmit = () => {
      if (comment.length < 10) return true;
   };

   return (
      <div>
         <h1 className="post-commenth1">Post Comment</h1>
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

            <button
               type="submit"
               className="comment-submit"
               disabled={disableSubmit()}
            >
               Create Comment
            </button>
         </form>
      </div>
   );
}
