import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../../context/Modal";
import { getEveryPostThunk } from "../../../store/posts";

export default function CreateAlbumModel({refresh, setRefresh}) {
    const { closeModal } = useModal();
    const [title, setTitle] = useState("");
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const titleObj = {
            title: title
        }

        const data = await fetch('/api/albums/new', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(titleObj),
        })
        dispatch(getEveryPostThunk())
        setRefresh(title)
        return closeModal()
    }
    return(<form onSubmit={handleSubmit}>
    <label>Album Title</label>
    <input
       type="text"
       name="title"
       placeholder="Title"
       value={title}
       onChange={(e) => setTitle(e.target.value)}
    />
    <button type="submit">Submit</button>
 </form>)
}