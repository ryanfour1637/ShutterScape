import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import UserBanner from "./components/UserBanner";
import AllUserPostsPage from "./components/Posts/AllUserPostsPage";
import CreatePostModal from "./components/Posts/CreatePostModal";
import GetPosts from "./components/Posts/GetPosts";
import PostDetailsPage from "./components/Posts/PostDetailsPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import Home from "./components/Home"
import AlbumDetailsPage from "./components/albums/albumdetailspage";
import Footer from "./components/Footer";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <>
          <Switch>
            <Route exact path="/userposts">
              <AllUserPostsPage />
            </Route>
            <Route exact path="/login">
              <LoginFormPage />
            </Route>
            <Route exact path="/signup">
              <SignupFormPage />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/posts/new">
              <CreatePostModal />
            </Route>
            <Route exact path="/posts/current">
              <GetPosts />
            </Route>
            <Route exact path="/posts/:id">
              <PostDetailsPage />
            </Route>
            <Route exact path="/albums">
            <AlbumDetailsPage />
            </Route>
            <Route>Page Not Found</Route>
          </Switch>
          <Footer />
        </>

      )}
    </>
  );
}

export default App;
