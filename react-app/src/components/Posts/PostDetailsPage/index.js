import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getEveryPostThunk } from "../../../store/posts";
import OpenModalButton from "../../OpenModalButton";
import DeletePostModal from "../DeletePostModal";

export default function PostDetailsPage() {
   const { id } = useParams();
   const { push } = useHistory();
   const dispatch = useDispatch();
   const [comment, setComment] = useState("");
   const user = useSelector((state) => state.session.user);
   const post = useSelector((state) => state.posts.allPosts[id]);
   console.log("this is the user", user.id);
   console.log("this is the post", post);




   useEffect(() => {
      dispatch(getEveryPostThunk());
      console.log(id);
   }, [dispatch, id]);

   const disableSubmit = () => {
      if (comment.length < 10) return true;
   };

   const fixDate = (dateString) => {
      const date = new Date(dateString);
      const formatter = new Intl.DateTimeFormat("en-US", {
         year: "numeric",
         month: "long",
         day: "numeric"
      });
      return formatter.format(date);
   };

   // TODO - Needs to be completed
   const handleSubmit = (e) => {
      e.preventDefault();

      return;
   };

   if (post === undefined) return null;

   return (
      <>
         <div className="image-container">
            <img src={post.photoUrl} alt=""></img>

            {user.id === post.ownerId && (
               <div>
                  <OpenModalButton
                     buttonText="Delete"
                     modalComponent={<DeletePostModal postId={post.id} />}
                  />
               </div>
            )}
         </div>

         <div className="image-details-container">
            <p id="image-username">
               {post.users.firstName} {post.users.lastName}
            </p>
            <p className="image-title">{post.title}</p>
            <p className="image-description">{post.description}</p>
         </div>

         <div className="comments-container">
            <div className="past-comments">
               {post && post.comments.length >= 1 ? ((post.comments.map((comment, index) => (
                  <div className="bottom-comments">
                     <div key={index} className="bot-comment-bunch">
                        {/* <h3>{comment.User.firstName}</h3> */}
                        <p className="datedate"> {fixDate(comment.createdAt)} </p>
                        <p className="pushin-p"> "{comment.comment}" </p>
                        {/* {comment.userId === (sessionUser ? sessionUser.id : null) && <OpenModalButton buttonText="Delete" modalComponent={<Deletecomment commentId={comment.id} spotId={thisSpot.id} setReloadPage={setReloadPage} />} />} */}
                     </div>
                  </div>
               )))) : (<div className="be-the-first"> Be the first to post a comment! </div>)}
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
                  id="comment-submit"
                  disabled={disableSubmit()}
               >
                  Add Comment
               </button>
            </form>
         </div>
      </>
   );
}
