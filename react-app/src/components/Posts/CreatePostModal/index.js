import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createPostThunk } from "../../../store/posts";
import { useModal } from "../../../context/Modal";

export default function CreatePostModal({ setRefreshCreate }) {
   const { push } = useHistory();
   const dispatch = useDispatch();
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const [image, setImage] = useState(null);
   const [imageLoading, setImageLoading] = useState(false);
   const [errors, setErrors] = useState([]);
   const { closeModal } = useModal();

   const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("image", image);
      formData.append("title", title);
      formData.append("description", description);

      setImageLoading(true);
      const postData = await dispatch(createPostThunk(formData));

      setImage("");
      setTitle("");
      setDescription("");

      if (postData.errors === undefined || !postData.errors) {
         closeModal();
         setRefreshCreate(description);
         return push(`/posts/${postData.id}`);
      } else {
         setErrors(postData.errors);
      }

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
}
