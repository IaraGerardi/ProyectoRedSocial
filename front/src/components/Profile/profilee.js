import React, { useState } from "react";

import ProfileInfo from "./profile-info";
// import EditUser from "./popUpForm";
import Menu from "../Home/components-Home/Menu";
// import Posts from "../Home/components-Home/Posts";
import ProfileInfoEdit from "./profileInfoEdit";
// import Post from "../Home/components-Home/Post";
import "./profile.css"
import './popUpForm.css'

// Profile es el componente que contiene todos los componentes que forman la vista del perfil, y es el componente que renderiza react router en la ruta de "/user"

// Los estilos de profile, profile info y edit user cuando el padre es profile estan en profile.css
// Si centralizamos los pop ups en editprofile tengo que cambiarle el nombre al archivo y crear un css aparte para eso
function Profile() {
    const [popUp, setPopUp] = useState(false);
    return (
        <div className='profileView'>
            <Menu />
            <div className='mainProfileContainer'>
                {/* El pop up indicaria si la vision de editar se muestra */}
                {popUp ?
                    <ProfileInfoEdit setPopUp={setPopUp} /> :
                    <ProfileInfo setPopUp={setPopUp} />
                }
                {/* {popUp ? <EditUser father='profile' setPopUp={setPopUp} /> : null} */}
                {/* Cuando tenga la info del back renderizo una lista con los post utilizando el componente de posts */}
            </div>
        </div>
    )
}

export default Profile;