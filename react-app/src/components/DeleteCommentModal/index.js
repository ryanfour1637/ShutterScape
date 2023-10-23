import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { deleteCommentThunk } from "../../store/comments";
import { useParams, useHistory } from "react-router-dom";

export default function DeleteCommentModal({ commentId }) {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const [errors, setErrors] = useState({});
    const { push } = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors({});

        return dispatch(deleteCommentThunk(commentId))
            .then(closeModal)
            .catch(async (res) => {
                const data = await res.json();

                if (data.errors) {
                    setErrors(data.errors);
                } else {
                }
            })
            .then(push("/"));
    };

    return (
        <div id="delete-comment-modal-container">
            <h1>Confirm Delete</h1>
            <div>Are you sure you want to remove this comment?</div>
            <button
                id="delete-comment-modal-button"
                className="action-button"
                onClick={handleSubmit}
            >
                Yes (Delete comment)
            </button>
            <button id="keep-comment" onClick={closeModal}>
                No (Keep comment)
            </button>
        </div>
    );
}
