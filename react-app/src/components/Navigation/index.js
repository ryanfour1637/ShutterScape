import React from "react";
import {NavLink, useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import ProfileButton from "./ProfileButton";
import CreatePostModal from "../Posts/CreatePostModal";
import OpenModalButton from "../OpenModalButton";
import "./Navigation.css";
import logo from "../../images/logo.png";

function Navigation({isLoaded}) {
  const {push} = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div className="nav-container">
      <nav className="header">
        <div className="logo-container">
          <NavLink exact to="/posts/current">
            <img src={logo} alt="logo" id="logo" />
          </NavLink>
          <NavLink exact to="/userposts">
            <p>You</p>
          </NavLink>
          <NavLink exact to="/posts/current">
            <p>Explore</p>
          </NavLink>
        </div>

        <div>
          <div>
            {isLoaded && (
              <div className="profile-menu-container">
                <div>
                  <ProfileButton user={sessionUser} />
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
