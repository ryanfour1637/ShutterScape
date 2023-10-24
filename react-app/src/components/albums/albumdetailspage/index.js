import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getEveryPostThunk } from "../../../store/posts";
import { NavLink, Link } from "react-router-dom";
import { useModal } from "../../../context/Modal";
import OpenModalButton from "../../OpenModalButton";
import CreateAlbumModel from "../createnewalbummodel";


export default function AlbumDetailsPage() {
    const dispatch = useDispatch()
    const { setModalContent, setOnModalClose } = useModal();
    const [refresh, setRefresh] = useState("")

    const allPosts = useSelector((state) => state.posts.allPosts)
    
    const user = useSelector((state) => state.session.user)
    let userId

    if (user) {
        userId = user.id
    }
   
    const albumArray = []
    console.log("🚀 ~ file: index.js:27 ~ AlbumDetailsPage ~ user.albums:", user.albums)
    user.albums.forEach((album) => albumArray.push(album))
    console.log("🚀 ~ file: index.js:26 ~ AlbumDetailsPage ~ albumArray:", albumArray)

    const usersAlbumArray = []

    // while (albumArray.length) {
    //    const filteredPosts = allPosts.filter((post) => albumArray[0].id == post.albumId)
    //    if (filteredPosts)
    // }



  
//     while (setArray.length) {
//         userPostsFiltered.forEach((post) => {
//             if (setArray[0] == post.albumId)
//             usersAlbumArray.push(post)
//         setArray.shift()
//     })
// }

    
    useEffect(() => {
        dispatch(getEveryPostThunk())
    }, [dispatch])

if (!allPosts) return null
if (!user) return null
    return (<div>
        <h1>Album Details Page</h1>
        <div>
                  <OpenModalButton
                     buttonText="Create New Album"
                     modalComponent={<CreateAlbumModel refresh={refresh} setRefresh={setRefresh}/>}
                  />
               </div>
        <div className="albumMapping"> {albumArray.map((album) => (
            <div>
            <Link to='posts/current'>
            <div className="albumImageTitleContainer">
            <div><img className="testIMG" key={album.id} src="https://www.seekpng.com/png/full/346-3460840_add-camera-icon-icon-add.png"></img></div>
            <div>{album.title}</div>
            </div>
            </Link>
            </div>
        ))}</div>
    </div>)
}