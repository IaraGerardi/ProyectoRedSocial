import React from "react";

// EditUser es el componente que edita la informacion del usuario, puede cambiar su nombre de usuario, su email y su contraseña, se muestra cuando el usuario da click en el lapiz que aparece al lado de sus "estadisticas"(posts y likes). El componente tambien incluye un div llamado "glassmorphism" para difuminar el fondo cuando se visualice el pop-up.

// El estado se le pasa desde el padre, tiene que estar false por default y el padre tiene que tener un boton que cambie este estado a true. La x debe cambiar ese estado a falso, y hay que indicarle en que vista se encuentra con el prop "father".
function EditUser({ setPopUp, father }) {
    return (
        <>
            {/* className='editUserForm'> es ahora container data form, y data form tiene q tener todo centrado */}
            <div className='containerDataForm'>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="30"
                onClick={() => setPopUp(false)} >
                    <path d="M22.853,1.148a3.626,3.626,0,0,0-5.124,0L1.465,17.412A4.968,4.968,0,0,0,0,20.947V23a1,1,0,0,0,1,1H3.053a4.966,4.966,0,0,0,3.535-1.464L22.853,6.271A3.626,3.626,0,0,0,22.853,1.148ZM5.174,21.122A3.022,3.022,0,0,1,3.053,22H2V20.947a2.98,2.98,0,0,1,.879-2.121L15.222,6.483l2.3,2.3ZM21.438,4.857,18.932,7.364l-2.3-2.295,2.507-2.507a1.623,1.623,0,1,1,2.295,2.3Z" />
                </svg> */}
                {/* <iconify-icon icon="bi:x-circle" onClick={() => setPopUp(false)} /> */}
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
                            <input type="text" name='content' id='content' maxLength='255' required />
                            <input type="file" id='image' name='image' src='' alt='subir foto' />
                            <input type='submit' placeholder="POST" />
                        </form>
                        : null}
            </div>
            <div className='glassmorphism' />
        </>
    );
}

export default EditUser;