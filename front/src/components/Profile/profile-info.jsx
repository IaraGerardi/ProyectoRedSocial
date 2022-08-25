import React from 'react';
import 'boxicons';

 

function ProfileInfo({ setEditUser }) {
    return (
        <div className='profileInfo'>
            <img className='profilePicture' alt='profilePicture' src='https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80' />
            <img className='headerProfile' src='https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80' alt='headerPhoto' />
            <div className='infoContainer'>
                <div className='upperInfoProfile'>
                    <p>Username</p>
                    <div className='userStats' />
                    <p>Posts: 12</p>
                    <p>Likes: 40</p>
                    <box-icon name='edit-alt' onClick={() => setEditUser(true)} />
                </div>
                <p className='profileDescription'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro repellat veniam, illum eius veritatis autem nisi expedita odio. Nobis sint culpa voluptatibus quo alias ipsam tempore odio eius, perspiciatis eveniet esse unde asperiores. </p>
            </div>
        </div>
    );
}

export default ProfileInfo;