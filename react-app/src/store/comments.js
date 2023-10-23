//types

const READ_COMMENTS = "/read_comment";
const CREATE_COMMENT = "/create_comment";
const UPDATE_COMMENT = "/update_comment";
const DELETE_COMMENT = "/delete_comment";

//action creator

const actionReadComments = (comment) => ({ type: READ_COMMENTS, comment });
const actionCreateComment = (comment) => ({ type: CREATE_COMMENT, comment });
const actionUpdateComment = (comment) => ({ type: UPDATE_COMMENT, comment });
const actionDeleteComment = (id) => ({ type: DELETE_COMMENT, id });

//thunks

//Get all Comments
export const getEveryCommentThunk = () => async (dispatch) => {
   const res = await fetch("/api/comments/all");
   console.log("🚀 ~ file: comments.js:20 ~ getEveryCommentThunk ~ res:", res);

   if (res.ok) {
      const data = await res.json();
      dispatch(actionReadComments(data));
      console.log(
         "🚀 ~ file: comments.js:26 ~ getEveryCommentThunk ~ data:",
         data
      );
      return data;
   } else {
      const errors = await res.json();
      console.log(
         "🚀 ~ file: comments.js:29 ~ getEveryCommentThunk ~ errors:",
         errors
      );
      return errors;
   }
};

// Create Comment
export const createCommentThunk = (postId, comment) => async (dispatch) => {
   const response = await fetch(`/api/posts/${postId}/comments/new`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
   });

   const data = response;
   dispatch(actionCreateComment(data));
   return data;
};

// Delete Comment
export const deleteCommentThunk = (commentId) => async (dispatch) => {
   console.log(
      "🚀 ~ file: comments.js:43 ~ deleteCommentThunk ~ commentId):",
      commentId
   );
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
         console.log(
            "🚀 ~ file: comments.js:81 ~ commentsReducer ~ action:",
            action
         );
         return newState;

      case DELETE_COMMENT:
         newState = { ...state, allComments: { ...state.allComments } };
         delete newState.allComments[action.id];
         console.log(
            "🚀 ~ file: comments.js:68 ~ commentsReducer ~ action:",
            action
         );
         return newState;

      default:
         return state;
   }
}
