import React, { useState, useEffect } from "react";

import ProfileInfo from "./profile-info";
import ConfigureUser from "./popUpForm";
import Menu from "../Home/components-Home/Menu";
// import Posts from "../Home/components-Home/Posts";
import ProfileInfoEdit from "./profileInfoEdit";
// import Post from "../Home/components-Home/Post";
import "./css/profile.css"
import './css/popUpForm.css'
import { useParams } from "react-router-dom"
import axios from 'axios';
import PostsProfile from "./postsProfile";
// Profile es el componente que contiene todos los componentes que forman la vista del perfil, y es el componente que renderiza react router en la ruta de "/user"

// Los estilos de profile, profile info y edit user cuando el padre es profile estan en profile.css
// Si centralizamos los pop ups en editprofile tengo que cambiarle el nombre al archivo y crear un css aparte para eso


function Profile() {

    const [edit, setEdit] = useState(false);
    const [configure, setConfigure] = useState(false);
    const [currentUser, setCurrentUser] = useState('');
    let { user } = useParams();

    const URI = `http://localhost:8000/profile/${user}`;

    const getUsers = async () => {
        const res = await axios.get(URI)
        setCurrentUser(res.data)
    };
    useEffect(() => {
        getUsers()
    }, [])
    
    // console.log(configure)
    // console.log(currentUser);

    return (
        <div className='profileView'>
            <Menu view='profile'/>
            <div className='mainProfileContainer'>
                {/* ProfileInfoEdit deberia poder editar la parte mas estetica de perfil (foto header/avatar, nickname, descripcion, etc) */}
                {edit ?
                    <ProfileInfoEdit setEdit={setEdit} userInfo={currentUser} /> :
                    <ProfileInfo setEdit={setEdit} setConfigure={setConfigure} userInfo={currentUser} />
                }
                <PostsProfile currentUser={currentUser}/> 
                {/* Configure user tiene el put para cambiar el usuario, la contraseña, y el email*/}
                {configure ? <ConfigureUser URI={URI} setConfigure={setConfigure} father='profile' userInfo={currentUser} /> : null}
            </div>

        </div>

    )
}

export default Profile;