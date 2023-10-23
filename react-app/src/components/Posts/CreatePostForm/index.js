import {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import { createPostThunk } from "../../../store/posts";

export default function CreatePostForm() {
  const {push} = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  console.log("🚀 ~ file: index.js:12 ~ CreatePostForm ~ image:", image)


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    // aws uploads can be a bit slow—displaying
    // some sort of loading message is a good idea
    setImageLoading(true);
    console.log("🚀 ~ file: index.js:20 ~ handleSubmit ~ formData:", formData)
    await dispatch(createPostThunk(formData));

    setImage("")
    setTitle("")
    setDescription("")

    push("/posts/current");
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />

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
      {imageLoading && <p>Loading...</p>}
    </form>
  );

  //   return (
  //     <>
  //       <h1>Create Post Form</h1>

  //       <form className="create-post-form" onSubmit={onSubmit}>
  //         <label>Title</label>
  //         <input
  //           type="text"
  //           name="title"
  //           placeholder="Title"
  //           value={title}
  //           onChange={(e) => setTitle(e.target.value)}
  //         />

  //         <label>Description</label>
  //         <textarea
  //           type="text"
  //           name="description"
  //           placeholder="Please write at least 10 characters"
  //           value={description}
  //           onChange={(e) => setDescription(e.target.value)}
  //         />
  //       </form>
  //     </>
  //   );
}
