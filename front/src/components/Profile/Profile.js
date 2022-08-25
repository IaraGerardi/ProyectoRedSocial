import React, {useState} from "react";

import ProfileInfo from "./profile-info";
import EditUser from "./editProfile";
import Menu from "../Home/components-Home/Menu";
import "./profile.css"

// Profile es el componente que contiene todos los componentes que forman la vista del perfil, y es el componente que renderiza react router en la ruta de "/user"


function Profile() {
    const [popUp, setPopUp] = useState(false);
    return (
        <div className='profileView'>
            <Menu/>
            {/* <div className="profileContainer"> */}
                <ProfileInfo setPopUp={setPopUp}/>
                {popUp ? <EditUser father='profile' setPopUp={setPopUp}/> : null}
        </div>
    )
}

export default Profile;