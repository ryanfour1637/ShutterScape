//types

const CREATE_COMMENT = "/create_comment";
const UPDATE_COMMENT = "/update_comment";
const DELETE_COMMENT = "/delete_comment";

//action creator

const actionCreateComment = (comment) => ({type: CREATE_COMMENT, comment});
const actionUpdateComment = (comment) => ({type: UPDATE_COMMENT, comment});
const actionDeleteComment = (id) => ({type: DELETE_COMMENT, id});

//thunks

// Create Comment
export const createCommentThunk = (postId, comment) => async (dispatch) => {
  const response = await fetch(`/api/posts/${postId}/comments`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(comment),
  });

  const data = response;
  dispatch(actionCreateComment(data));
  return data;
};

// Update/Edit Comment
export const updateCommentThunk = (postId, comment) => async (dispatch) => {
  const response = await fetch(`/api/posts/${postId}/comments`, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(comment),
  });

  const data = response;
  dispatch(actionCreateComment(data));
  return data;
};

// Delete Comment
export const deleteCommentThunk = (commentId) => async (dispatch) => {
  const response = await fetch(`/api/comments/${commentId}`, {
    method: "DELETE",
  });

  const data = response.json();
  dispatch(actionDeleteComment(commentId));
  return data;
};

// Reducer

const initialState = { comments: {} };

export default function commentsReducer(state = initialState, action) {
   let newState;
   switch (action.type) {

      case CREATE_COMMENT:
         newState = { ...state, comments: action.comment };
         return newState;

      case DELETE_COMMENT:
         newState = { ...state, comments: { ...state.comments } };
         delete newState.comments[action];
         return newState;

      default:
         return state;
   }
}
