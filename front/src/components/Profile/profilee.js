import React, { useState, useEffect } from "react";

import ProfileInfo from "./profile-info";
import EditUser from "./popUpForm";
import Menu from "../Home/components-Home/Menu";
// import Posts from "../Home/components-Home/Posts";
import ProfileInfoEdit from "./profileInfoEdit";
// import Post from "../Home/components-Home/Post";
import "./profile.css"
import './popUpForm.css'
import { useParams } from "react-router-dom"
import axios from 'axios';
// Profile es el componente que contiene todos los componentes que forman la vista del perfil, y es el componente que renderiza react router en la ruta de "/user"

// Los estilos de profile, profile info y edit user cuando el padre es profile estan en profile.css
// Si centralizamos los pop ups en editprofile tengo que cambiarle el nombre al archivo y crear un css aparte para eso
function Profile() {

    const [edit, setEdit] = useState(false);
    const [configure, setConfigure] = useState(false);
    const [currentUser, setCurrentUser] = useState('');
    let { id } = useParams();

    const URI = 'http://localhost:8000/allUsers';

    const getUsers = async () => {
        const res = await axios.get(URI)
        setCurrentUser(res.data[id - 1])
    };
    useEffect(() => {
        getUsers()
    }, [])
    // const { email, user, password } = currentUser
    console.log(configure)
    console.log(currentUser);

    return (
        <div className='profileView'>
            <Menu />
            <div className='mainProfileContainer'>
                {/* El pop up indicaria si la vision de editar se muestra */}
                {edit ?
                    <ProfileInfoEdit setEdit={setEdit} userInfo={currentUser} /> :
                    <ProfileInfo setEdit={setEdit} setConfigure={setConfigure} userInfo={currentUser} />
                }
                {/* {popUp ? <EditUser father='profile' setPopUp={setPopUp} /> : null} */}
                {/* Cuando tenga la info del back renderizo una lista con los post utilizando el componente de posts */}
                {configure ? <EditUser setConfigure={setConfigure} father='profile' userInfo={currentUser} /> : null}
            </div>

        </div>

    )
}

export default Profile;