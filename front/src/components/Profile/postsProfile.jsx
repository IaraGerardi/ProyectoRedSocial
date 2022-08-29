import { useState, useEffect } from "react";
import axios from 'axios';
import Post from "../Home/components-Home/Post";
import Posts from "../Home/components-Home/Posts";
// Traer los posts del back

/* A los posts hay que pasarles la foto de perfil, nombre de usuario, el texto del post, y hace algo con los likes que tengo que ver bien, cambia en el estado teoricamente pero no se si se pasa al back */

// https://jsonplaceholder.typicode.com/posts


function PostsProfile() {
    const [comments, setComments] = useState('')
    const URI = 'http://localhost:8000/';

    const getUsers = async () => {
        const res = await axios.get(URI)
        setComments(res.data)
    };
    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            <Posts />
        </>
    );
}

export default PostsProfile;