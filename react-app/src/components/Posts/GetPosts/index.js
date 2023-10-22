import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { getAllOwnerPostsThunk } from "../../../store/posts";

export default function GetPosts() {
    const user = useSelector((state) => state.session.user)
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.allPosts)

    console.log("🚀 ~ file: index.js:9 ~ GetPosts ~ posts:", posts)

    useEffect(() => {
        dispatch(getAllOwnerPostsThunk())

    }, [dispatch])

    if (!posts.length) return null;

    return (

        <>
            <h1>Get Current</h1>
            <div>
                {posts.map((post) => (

                    <img src={post.photoUrl} alt=""></img>

                ))}
            </div>
        </>


    )

}
