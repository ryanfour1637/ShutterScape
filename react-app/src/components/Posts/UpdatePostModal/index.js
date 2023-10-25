import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getEveryPostThunk, getPostDetailsThunk, updatePostThunk } from "../../../store/posts";
import { useModal } from "../../../context/Modal";
import "../../CSS/john.css"

export default function UpdatePostModal({ postId }) {
  const { push } = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  useEffect(() => {

    dispatch(getPostDetailsThunk(postId))
      .then(data => {
        setTitle(data.title)
        setDescription(data.description)
        setImage(data.photoUrl)
      })

  }, [postId])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {

      title,
      description,
    }

    const postData = await dispatch(updatePostThunk(formData, postId));


    if (!Object.values(postData).includes("errors")) {
      closeModal()
      return dispatch(getEveryPostThunk());

    } else {
      setErrors(postData.errors);
    }

  };

  return (
    <div className="update-post-container">
      <h1 className="Updatepost">Update Post</h1>
      <form onSubmit={handleSubmit}>
        <label style={{ fontFamily: 'Proxima Nova,helvetica neue,helvetica,arial,sans-serif' }}>Title</label>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label style={{ fontFamily: 'Proxima Nova,helvetica neue,helvetica,arial,sans-serif' }}>Description</label>
        <textarea
          type="text"
          className="update-post-text-area"
          name="description"
          placeholder="Please write at least 10 characters"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="submit-update-post" type="submit">Submit</button>
      </form>
    </div>
  );
}
