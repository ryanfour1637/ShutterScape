import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../../context/Modal";
import { getEveryPostThunk } from "../../../store/posts";
import { thunkCreateAlbum, thunkGetAllAlbums} from "../../../store/albums";

export default function CreateAlbumModel() {
   const { closeModal } = useModal();
   const [title, setTitle] = useState("");
   const [errors, setErrors] = useState([]);
   const dispatch = useDispatch();
   const { push } = useHistory();

   useEffect(() => {}, [dispatch]);

   const handleSubmit = async (e) => {
      e.preventDefault();

      const titleObj = {
         title: title,
      };

      const res = await dispatch(thunkCreateAlbum(titleObj))
      if (res.errors === undefined || !res.errors) {
         setTitle("");
         closeModal();
         dispatch(thunkGetAllAlbums());
         return push(`/albums/${res.id}`);
      } else {
         setErrors(res.errors);
      }
   };
   
   return (
      <form onSubmit={handleSubmit}>
         <label>Album Title</label>
         <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
         />
         <button type="submit">Submit</button>
      </form>
   );
}
