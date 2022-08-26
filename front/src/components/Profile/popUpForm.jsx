import React from "react";

// EditUser es el componente que edita la informacion del usuario, puede cambiar su nombre de usuario, su email y su contraseña, se muestra cuando el usuario da click en el lapiz que aparece al lado de sus "estadisticas"(posts y likes). El componente tambien incluye un div llamado "glassmorphism" para difuminar el fondo cuando se visualice el pop-up.

// El estado se le pasa desde el padre, tiene que estar false por default y el padre tiene que tener un boton que cambie este estado a true. La x debe cambiar ese estado a falso, y hay que indicarle en que vista se encuentra con el prop "father".
function EditUser({ setPopUp, father }) {
    return (
        <>
            {/* className='editUserForm'> es ahora container data form, y data form tiene q tener todo centrado */}
            <div className='containerDataForm'>
                {/* Esta imagen es un icono de x para cerrar el pop up, si sacamos el boxicon hay que cambiarlo */}
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAN9JREFUSEvtleENAiEMRt9NoJvoCLqJG6gTOYKucBs4im5gvgQSEu+4VlD8Ab+bPvpoy0CjMzTi0sE/M99V/5XqNXAFzsB94WYH4AjsgUcu1vLGgm1CIiWcgwt6CbAR2JWC04SqYgqexjwDNGvHUrEunoO7oUpoBc/Bt4leU6VRvwc8BVfj6big3orjZVO1H0FrgecaLjt5JaqldxWyu+Ee8FT3ps3lglvBuZGxzPmbdgvYMqduuAUcV+bSyFRfmZrVG3AyfhKK054u/iS+8lVaVHdwFQNddRWNliTNVL8A3XRCH6P6Iy4AAAAASUVORK5CYII="
                    onClick={() => setPopUp(false)} alt='close edit user' />
                {/* Si father es profile renderiza el pop up que tiene que cambiar la informacion del perfil de usuario */}
                {/* Del perfil se debe poder personalizar:
                -Foto de perfil y header,
                -Descripcion
                -Nombre de usuario, email *
                -Contraseña * */}
                {/* Los elementos de la lista que tienen un * son los que estoy haciendo, todavia tengo que hablar con los de back para ver si editamos las fotos y la descripcion */}
                {father === 'profile' ?
                    <form method='PUT' className='profileForm'>
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
                        <input type='submit' />
                    </form>
                    // Si el father es home renderiza el pop up en el que se crean los posteos
                    // No tiene ningun estilo pero le puedo poner el mismo estilo que el pop up de editar perfil
                    /* El post debe contener:
                    -Contenido 
                    -Posibilidad de subir una imagen
                    */
                    : father === 'home' ?
                        <form method='POST' className='homeForm'>
                            <input type="text" name='content' id='content' maxLength='255' required/>
                            <input type="file" id='image' name='image' src='' alt='subir foto' />
                            <input type='submit' placeholder="POST"/>
                        </form>
                        : null}
            </div>
            <div className='glassmorphism' />
        </>
    );
}

export default EditUser;