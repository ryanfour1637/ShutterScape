import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {getAllOwnerPostsThunk} from "../../../store/posts";

export default function GetPosts() {
  const {push} = useHistory();
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.allPosts);

  useEffect(() => {
    dispatch(getAllOwnerPostsThunk());
  }, [dispatch]);

  const goToPost = (post) => {
    push(`/posts/${post.id}`);
    return;
  };

  if (!posts.length) return null;

  return (
    <>
      <div>
        {posts.map((post) => (
          <div onClick={() => goToPost(post)}>
            <img src={post.photoUrl} alt="" key={post.id}></img>
          </div>
        ))}
      </div>
    </>
  );
}
