import React, {useState} from 'react';

function ProfileInfoEdit({ setPopUp }) {
    // function handleSubmit(event) {
    //     event.preventDefault();
    // }
    const [description, setDescription] = useState('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro repellat veniam, illum eius veritatis autem nisi expedita odio. Nobis sint culpa voluptatibus quo alias ipsam tempore odio eius, perspiciatis eveniet esse unde asperiores.')
    const [defaultDescription, setDefaultDescription] = useState('Lorem.')
    const handleChangeDesc =(e)=>{
        setDescription(e.target.value);
    }


    return (
        <form className='profileInfo profileInfoEdit'>
        {/* <form onSubmit={handleSubmit} className='profileInfo'> */}
            {/* <div className="profilePictureContainer">
                <img className='profilePicture' alt='profilePicture' src='https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80' />
            </div> */}
            <div className="profilePictureContainer">
                <input type="file" src="" alt="" className='profilePicture profilePicEdit' />
            </div>
            {/* <img className='headerProfile' src='https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80' alt='headerPhoto' /> */}
            <input type="file" src="" alt="" className='headerProfile headerEdit' />
            <div className='infoContainer'>
                <div className='upperInfoProfile'>
                    <input type="text" name="username" id="" value='Username' />
                    <div className='userStats' />
                    <p>Posts: 12</p>
                    <p>Likes: 40</p>
                </div>
                {/* <p className='profileDescription'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro repellat veniam, illum eius veritatis autem nisi expedita odio. Nobis sint culpa voluptatibus quo alias ipsam tempore odio eius, perspiciatis eveniet esse unde asperiores. </p> */}
                <textarea className='profileDescription' name="description" id="" value={description} rows="3"
                onChange={handleChangeDesc}/>
            </div>
            {/* <input type="submit" value="Guardar cambios" onClick={()=>setPopUp(false)}/> */}
        </form>
    );
}

export default ProfileInfoEdit;