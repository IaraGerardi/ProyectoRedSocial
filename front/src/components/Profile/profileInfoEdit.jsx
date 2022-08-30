import React, { useState, useRef } from 'react';

function ProfileInfoEdit({ setEdit, userInfo }) {
 
    const profilePictureInput = useRef(null);
    const profileTextarea = useRef(null);


    const click = () => {
        console.log(profilePictureInput.current)
        profilePictureInput.click()
    }
    console.log(profilePictureInput)
    console.log(profileTextarea)
    const [nickname, setNickname] = useState('Nickname');
    const [description, setDescription] = useState('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro repellat veniam, illum eius veritatis autem nisi expedita odio.')
    console.log(description)



    return (
        <form className='profileInfo profileInfoEdit'>
            {/* <form onSubmit={handleSubmit} className='profileInfo'> */}
            {/* <div className="profilePictureContainer">
                <img className='profilePicture' alt='profilePicture' src='https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80' />
            </div> */}
            {/* elemento con los estilos para editar la foto de perfil */}
            <div className="profilePictureContainer" >
                <svg onClick={click} xmlns="http://www.w3.org/2000/svg" id="Outline" className='profilePicture profilePicEdit' viewBox="0 0 24 24" width="120" height="120"><path d="M23,16a1,1,0,0,0-1,1v2a3,3,0,0,1-3,3H17a1,1,0,0,0,0,2h2a5.006,5.006,0,0,0,5-5V17A1,1,0,0,0,23,16Z" /><path d="M1,8A1,1,0,0,0,2,7V5A3,3,0,0,1,5,2H7A1,1,0,0,0,7,0H5A5.006,5.006,0,0,0,0,5V7A1,1,0,0,0,1,8Z" /><path d="M7,22H5a3,3,0,0,1-3-3V17a1,1,0,0,0-2,0v2a5.006,5.006,0,0,0,5,5H7a1,1,0,0,0,0-2Z" /><path d="M19,0H17a1,1,0,0,0,0,2h2a3,3,0,0,1,3,3V7a1,1,0,0,0,2,0V5A5.006,5.006,0,0,0,19,0Z" /><path d="M12,11A4,4,0,1,0,8,7,4,4,0,0,0,12,11Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,12,5Z" /><path d="M18,20a1,1,0,0,0,1-1,6.006,6.006,0,0,0-6-6H11a6.006,6.006,0,0,0-6,6,1,1,0,0,0,2,0,4,4,0,0,1,4-4h2a4,4,0,0,1,4,4A1,1,0,0,0,18,20Z" /></svg>
            </div>
            {/* input editar foto de perfil */}
            {/* <input type="file" src="" alt="" ref={profilePictureInput} /> */}
            {/* <img className='headerProfile' src='https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80' alt='headerPhoto' /> */}

            <input type="file" src="" alt="" className='headerProfile headerEdit' />

            <div className='infoContainer'>
                <div className='upperInfoProfile'>
                    <input type="text" name="nickname" defaultValue={nickname} id="nickname" onChange={(e) => setNickname(e.target.value)} />
                    <div className='userStats' >
                        <p>Posts: 12</p>
                        <p>Likes: 40</p>
                    </div>
                </div>
                {/* <p className='profileDescription'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro repellat veniam, illum eius veritatis autem nisi expedita odio. Nobis sint culpa voluptatibus quo alias ipsam tempore odio eius, perspiciatis eveniet esse unde asperiores. </p> */}
                <textarea className='profileDescription' name="description" id="" defaultValue={description} ref={profileTextarea} onChange={(e) => setDescription(e.target.value)} />
                {/* <textarea defaultValue="e" onChange={(e)=>setEl(e.target.value)}/> */}
            </div>
            {/* <input type="submit" value="Guardar cambios" onClick={()=>setEdit(false)}/> */}
        </form>
    );
}

export default ProfileInfoEdit;