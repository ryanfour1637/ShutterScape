import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams, useHistory} from "react-router-dom";
import "../CSS/lan.css"

export default function UserBanner() {
  const {id} = useParams();
  const user = useSelector((state) => state.session.user);
  const post = useSelector((state) => state.posts.allPosts[id]);
  const all_posts = useSelector((state) => state.posts.allPosts);
  const allUserPostsTotal = Object.values(all_posts).filter((singlepost) => singlepost.ownerId === user.id).length

  return (
    <div className="banner-parent-container">
      <div className="banner-banner-container">
        <div className="banner-user-details">
            <div id="default-profile-photo">
                <i className="fa-solid fa-camera"></i>
            </div>
            <div>
                <p>{user.firstName} {user.lastName}</p>
                <p>{user.username}</p>
            </div>
        </div>
        <div className="you-photos-joined-container">
          <p>{allUserPostsTotal} Photos</p>
        </div>
      </div>
    </div>
  );
}
