//types

const GET_ALL_POSTS = "/get_all_posts";
const GET_POST_DETAILS = "/post_details";
const DELETE_POST = "/delete_post";

//action creator

const actionGetPosts = (posts) => ({ type: GET_ALL_POSTS, posts });
const actionGetPostDetails = (post) => ({ type: GET_POST_DETAILS, post });
const actionDeletePost = (id) => ({ type: DELETE_POST, id });

//Thunks

//getAllPostsThunk
export const getAllPostsThunk = () => async (dispatch) => {
   const res = await fetch("/api/posts");

   if (res.ok) {
      const data = await res.json();
      dispatch(actionGetPosts(data));
      return data;
   } else {
      const errors = await res.json();
      return errors;
   }
};

//getAllOwnerPosts Thunk
export const getAllOwnerPostsThunk = () => async (dispatch) => {
   const res = await fetch("/api/posts/current");
   console.log("🚀 ~ file: posts.js:34 ~ getAllOwnerPostsThunk ~ res:", res);

   if (res.ok) {
      const data = await res.json();
      console.log(
         "🚀 ~ file: posts.js:39 ~ getAllOwnerPostsThunk ~ data:",
         data
      );
      dispatch(actionGetPosts(data));
      return data;
   } else {
      const errors = await res.json();
      return errors;
   }
};

//getPostDetails Thunk
export const getPostDetailsThunk = (id) => async (dispatch) => {
   const res = await fetch(`/api/posts/${id}`);

   console.log("🚀 ~ file: posts.js:53 ~ getPostDetailsThunk ~ res:", res);

   if (res.ok) {
      const data = await res.json();
      dispatch(actionGetPostDetails(data));
      return data;
   } else {
      const errors = await res.json();
      return errors;
   }
};

//createPost Thunk - boilerplate code - revisit if problems arise
export const createPostThunk = (form) => async (dispatch) => {
   try {
      const res = await fetch("/api/posts/new", {
         method: "POST",
         body: form,
      });

      if (res.ok) {
         const { resPost } = await res.json();
         dispatch(actionGetPostDetails(resPost));
      } else {
         console.log("There was an error making your post!");
      }
   } catch (error) {
      const data = await error.json();
      return data;
   }
};

//updatePost Thunk
export const updatePostThunk = (form) => async (dispatch) => {
   const res = await fetch(`/api/posts/${form.id}`, {
      method: "PUT",
      body: form,
   });

   if (res.ok) {
      const { resPost } = await res.json();
      dispatch(actionGetPostDetails(resPost));
   } else {
      console.log("There was an error updating your post!");
   }
};

//deletePost Thunk
export const deletePostThunk = (id) => async (dispatch) => {
   console.log("are we getting the id in the thunk", id);
   const res = await fetch(`/api/posts/delete/${id}`, {
      method: "DELETE",
   });

   console.log("THIS IS RES", res);
   if (res.ok) {
      dispatch(actionDeletePost(id));
   } else {
      console.log("There was an error deleting your post!");
   }
};

//Reducer

const initialState = { allPosts: {}, singlePost: {} };

export default function postReducer(state = initialState, action) {
   let newState;
   switch (action.type) {
      case GET_ALL_POSTS:
         newState = { ...state, allPosts: {} };
         action.posts.forEach((post) => (newState.allPosts[post.id] = post));
         return newState;

      case GET_POST_DETAILS:
         newState = { ...state, singlePost: action.post };
         return newState;

      case DELETE_POST:
         newState = { ...state, allPosts: { ...state.allPosts } };
         delete newState.allPosts[action];
         return newState;

      default:
         return state;
   }
}
