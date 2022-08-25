import React, {useState} from "react";
import ProfileInfo from "./profile-info";
import EditUser from "./editProfile";
import "./profile.css"

// Profile es el componente que contiene todos los componentes que forman la vista del perfil, y es el componente que renderiza react router en la ruta de "/user"


function Profile() {
    const [editUser, setEditUser] = useState(false);
    return (
        <div className='profile'>
            {/* <div className="profileContainer"> */}
                <ProfileInfo setEditUser={setEditUser}/>
                {editUser ? <EditUser setEditUser={setEditUser}/> : null}
        </div>
    )
}

export default Profile;