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
   const [validationObject, setValidationObject] = useState({})
   const [disableSubmitButton, setdisableSubmitButton] = useState(true);

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


   return (
      <div>
         <h1 className="post-commenth1">Post Comment</h1>
         <div className="error-box">
            {validationObject.comment && <p
               className="errors-one"> {validationObject.comment}</p>}
         </div>
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
               disabled={Object.keys(validationObject).length > 0}
            >
               Create Comment
            </button>
         </form>
      </div>
   );
}
