import { useState, useEffect } from "react";
import axios from 'axios';
import Post from "../Home/components-Home/Post";

function PostsProfile(/*{ currentUser }*/) {
    const [posts, setPosts] = useState([])
    const URI = 'http://localhost:8000/home';

    const getUsers = async () => {
        const res = await axios.get(URI)
        setPosts(res.data)
    };

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <ul className="postListProfile">
            {posts?.map((el, posts) => <li key={posts.id}>
                {el.usersId == 2 ?
                    <Post postData={el} id={el.id} textPostProp={el.content} commentsProp={el.comments} />
                    : null}
            </li>)}
        </ul>
    );
}

export default PostsProfile;