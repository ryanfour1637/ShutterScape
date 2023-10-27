import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createPostThunkNoAlbums } from "../../../store/posts";
import { useModal } from "../../../context/Modal";
import "../../CSS/john.css";

export default function CreatePostModalNoAlbums() {

   const { push } = useHistory();
   const dispatch = useDispatch();
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const [image, setImage] = useState(null);
   const [imageLoading, setImageLoading] = useState(false);
   const [errors, setErrors] = useState([]);
   const { closeModal } = useModal();
   const [validationObject, setValidationObject] = useState({});

   const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("image", image);
      formData.append("title", title);
      formData.append("description", description);

      setImageLoading(true);
      const postData = await dispatch(createPostThunkNoAlbums(formData));

      setImage("");
      setTitle("");
      setDescription("");

      if (postData.errors === undefined || !postData.errors) {
         // return push(`/posts/${postData.id}`);
         
         return closeModal();
      } else {
         setErrors(postData.errors);
      }

      push("/posts/current");
   };

   useEffect(() => {
      const errorsObject = {};

      if (description.length < 10) {
         errorsObject.description =
            "Description must be more than 10 characters.";
      }

      setValidationObject(errorsObject);
   }, [description]);

   return (
      <div>
         <h1 className="create-post-h1">Create a Post</h1>
         <form
            className="create-post-form"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
         >
            <input
               type="file"
               accept="image/*"
               className="file-upload"
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
            <div className="error-box-post">
               {validationObject.description && (
                  <p className="errors-one-post">
                     {" "}
                     {validationObject.description}
                  </p>
               )}
            </div>
            <textarea
               type="text"
               name="description"
               placeholder="Please write at least 10 characters"
               value={description}
               onChange={(e) => setDescription(e.target.value)}
            />

            <button
               className="create-post-submit"
               type="submit"
               disabled={Object.keys(validationObject).length > 0}
            >
               Submit
            </button>
            {imageLoading && <p>Loading...</p>}
         </form>
      </div>
   );
}
