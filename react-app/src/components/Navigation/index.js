import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import YouButton from "./YouButton";
import "./Navigation.css";
import logo from "../../images/logo.png";

function Navigation({ isLoaded }) {
   const { push } = useHistory();
   const sessionUser = useSelector((state) => state.session.user);

   const goToCurrent = () => {
      return push("/posts/current");
   };

   return (
      <div className="nav-container">
         <nav className="header">
            <div className="logo-container">
               <NavLink exact to="/">
                  <img src={logo} alt="logo" id="logo" />
               </NavLink>
               {isLoaded && sessionUser && (
                  <div className="nav-links">
                     <YouButton
                        user={sessionUser}
                        className="youbutton-button"
                     />
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
   );
}

export default Navigation;
