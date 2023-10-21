

//types

const GET_ALL_POSTS = "/get_all_posts";
const GET_ALL_POSTS_OF_CURRENT_USER = "/get_all_posts_of_user";
const GET_POST_DETAILS = "/posts_details"
const CREATE_POST = "/create_post"
const DELETE_POST = "/delete_post"
const UPDATE_POST = "/update_post"

//action creator

const actionGetPosts = (posts) => ({ type: GET_ALL_POSTS, posts });
const actionGetAllOwnerPosts = (posts) => ({ type: GET_ALL_POSTS_OF_CURRENT_USER, posts });
const actionGetPostDetails = (post) => ({ type: GET_POST_DETAILS, post })
const actionCreatePost = (post) => ({ type: CREATE_POST, post })
const actionDeletePost = (id) => ({ type: DELETE_POST, id })

//Thunks

//getAllPostsThunk
export const getAllPostsThunk = () => async (dispatch) => {
    const res = await fetch("/api/posts/");
    console.log("INSIDETHUNK%%%%%%%")
    if (res.ok) {
        const { Posts } = await res.json();
        dispatch(actionGetPosts(Posts));
        console.log("POSTS%%%%%%%", Posts)
        return Posts
    } else {
        const errors = await res.json();
        return errors;
    }
}



//Reducer

const initialState = { allPosts: {}, singlePost: {} };

export default function postReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_ALL_POSTS:
            return { ...state, allPosts: action.posts }
        default:
            return state;
    }
}
