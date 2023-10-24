import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import CreatePostModal from "../Posts/CreatePostModal";
import OpenModalButton from "../OpenModalButton"
import "../CSS/john.css"

function Navigation({ isLoaded }) {
  const { push } = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  // const goToCreatePostModal = () => {
  //   push("/posts/new");
  //   return;
  // };

  return (
    <div className="nav-container">
      <nav className="header">
        <div className="logo-container">
          <NavLink exact to="/">
            {/* <img src={logo} alt="logo" id="logo" /> */}
          </NavLink>
        </div>
        <div>
          <div>
            {isLoaded && (
              <div className="profile-menu-container">
                <div>
                  {sessionUser && (
                    <div>
                      <OpenModalButton
                        buttonText="Create a new post"
                        modalComponent={<CreatePostModal />}
                      />
                    </div>
                  )}
                </div>
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
