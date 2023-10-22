import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {getPostDetailsThunk} from "../../../store/posts";
import OpenModalButton from "../../OpenModalButton";
import DeletePostModal from "../DeletePostModal";

export default function PostDetailsPage() {
  const {id} = useParams();
  const {push} = useHistory();
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const user = useSelector((state) => state.session.user);
  const post = useSelector((state) => state.posts.singlePost);

  useEffect(() => {
    dispatch(getPostDetailsThunk(id));
  }, [dispatch]);

  const disableSubmit = () => {
    if (comment.length < 10) return true;
  };

  // Needs to be completed
  const handleSubmit = (e) => {
    e.preventDefault();

    return;
  };

  // TODO: Delete button only visible to Owner of Post - not working
  return (
    <>
      <div className="image-container">
        <img src={post.photoUrl} alt=""></img>

        {/* Delete button only shows if Post belongs to logged in user */}
        {user.id === post.ownerId && (
          <div>
            <OpenModalButton
              buttonText="Delete"
              modalComponent={<DeletePostModal postId={post.id} />}
            />
          </div>
        )}

        <div>
          <OpenModalButton
            buttonText="Delete"
            modalComponent={<DeletePostModal postId={post.id} />}
          />
        </div>
      </div>

      <div className="image-details-container">
        <p id="image-username">Name: Need to Eager Load Users Table</p>
        <p className="image-title">{post.title}</p>
        <p className="image-description">{post.description}</p>
      </div>

      <div className="comments-container">
        <form onSubmit={handleSubmit} className="review-form-container">
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
      </div>
    </>
  );
}
