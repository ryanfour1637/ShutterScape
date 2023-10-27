//types

const GET_ALL_POSTS = "/get_all_posts";
const GET_POST_DETAILS = "/post_details";
const DELETE_POST = "/delete_post";
const GET_NINE_POSTS = "/get_nine_posts"

//action creator

const actionGetPosts = (posts) => ({type: GET_ALL_POSTS, posts});
const actionGetPostDetails = (post) => ({type: GET_POST_DETAILS, post});
const actionDeletePost = (id) => ({type: DELETE_POST, id});
const actionGetNinePosts = (posts) => ({type: GET_NINE_POSTS, posts});

//Thunks

//getAllPostsThunk
export const getTenRandomPostsThunk = () => async (dispatch) => {
  const res = await fetch("/api/posts");

  if (res.ok) {
    const data = await res.json();
    dispatch(actionGetNinePosts(data))
    return data;
  } else {
    const errors = await res.json();
    return errors;
  }
};

//getAllOwnerPosts Thunk
export const getNineRandomNonOwnerPosts = () => async (dispatch) => {
  const res = await fetch("/api/posts/current");
  if (res.ok) {
    const data = await res.json();
    dispatch(actionGetNinePosts(data))
    return data;
  } else {
    const errors = await res.json();
    return errors;
  }
};

export const getEveryPostThunk = () => async (dispatch) => {
  const res = await fetch("/api/posts/all");
  if (res.ok) {
    const data = await res.json();
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
  if (res.ok) {
    const data = await res.json();
    dispatch(actionGetPostDetails(data));
    return data;
  } else {
    const errors = await res.json();
    return errors;
  }
};

//createPost Thunk
export const createPostThunk = (form) => async (dispatch) => {
  const res = await fetch("/api/posts/new", {
    method: "POST",
    body: form,
  });

  if (res.ok) {
    const {resPost} = await res.json();
    dispatch(actionGetPostDetails(resPost));
    return resPost;
  } else {
    const data = await res.json();
    return data;
  }
};

//createPostNoAlbums Thunk
export const createPostThunkNoAlbums = (form) => async (dispatch) => {
  const res = await fetch("/api/posts/no_album", {
    method: "POST",
    body: form,
  });

  if (res.ok) {
    const {resPost} = await res.json();
    dispatch(actionGetPostDetails(resPost));
    return resPost;
  } else {
    const data = await res.json();
    return data;
  }
};

//updatePost Thunk
export const updatePostThunk = (form, postId) => async (dispatch) => {
  try {
    const res = await fetch(`/api/posts/update/${postId}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(form),
    });

    if (res.ok) {
      const resPost = await res.json();
      return resPost;
    } else {
      return {errors: "There was an error updating your post"};
    }
  } catch (error) {
    const data = await JSON.stringify(error);
    return data;
  }
};

//deletePost Thunk
export const deletePostThunk = (id) => async (dispatch) => {

  const res = await fetch(`/api/posts/delete/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(actionDeletePost(id));
  } else {
    return {"errors": "There was an error deleting your post!"};
  }
};

//Reducer

const initialState = {allPosts: {}, ninePosts: {}};

export default function postReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ALL_POSTS:
      newState = {...state, allPosts: {}};
      action.posts.forEach((post) => (newState.allPosts[post.id] = post));
      return newState;

    case GET_POST_DETAILS:
      newState = {...state, allPosts: {...state.allPosts}};
      newState.allPosts[action.post.id] = action.post;
      return newState;

    case DELETE_POST:
      newState = {...state, allPosts: {...state.allPosts}};
      delete newState.allPosts[action.id];
      return newState;

    case GET_NINE_POSTS:
      newState = { ...state, ninePosts: {...action.posts}}
      return newState;

    default:
      return state;
  }
}
