import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { getAllOwnerPostsThunk } from "../../../store/posts";

export default function GetPosts() {
    const user = useSelector((state) => state.session.user)
    const dispatch = useDispatch();
    const allPost = useSelector((state) => state.posts?.allPosts)

    console.log("🚀 ~ file: index.js:9 ~ GetPosts ~ allPost:", allPost)

    useEffect(() => {
        dispatch(getAllOwnerPostsThunk())

    }, [dispatch])

    return (

        <>
            <div>
                {allPost.map((post) => (

                    <img src={post.photoUrl} alt=""></img>

                ))}
            </div>

        </>


    )

}
