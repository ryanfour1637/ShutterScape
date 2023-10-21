import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllPostsThunk } from "../../store/posts";

export default function Home() {
    const dispatch = useDispatch();
    const allPost = useSelector((state) => state.posts.allPosts)

    console.log("🚀 ~ file: index.js:8 ~ Home ~ allPost:", allPost)

    useEffect(() => {
        dispatch(getAllPostsThunk())
    }, [dispatch])

    return (
        <h1>Home Page</h1>
    )
}
