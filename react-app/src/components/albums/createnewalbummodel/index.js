import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../../context/Modal";
import { getEveryPostThunk } from "../../../store/posts";

export default function CreateAlbumModel({refresh, setRefresh}) {
    const { closeModal } = useModal();
    const [title, setTitle] = useState("");
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch()
    const {push} = useHistory()

    useEffect(() => {
        
    }, dispatch)

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
        const response = await data.json()
        console.log("🚀 ~ file: index.js:30 ~ handleSubmit ~ ***********", response)
        if (data.errors === undefined || !data.errors) {
            setRefresh(`${title}`)
            setTitle("")
            closeModal()
            dispatch(() => getEveryPostThunk())
        return push(`/albums/${response.id}`)
        } else {
            setErrors(data.errors)
        }
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