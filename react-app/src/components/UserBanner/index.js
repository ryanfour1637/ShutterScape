import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams, useHistory} from "react-router-dom";

export default function UserBanner() {
  const {id} = useParams();
  const {push} = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const post = useSelector((state) => state.posts.allPosts[id]);
  const all_posts = useSelector((state) => state.posts.allPosts);
  const allUserPostsTotal = Object.values(all_posts).filter((singlepost) => singlepost.ownerId === user.id).length
  console.log("🚀 ~ file: index.js:13 ~ UserBanner ~ allUserPostsTotal:", allUserPostsTotal)


  return (
    <div className="you-parent-container">
      <div className="you-banner-container">
        <div className="you-user-details">
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p>{user.username}</p>
        </div>
        <div className="you-photos-joined-container">
          <p>{allUserPostsTotal} Photos</p>
        </div>
      </div>
    </div>
  );
}
