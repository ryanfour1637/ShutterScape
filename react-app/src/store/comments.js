//types

const READ_COMMENTS = "/read_comment";
const ADD_ONE_COMMENT = "/add_one_comment";
// const UPDATE_COMMENT = "/update_comment";
const DELETE_COMMENT = "/delete_comment";

//action creator

const actionReadComments = (comment) => ({ type: READ_COMMENTS, comment });
// const actionUpdateComment = (comment) => ({ type: UPDATE_COMMENT, comment });
const actionDeleteComment = (id) => ({ type: DELETE_COMMENT, id });
const actionAddOneComment = (comment) => ({ type: ADD_ONE_COMMENT, comment });

//thunks

//Get all Comments
export const getEveryCommentThunk = () => async (dispatch) => {
   const res = await fetch("/api/comments/all");
   if (res.ok) {
      const data = await res.json();
      dispatch(actionReadComments(data));
      return data;
   } else {
      const errors = await res.json();
      return errors;
   }
};

//Get One Comment
// export const getOneCommentThunk = (postId) => async (dispatch) => {
//    const res = await csrfFetch(`/api/spots/${spotId}/reviews`);

//    if (res.ok) {
//       const data = await res.json();
//       dispatch(actionReadReviewsOneSpot(data.Reviews));
//       return data;
//    } else {
//       const errors = await res.json();
//       return errors;
//    }
// };

// Create Comment
export const createCommentThunk = (postId, comment) => async (dispatch) => {
   const response = await fetch(`/api/comments/new/posts/${postId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
   });

   if (response.ok) {
      const data = await response.json();

      console.log("this is the data", data.comment);
      dispatch(actionAddOneComment(data.comment));
      return data;
   } else {
      const errors = await response.json();
      return errors;
   }
};

// Update/Edit Comment
export const updateCommentThunk = (comment, commentId) => async (dispatch) => {
   const response = await fetch(`/api/comments/${commentId}/update/posts/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
   });

   if (response.ok) {
   } else {
      const errors = response.json();
      return errors;
   }
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

const initialState = { allComments: {} };

export default function commentsReducer(state = initialState, action) {
   let newState;
   switch (action.type) {
      case READ_COMMENTS:
         newState = { ...state, allComments: {} };
         action.comment.forEach((com) => (newState.allComments[com.id] = com));
         return newState;
      case ADD_ONE_COMMENT:
         console.log(state.allComments);
         newState = {
            ...state,
            allComments: { ...state.allComments },
         };
         newState.allComments[action.comment.id] = action.comment;
         return newState;
      case DELETE_COMMENT:
         newState = { ...state, allComments: { ...state.allComments } };
         delete newState.allComments[action.id];
         return newState;

      default:
         return state;
   }
}
