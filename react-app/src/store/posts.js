//types

const GET_ALL_POSTS = "/get_all_posts";
const GET_POST_DETAILS = "/posts_details"
const DELETE_POST = "/delete_post"

//action creator

const actionGetPosts = (posts) => ({ type: GET_ALL_POSTS, posts });
const actionGetPostDetails = (post) => ({ type: GET_POST_DETAILS, post })
const actionDeletePost = (id) => ({ type: DELETE_POST, id })


//Thunks

//getAllPostsThunk
export const getAllPostsThunk = () => async (dispatch) => {
    const res = await fetch("/api/posts");

    if (res.ok) {
        const data = await res.json();
        dispatch(actionGetPosts(data));
        return data

    } else {
        const errors = await res.json();
        return errors;
    }
}

//getAllOwnerPosts Thunk
export const getAllOwnerPostsThunk = () => async (dispatch) => {
    const res = await fetch("/api/posts/current");

    if (res.ok) {
        const data = await res.json();
        dispatch(actionGetPosts(data));
        return data

    } else {
        const errors = await res.json();
        return errors;
    }
}

//getPostDetails Thunk
export const getPostDetailsThunk = (id) => async (dispatch) => {
    const res = await fetch(`api/post/${id}`)

    if (res.ok) {
        const data = await res.json();
        dispatch(actionGetPostDetails(data));
        return data

    } else {
        const errors = await res.json();
        return errors;
    }
}

//createPost Thunk - boilerplate code - revisit if problems arise
export const createPostThunk = (form) => async (dispatch) => {

    try {

        const res = await fetch("/api/posts/new", {
            method: "POST",
            body: form
        })

        if (res.ok) {
            const { resPost } = await res.json();
            dispatch(actionGetPostDetails(resPost));

        } else {
            console.log("There was an error making your post!")
        }


    } catch (error) {

        const data = await error.json();
        return data;
    }
}

//updatePost Thunk
export const updatePostThunk = (form) => async (dispatch) => {

    const res = await fetch(`/api/posts/${form.id}`, {
        method: "PUT",
        body: form
    })

    if (res.ok) {
        const { resPost } = await res.json();
        dispatch(actionGetPostDetails(resPost))

    } else {
        console.log("There was an error updating your post!")
    }
}

//deletePost Thunk
export const deletePostThunk = (id) => async (dispatch) => {

    const res = await fetch(`/api/posts/delete/${id}`, {
        method: "DELETE",
    })

    if (res.ok) {
        const { resPost } = await res.json();
        dispatch(actionDeletePost(resPost))

    } else {
        console.log("There was an error deleting your post!")
    }
}


//Reducer

const initialState = { allPosts: {}, singlePost: {} };

export default function postReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_ALL_POSTS:
            return { ...state, allPosts: action.posts }

        case GET_POST_DETAILS:
            return { ...state, [action.post.id]: action.post };

        case DELETE_POST:
            const newState = { ...state };
            delete newState[action.id];
            return newState;

        default:
            return state;
    }
}
