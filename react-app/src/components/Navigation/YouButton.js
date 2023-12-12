import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import "../../index.css";

function YouButton({ user }) {
   const dispatch = useDispatch();
   const { push } = useHistory();
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

   const closeMenu = () => setShowMenu(false);

   const logout = (e) => {
      e.preventDefault();
      dispatch(sessionActions.logout());
      closeMenu();
      push("/");
   };

   const goToUserPosts = () => {
      closeMenu();
      push("/userposts");
      return;
   };

   const goToUserAlbums = () => {
      closeMenu();
      push("/albums");
      return;
   };

   const goToFavorites = () => {
      closeMenu();
      push("/favorites");
      return;
   };

   const ulClassName = "youbutton-dropdown" + (showMenu ? "" : " hidden");

   return (
      <div className="youbutton-parent-container">
         <div onClick={openMenu} className="youbutton-button">
            You
         </div>
         <div className={ulClassName} ref={ulRef}>
            {user ? (
               <div className="youbutton-container">
                  <div id="about-link" onClick={() => goToUserPosts()}>
                     About
                  </div>
                  <div onClick={() => goToUserAlbums()}>Albums</div>
                  <div onClick={() => goToFavorites()}>Favorites</div>
               </div>
            ) : (
               <div className="youbutton-container">
                  <OpenModalMenuItem
                     itemText="Log In"
                     onItemClick={closeMenu}
                     modalComponent={<LoginFormModal />}
                  />
                  <OpenModalMenuItem
                     itemText="Sign Up"
                     onItemClick={closeMenu}
                     modalComponent={<SignupFormModal />}
                  />
               </div>
            )}
         </div>
      </div>
   );
}

export default YouButton;
