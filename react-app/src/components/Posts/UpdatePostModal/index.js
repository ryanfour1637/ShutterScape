import {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import { getPostDetailsThunk, updatePostThunk } from "../../../store/posts";
import { useModal } from "../../../context/Modal";

export default function UpdatePostModal({postId}) {
  const {push} = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  useEffect(() => {

    dispatch(getPostDetailsThunk(postId))
    .then(data => {
        setTitle(data.title)
        setDescription(data.description)
    })

  }, [postId])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {

        title,
        description
    }

    const postData = await dispatch(updatePostThunk(formData, postId));
    console.log("🚀 ~ file: index.js:35 ~ handleSubmit ~ postData:", postData)

    if (postData.errors === undefined || !postData.errors) {
      closeModal()
      return push(`/posts/${postData.id}`)

    } else {
      setErrors(postData.errors);
    }

    push("/posts/current");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Description</label>
      <textarea
        type="text"
        name="description"
        placeholder="Please write at least 10 characters"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
