import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {getNineRandomNonOwnerPosts} from "../../../store/posts";
import Masonry from "react-masonry-css";
import "../../CSS/john.css";

export default function GetPosts() {
  const {push} = useHistory();
  const dispatch = useDispatch();
  const getPosts = useSelector((state) => state.posts.ninePosts);
  const arrPosts = Object.values(getPosts);
  const [postsToDisplay, setPostsToDisplay] = useState([]);

  useEffect(() => {
    dispatch(getNineRandomNonOwnerPosts());
  }, [dispatch]);

  useEffect(() => {
    const posts = Object.values(getPosts);
    setPostsToDisplay(posts);
  }, [getPosts]);

  const goToPost = (post) => {
    push(`/posts/${post.id}`);
    return;
  };

  const getRandomPhotos = () => {
    dispatch(getNineRandomNonOwnerPosts());
    setPostsToDisplay(arrPosts);
  };

  return (
    <>
      <h1 className="album-page-h1">Trending</h1>
      <button onClick={getRandomPhotos} id="see-more-bttn" className="modalButton">
        See more photos
      </button>
      <div className="allposts-photos">
        <Masonry
          breakpointCols={4}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {postsToDisplay.map((post) => (
            <div onClick={() => goToPost(post)} key={post.id}>
              <img src={post.photoUrl} alt="" className="trending-images"></img>
            </div>
          ))}

        </Masonry>
      </div>
    </>
  );
}
