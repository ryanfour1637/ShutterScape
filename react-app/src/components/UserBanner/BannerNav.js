import React from "react";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import "../CSS/lan.css"

function BannerNav({isLoaded}) {
  const {push} = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const goToUserPosts = () => {
    push("/userposts");
    return;
  };

  const goToUserAlbums = () => {
    push("/albums");
    return;
  };

//   const goToUserFaves = () => {
//     push(`/favorites`);
//     return;
//   };

  return (
    <div className="banner-nav-container">
      <div onClick={() => goToUserPosts()}>Photostream</div>
      <div onClick={() => goToUserAlbums()}>Albums</div>
      <div>Faves</div>
    </div>
  );
}

export default BannerNav;
