import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import CreatePostModal from "../Posts/CreatePostModal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ProfileButtonPic from "../../images/profile-button.png"

function ProfileButton({ user }) {
   const { push } = useHistory();
   const dispatch = useDispatch();
   const [showMenu, setShowMenu] = useState(false);

   const ulRef = useRef();

   const openMenu = () => {
      if (showMenu) return;
      setShowMenu(true);
   };

   useEffect(() => {
      if (!showMenu) return;

      const closeMenu = (e) => {
         if (!ulRef.current.contains(e.target)) {
            setShowMenu(false);
         }
      };

      document.addEventListener("click", closeMenu);

      return () => document.removeEventListener("click", closeMenu);
   }, [showMenu]);

   const handleLogout = (e) => {
      e.preventDefault();
      dispatch(logout());
      push("/");
   };

   const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
   const closeMenu = () => setShowMenu(false);

   return (
      <div className="profile-button-container">
         <button onClick={openMenu} className="profile-button">
            <div>
               <img src={ProfileButtonPic} id="profile-btn-pic"/>
            </div>
         </button>
         <ul className={ulClassName} ref={ulRef}>
            {user ? (
               <div className="profile-container">
                  <p>Welcome {user.username}!</p>
                  <p>{user.email}</p>

                  <div>
                     <button onClick={handleLogout} className="modalButton">
                        Log Out
                     </button>
                  </div>
               </div>
            ) : (
               <div className="profile-container">
                  <OpenModalButton
                     buttonText="Log In"
                     onItemClick={closeMenu}
                     modalComponent={<LoginFormModal />}
                  />

                  <OpenModalButton
                     buttonText="Sign Up"
                     onItemClick={closeMenu}
                     modalComponent={<SignupFormModal />}
                  />
               </div>
            )}
         </ul>
      </div>
   );
}

export default ProfileButton;
