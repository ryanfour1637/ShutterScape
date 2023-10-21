import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllPostsThunk } from "../../store/posts";

export default function Home() {
    const dispatch = useDispatch();
    const allPost = Object.values(useSelector((state) => (state)))

    console.log("allPosts%%%%%%%%%", allPost)
    useEffect(() => {
        dispatch(getAllPostsThunk)
    }, [dispatch])

    return (
        <h1>Home Page</h1>
    )
}
