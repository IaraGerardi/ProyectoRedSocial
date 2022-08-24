import React, {useState} from "react";
import ProfileInfo from "./profile-info";
import EditUser from "./editProfile";
import "./profile.css"

// Profile es el componente que contiene todos los componentes que forman la vista del perfil, y es el componente que renderiza react router en la ruta de "/user"
// Profile is the view component, it contains all the components that make up the page so it can be the element of the "/user" path

function Profile() {
    const [editUser, setEditUser] = useState(false);
    return (
        <>
            {/* <div className="profileContainer"> */}
                <ProfileInfo setEditUser={setEditUser}/>
                {editUser ? <EditUser setEditUser={setEditUser}/> : null}
        </>
    )
}

export default Profile;