import {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {createPostThunkNoAlbums} from "../../../store/posts";
import {useModal} from "../../../context/Modal";
import "../../CSS/john.css";
import "./create-post.css";

export default function CreatePostModalNoAlbums() {
  const {push} = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const {closeModal} = useModal();
  const [validationObject, setValidationObject] = useState({});
  const [key, setKey] = useState(Date.now());

  const [selectedTag, setSelectedTag] = useState("");

  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("tag", selectedTag);

    setImageLoading(true);
    const postData = await dispatch(createPostThunkNoAlbums(formData));

    setImage(null);
    setTitle("");
    setDescription("");

    if (postData.errors === undefined || !postData.errors) {
      push("/userposts");
      return closeModal();
    } else {
      setImageLoading(false);
      setErrors(postData.errors);
      setKey(Date.now());
    }
  };

  useEffect(() => {
    const errorsObject = {};

    if (description.length < 10) {
      errorsObject.description = "Description must be more than 10 characters.";
    }

    setValidationObject(errorsObject);
  }, [description]);

  return (
    <div className="create-post-no-album-container">
      <h1 className="create-post-h1">Create a Post</h1>
      <form
        className="create-post-form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        {errors &&
          errors.length >= 1 &&
          errors.map((error, idx) => (
            <div className="create-post-errors" key={idx}>
              {error}
            </div>
          ))}
        <>
          <div className="div-file-section">
            <label className="style-file-upload">
              <input
                type="file"
                accept="image/*"
                className="hide-file-upload"
                onChange={(e) => setImage(e.target.files[0])}
                key={key}
              />
              Upload Image
            </label>
            <div>{image !== null ? image["name"] : "Choose Image"}</div>
          </div>

          <fieldset className="radio-buttons">
            <legend>Select a photo tag:</legend>

            <label>
              <input
                type="radio"
                value="nature"
                checked={selectedTag === "nature"}
                onChange={handleTagChange}
              />
              Nature
            </label>

            <label>
              <input
                type="radio"
                value="city"
                checked={selectedTag === "city"}
                onChange={handleTagChange}
              />
              City
            </label>

            <label>
              <input
                type="radio"
                value="art"
                checked={selectedTag === "art"}
                onChange={handleTagChange}
              />
              Art
            </label>

            <label>
              <input
                type="radio"
                value="people"
                checked={selectedTag === "people"}
                onChange={handleTagChange}
              />
              People
            </label>

            <label>
              <input
                type="radio"
                value="animals"
                checked={selectedTag === "animals"}
                onChange={handleTagChange}
              />
              Animals
            </label>

            <label>
              <input
                type="radio"
                value="events"
                checked={selectedTag === "events"}
                onChange={handleTagChange}
              />
              Events
            </label>

            <p>Selected Tag: {selectedTag}</p>
          </fieldset>
        </>

        <label>Title</label>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Description</label>
        <div className="error-box-post">
          {validationObject.description && (
            <p className="errors-one-post"> {validationObject.description}</p>
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
        {imageLoading && (
          <div aria-busy="true" aria-describedby="progress-bar">
            <progress
              id="progress-bar"
              aria-label="Content loading…"
            ></progress>
          </div>
        )}
      </form>
    </div>
  );
}
