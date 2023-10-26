const GET_ALBUMS = "/get_albums"
const ADD_ONE_ALBUM = "/add_one_album"
const DELETE_ALBUM = "/delete_album"

const actionGetAllAlbums = (albums) => ({type: GET_ALBUMS, albums});
const actionAddOneAlbum = (album) => ({type: ADD_ONE_ALBUM, album})
const actionDeleteAlbum = (id) => ({type: DELETE_ALBUM, id})

export const thunkCreateAlbum = (album) => async (dispatch) => {
    const res = await fetch("/api/albums/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(album),
     });
     if (res.ok) {
         const data = await res.json();
         dispatch(actionAddOneAlbum(data))
         return data
     } else {
        const errors = await res.json()
        return errors
     }
}

export const thunkDeleteAlbum = (id) => async (dispatch) => {
    const res = await fetch(`/api/albums/${id}`, {
        method: "DELETE",
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(actionDeleteAlbum(id))
        return data
    } else {
        const errors = await res.json()
        return errors
    }
        
    
}

export const thunkGetAllAlbums = () => async (dispatch) => {
    const res = await fetch('/api/albums/all')
    if (res.ok) {
        const data = await res.json();
        dispatch(actionGetAllAlbums(data))
        return data
    } else {
        const errors = await res.json()
        return errors
    }
}

const initialState = { allAlbums: {} };

export default function albumsReducer(state = initialState, action) {
   let newState;
   switch (action.type) {
        case GET_ALBUMS:
            newState = { ...state, allAlbums: {} };
         action.albums.forEach((album) => (newState.allAlbums[album.id] = album));
         return newState;
        case ADD_ONE_ALBUM:
            newState = {
                ...state,
                allAlbums: { ...state.allAlbums },
             };
             newState.allAlbums[action.album.id] = action.album;
             return newState;
        case DELETE_ALBUM:
            newState = { ...state, allAlbums: { ...state.allAlbums } };
            delete newState.allAlbums[action.id];
            return newState;
        default:
            return state;
   }
}