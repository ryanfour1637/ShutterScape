import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../../context/Modal";
import { getEveryPostThunk } from "../../../store/posts";

export default function DeleteAlbumModel({ id }) {
    const {closeModal} = useModal()
    const { push } = useHistory()


async function deleteAlbum() {
    const res = await fetch(`/api/albums/${id}`, {
        method: "DELETE"
    })
    const data = await res.json()
    closeModal()
    return push('/albums')
}

    return(<div id="delete-album-modal-container">
    <h1>Confirm Delete</h1>
    <div>Are you sure you want to remove this post?</div>
    <button
       id="delete-album-modal-button"
       className="action-button"
       onClick={async () => deleteAlbum()}
    >
       Yes (Delete Album)
    </button>
    <button id="keep-album" onClick={closeModal}>
       No (Keep Album)
    </button>
 </div>)
}