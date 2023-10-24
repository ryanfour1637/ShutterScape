import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import CreatePostModal from "../Posts/CreatePostModal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ProfileButton({ user }) {
   const { push } = useHistory();
   const dispatch = useDispatch();
   const [showMenu, setShowMenu] = useState(false);
   const [refresh, setRefresh] = useState("");
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
               <i className="fa-solid fa-bars"></i>
            </div>
            <div>
               <i className="fa-regular fa-user"></i>
            </div>
         </button>
         <ul className={ulClassName} ref={ulRef}>
            {user ? (
               <div className="profile-container">
                  <p>Welcome {user.username}!</p>
                  <p>{user.email}</p>

                  <div>
                     <OpenModalButton
                        buttonText="Create a new post"
                        modalComponent={
                           <CreatePostModal
                              setRefresh={setRefresh}
                              refresh={refresh}
                           />
                        }
                     />
                  </div>

                  <div>
                     <button onClick={handleLogout} id="logout-button">
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
