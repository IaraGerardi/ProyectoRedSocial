import { useState, useEffect } from "react";
import axios from 'axios';
import Post from "../Home/components-Home/Post";
import Posts from "../Home/components-Home/Posts";



function PostsProfile({ currentUser }) {
    const [posts, setPosts] = useState([])
    const URI = 'http://localhost:8000/home';

    const getUsers = async () => {
        const res = await axios.get(URI)
        setPosts(res.data)
    };
    const postsList = posts.filter(post => post.usersID === 2)

    console.log(postsList)

    useEffect(() => {
        getUsers()
    }, [])
    console.log(postsList)
    return (
        <>
            {postsList.map(post => <Post postData={post} />)}
        </>
    );
}

export default PostsProfile;