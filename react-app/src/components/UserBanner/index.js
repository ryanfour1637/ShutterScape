import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import BannerNav from "./BannerNav";
import "../CSS/lan.css";

export default function UserBanner() {
  const { id } = useParams();
  const user = useSelector((state) => state.session.user);
  const post = useSelector((state) => state.posts.allPosts[id]);
  const all_posts = useSelector((state) => state.posts.allPosts);
  const allUserPostsTotal = Object.values(all_posts).filter(
    (singlepost) => singlepost.ownerId === user.id
  ).length;

  return (
    <>
      <div className="banner-parent-container">
        <div className="banner-content">
          <div className="banner-user-details">
            <div className="profile-photo">
              <i className="fa-solid fa-camera"></i>
            </div>
            <div>
              <p id="banner-fname-lname">
                {user.firstName} {user.lastName}
              </p>
              <p id="banner-username">{user.username}</p>
            </div>
          </div>


          <p>{allUserPostsTotal} Photos</p>

        </div>
      </div>

      <div>
        <BannerNav />
      </div>
    </>
  );
}
