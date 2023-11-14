import React from "react";
import {NavLink, useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import ProfileButton from "./ProfileButton";
import YouButton from "./YouButton";
import "./Navigation.css";
import logo from "../../images/logo.png";

function Navigation({isLoaded}) {
  const {push} = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const goToCurrent = () => {
    return push("/posts/current");
  };

  return (
    <>
      <div className="nav-container">
        <nav className="header">
          <div className="logo-container">
            <NavLink exact to="/">
              <img src={logo} alt="logo" id="logo" />
            </NavLink>
            {isLoaded && sessionUser && (
              <div className="nav-links">
                <YouButton user={sessionUser} className="youbutton-button" />
                <div onClick={goToCurrent}>Explore</div>
              </div>
            )}
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

      <div>
        {isLoaded && sessionUser && (
          <div id="tag-icons-container">
            <div className="tag-icons">
              <NavLink to="/posts/tags/city" className="nav-icon">
                <i className="fas fa-city"></i>
                <p className="nav-icon">City</p>
              </NavLink>
            </div>

            <div className="tag-icons">
              <NavLink to="/posts/tags/nature" className="nav-icon">
                <i className="fas fa-tree"></i>
                <p className="nav-icon">Nature</p>
              </NavLink>
            </div>

            <div className="tag-icons">
              <NavLink to="/posts/tags/food" className="nav-icon">
                <i className="fas fa-utensils"></i>
                <p className="nav-icon">Food</p>
              </NavLink>
            </div>

            <div className="tag-icons">
              <NavLink to="/posts/tags/animals" className="nav-icon">
                <i className="fas fa-paw"></i>
                <p className="nav-icon">Animals</p>
              </NavLink>
            </div>

            <div className="tag-icons">
              <NavLink to="/posts/tags/events" className="nav-icon">
                <i className="fas fa-glass-cheers"></i>
                <p className="nav-icon">Events</p>
              </NavLink>
            </div>

            <div className="tag-icons">
              <NavLink to="/posts/tags/people" className="nav-icon">
                <i class="fas fa-user-ninja"></i>
                <p className="nav-icon">People</p>
              </NavLink>
            </div>

            <div className="tag-icons">
              <NavLink to="/posts/tags/art" className="nav-icon">
                <i className="fas fa-palette"></i>
                <p className="nav-icon">Art</p>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navigation;
