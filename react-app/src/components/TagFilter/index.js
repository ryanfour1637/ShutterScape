import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useParams, NavLink} from "react-router-dom";
import {getEveryPostThunk} from "../../store/posts";

export default function TagFilter() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.allPosts);
  const postsArray = Object.values(posts);
  const filteredPosts = postsArray.filter((post) => post.tag == id);

  useEffect(() => {
    dispatch(getEveryPostThunk());
  }, [dispatch]);

  return (
    <div className="allposts-photos">
      {filteredPosts.map((post) => (
        <div key={post.id}>
          <NavLink to={`/posts/${post.id}`}>
            <img src={post.photoUrl} alt={post.title} className="userpost-images"/>
          </NavLink>
        </div>
      ))}
    </div>
  );
}
