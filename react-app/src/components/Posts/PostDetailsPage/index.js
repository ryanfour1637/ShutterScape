import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getEveryPostThunk } from "../../../store/posts";
import { getEveryCommentThunk } from "../../../store/comments";
import OpenModalButton from "../../OpenModalButton";
import UpdatePostModal from "../UpdatePostModal";
import DeletePostModal from "../DeletePostModal";
import CreateCommentForm from "../../Comments/CreateComment";
import DeleteCommentModal from "../../Comments/DeleteCommentModal";
import UpdateCommentModal from "../../Comments/UpdateComment";
import { useModal } from "../../../context/Modal";
import FavoriteTracker from "../../Favorites-Component/favorite-tracker";

export default function PostDetailsPage() {
   const { id } = useParams();
   const { push } = useHistory();
   const dispatch = useDispatch();
   const user = useSelector((state) => state.session.user);
   const allPosts = useSelector((state) => state.posts.allPosts);
   const comments = useSelector((state) => state.comments.allComments);

   const post = allPosts[id];

   useEffect(() => {
      dispatch(getEveryPostThunk());
      dispatch(getEveryCommentThunk());
   }, [dispatch]);

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

   const albumId = post.albumId;

   const commentsArr = Object.values(comments).filter(
      (comment) => comment.postId == id
   );

   return (
      <div>
         <div className="image-container">
            <img className="detail-photo" src={post.photoUrl} alt="" />
            <div className="Post-Details-Buttons">
               {user.id === post.ownerId && (
                  <div>
                     <OpenModalButton
                        buttonText="Update Post"
                        modalComponent={<UpdatePostModal postId={post.id} />}
                     />
                  </div>
               )}

               {user.id === post.ownerId && (
                  <div>
                     <OpenModalButton
                        buttonText="Delete Post"
                        modalComponent={
                           <DeletePostModal
                              postId={post.id}
                              albumId={albumId}
                           />
                        }
                     />
                  </div>
               )}
            </div>
            <FavoriteTracker postId={id} userId={user.id} />
         </div>

         <div className="image-details-container">
            <p id="image-username">
               {post.users.firstName} {post.users.lastName}
            </p>
            <p className="image-title">{post.title}</p>
            <p className="image-description">{post.description}</p>
         </div>
         <hr></hr>
         <div className="comments-container">
            <div className="past-comments">
               {commentsArr && commentsArr.length >= 1 ? (
                  commentsArr.map((comment, index) => (
                     <div className="bottom-comments" key={index}>
                        <div className="bot-comment-bunch">
                           <div className="date-name">
                              <h3 className="post-details-name">
                                 {comment.users.firstName} {comment.users.lastName}
                              </h3>
                              <p className="postdetails-datedate">
                                 {fixDate(comment.createdAt)}
                              </p>
                           </div>
                           <p className="postdetail-comment">
                              "{comment.comment}"
                           </p>

                           {comment.userId === (user.id ? user.id : null) && (
                              <OpenModalButton
                                 buttonText="Update Comment"
                                 modalComponent={
                                    <UpdateCommentModal
                                       commentId={comment.id}
                                       postId={id}
                                    />
                                 }
                              />
                           )}
                           {comment.userId === (user.id ? user.id : null) && (
                              <OpenModalButton
                                 buttonText="Delete Comment"
                                 modalComponent={
                                    <DeleteCommentModal
                                       commentId={comment.id}
                                       id={id}
                                    />
                                 }
                              />
                           )}
                        </div>
                     </div>
                  ))
               ) : (
                  <div className="be-the-first">
                     Be the first to post a comment!
                  </div>
               )}
            </div>

            <div className="create-comment-button">
               <OpenModalButton
                  buttonText="Post Comment"
                  modalComponent={
                     <CreateCommentForm
                        postId={id}
                     />
                  }
               />
            </div>
         </div>
      </div>
   );
}
