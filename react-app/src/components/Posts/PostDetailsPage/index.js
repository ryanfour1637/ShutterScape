import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getEveryPostThunk } from "../../../store/posts";
import { getEveryCommentThunk } from "../../../store/comments";
import OpenModalButton from "../../OpenModalButton";
import DeletePostModal from "../DeletePostModal";
import CreateCommentForm from "../../Comments/CreateComment";
import DeleteCommentModal from "../../Comments/DeleteCommentModal";
import UpdateCommentModal from "../../Comments/UpdateComment";

export default function PostDetailsPage() {
   const { id } = useParams();
   const { push } = useHistory();
   const dispatch = useDispatch();

   const user = useSelector((state) => state.session.user);
   const post = useSelector((state) => state.posts.allPosts[id]);
   const comments = useSelector((state) => state.comments.allComments);

   useEffect(() => {
      dispatch(getEveryPostThunk());
      dispatch(getEveryCommentThunk());
   }, [dispatch, comments]);

   const fixDate = (dateString) => {
      const date = new Date(dateString);
      const formatter = new Intl.DateTimeFormat("en-US", {
         year: "numeric",
         month: "long",
         day: "numeric",
      });
      return formatter.format(date);
   };

   if (post === undefined) return null;
   if (comments == undefined) return null;

   const commentsArr = Object.values(comments).filter(
      (comment) => comment.postId == id
   );

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
               {commentsArr && commentsArr.length >= 1 ? (
                  commentsArr.map((comment, index) => (
                     <div className="bottom-comments">
                        <div key={index} className="bot-comment-bunch">
                           <h3>
                              {comment.users.firstName} {comment.users.lastName}
                           </h3>
                           <p className="datedate">
                              {" "}
                              {fixDate(comment.createdAt)}{" "}
                           </p>
                           <p className="pushin-p"> "{comment.comment}" </p>
                           {comment.userId === (user.id ? user.id : null) && (
                              <OpenModalButton
                                 buttonText="Delete"
                                 modalComponent={
                                    <DeleteCommentModal
                                       commentId={comment.id}
                                       id={id}
                                    />
                                 }
                              />
                           )}
                           {comment.userId === (user.id ? user.id : null) && (
                              <OpenModalButton
                                 buttonText="Update"
                                 modalComponent={
                                    <UpdateCommentModal
                                       commentId={comment.id}
                                       postId={id}
                                    />
                                 }
                              />
                           )}
                        </div>
                     </div>
                  ))
               ) : (
                  <div className="be-the-first">
                     {" "}
                     Be the first to post a comment!{" "}
                  </div>
               )}
            </div>
            <div>
               <OpenModalButton
                  buttonText="Create"
                  modalComponent={<CreateCommentForm postId={id} />}
               />
            </div>
         </div>
      </>
   );
}
