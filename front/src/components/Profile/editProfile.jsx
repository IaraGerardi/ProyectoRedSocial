import React from "react";

// EditUser es el componente que edita la informacion del usuario, puede cambiar su nombre de usuario, su email y su contraseña, se muestra cuando el usuario da click en el lapiz que aparece al lado de sus "estadisticas"(posts y likes). El componente tambien incluye un div llamado "glassmorphism" para difuminar el fondo cuando se visualice el pop-up.


function EditUser({ setEditUser }) {
    return (
        <>
            <div className='editUserForm'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAN9JREFUSEvtleENAiEMRt9NoJvoCLqJG6gTOYKucBs4im5gvgQSEu+4VlD8Ab+bPvpoy0CjMzTi0sE/M99V/5XqNXAFzsB94WYH4AjsgUcu1vLGgm1CIiWcgwt6CbAR2JWC04SqYgqexjwDNGvHUrEunoO7oUpoBc/Bt4leU6VRvwc8BVfj6big3orjZVO1H0FrgecaLjt5JaqldxWyu+Ee8FT3ps3lglvBuZGxzPmbdgvYMqduuAUcV+bSyFRfmZrVG3AyfhKK054u/iS+8lVaVHdwFQNddRWNliTNVL8A3XRCH6P6Iy4AAAAASUVORK5CYII="
                    onClick={() => setEditUser(false)} alt='close edit user' />
                <form method='PUT'>
                    <div className='user editBox'>
                        <label htmlfor='userEdit'>Username</label>
                        <input type='text' id='userEdit' name='userEdit'></input>
                    </div>
                    <div className='email editBox'>
                        <label htlmfor='emailEdit'>Email</label>
                        <input type='email' id='emailEdit' name='emailEdit'></input>
                    </div>
                    <div className='password editBox'>
                        <label htlmfor='passwordEdit'>Contraseña</label>
                        <input type='password' name='passwordEdit' id='passwordEdit'></input>
                    </div>
                </form>
            </div>
            <div className='glassmorphism' />
        </>
    );
}

export default EditUser;