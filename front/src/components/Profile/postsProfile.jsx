import { useState, useEffect } from "react";
import axios from 'axios';
import Post from "../Home/components-Home/Post";
import Posts from "../Home/components-Home/Posts";



function PostsProfile({currentUser}) {
    const [comments, setComments] = useState('')
    const URI = 'http://localhost:8000/';

    const getUsers = async () => {
        const res = await axios.get(URI)
        setComments(res.data)
    };

    const commentList = comments.filter(comments.userID == currentUser.id)

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
        {commentList.map(comment=><Post comment={comment}/>)}
        </>
    );
}

export default PostsProfile;