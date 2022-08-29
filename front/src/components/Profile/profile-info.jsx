import React from 'react';

// En este componente esta el icono que abre el popUp (tengo que cambiar el icono)
// Este componente tiene que tener personalizado el user (nombre), la foto de perfil, el email; tengo que hablar con los de back para ver si pueden agregar header, numero de likes y posts y una descripcion

function ProfileInfo({ setEdit }) {
    return (
        <div className='profileInfo'>
            <div className="profilePictureContainer">
                <img className='profilePicture' alt='profilePicture' src='https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80' />
            </div>
            <img className='headerProfile' src='https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80' alt='headerPhoto' />
            <div className='infoContainer'>
                <div className='upperInfoProfile'>
                    <p>Nickname</p>
                    <div className='userStats' >
                        <p>Posts: 12</p>
                        <p>Likes: 40</p>
                    </div>
                    <div className="editButton">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25"
                            onClick={( ) => setEdit(true)} >
                            <path d="M22.853,1.148a3.626,3.626,0,0,0-5.124,0L1.465,17.412A4.968,4.968,0,0,0,0,20.947V23a1,1,0,0,0,1,1H3.053a4.966,4.966,0,0,0,3.535-1.464L22.853,6.271A3.626,3.626,0,0,0,22.853,1.148ZM5.174,21.122A3.022,3.022,0,0,1,3.053,22H2V20.947a2.98,2.98,0,0,1,.879-2.121L15.222,6.483l2.3,2.3ZM21.438,4.857,18.932,7.364l-2.3-2.295,2.507-2.507a1.623,1.623,0,1,1,2.295,2.3Z" />
                        </svg>
                    </div>
                </div>
                <p className='profileDescription'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro repellat veniam, illum eius veritatis autem nisi expedita odio. Nobis sint culpa voluptatibus quo alias ipsam tempore odio eius, perspiciatis eveniet esse unde asperiores. </p>
            </div>
        </div>
    );
}

export default ProfileInfo;