import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams, useHistory} from "react-router-dom";
import {getEveryPostThunk} from "../../../store/posts";
import UserBanner from "../../UserBanner";

export default function AllUserPostsPage() {
  const {id} = useParams();
  const {push} = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const all_posts = useSelector((state) => state.posts.allPosts);
  const postsArr = Object.values(all_posts)

  useEffect(() => {
    dispatch(getEveryPostThunk());
  }, [dispatch]);


  return (
    <div>
      <UserBanner />
      <div className="allposts-parent-container">
        <div className="allposts-photos">
          {postsArr &&
            postsArr.map((singlepost) =>
              singlepost.ownerId === user.id ? (
                <div key={singlepost.id}>
                  <img src={singlepost.photoUrl} alt={singlepost.title} />
                </div>
              ) : null
            )}
        </div>
        <div className="allposts-account-details">
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
}
