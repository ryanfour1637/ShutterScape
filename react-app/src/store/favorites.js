// types

const GET_ONE_FAVORITE = "/get-one-favorite"
const GET_ALL_FAVORITES = "/get-all-favorites"
const DELETE_FAVORITE = "/delete-favorite"


// action creators
const actionGetOneFavorite = (favId) => ({ type: GET_ONE_FAVORITE, favId });
const actionGetAllFavorites = (favorites) => ({ type: GET_ALL_FAVORITES, favorites });
const actionDeleteFavorite = (favId) => ({ type: DELETE_FAVORITE, favId });


// thunks

export const thunkGetOneFavorite = (favId) => async (dispatch) => {

    const res = await fetch(`/api/favorites/${favId}`);

    if (res.ok) {
        const data = await res.json();
        dispatch(actionGetOneFavorite(data));
        return data;
     } else {
        const errors = await res.json();
        return errors;
     }
}

export const thunkGetAllFavorites = () => async (dispatch) => {

    const res = await fetch("/api/favorites");

    if (res.ok) {
        const data = await res.json();
        dispatch(actionGetAllFavorites(data));
        return data;
     } else {
        const errors = await res.json();
        return errors;
     }
}

export const thunkDeleteFavorite = (favId) => async (dispatch) => {

    const res = await fetch(`/api/favorites/${favId}`)

    if (res.ok) {
        const data = await res.json();
        dispatch(actionDeleteFavorite(data));
        return data;
     } else {
        const errors = await res.json();
        return errors;
     }
}


// reducer

const initialState = { favorites: {} };

export default function favesReducer(state = initialState, action) {

    let newState;

    switch (action.type) {

        case GET_ONE_FAVORITE:
            newState = { ...state, favorites: action.favorite };
            return newState;

        case GET_ALL_FAVORITES:
            newState = { ...state, favorites: {}}
            action.favorites.forEach((favorite) => (newState.favorites[favorite.id] = favorite));
            return newState;

        case DELETE_FAVORITE:
            newState = { ...state, favorites: { ...state.favorites }};
            delete newState.favorites[action];
            return newState;

        default:
            return state;
    }
}
