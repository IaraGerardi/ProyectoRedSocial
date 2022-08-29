import React, { useState } from "react";
import axios from 'axios';
// EditUser es el componente que edita la informacion del usuario, puede cambiar su nombre de usuario, su email y su contraseña, se muestra cuando el usuario da click en el lapiz que aparece al lado de sus "estadisticas"(posts y likes). El componente tambien incluye un div llamado "glassmorphism" para difuminar el fondo cuando se visualice el pop-up.

// El estado se le pasa desde el padre, tiene que estar false por default y el padre tiene que tener un boton que cambie este estado a true. La x debe cambiar ese estado a falso, y hay que indicarle en que vista se encuentra con el prop "father".
function EditUser({ setConfigure, father, userInfo, URI }) {
// profile/${user}
// http://localhost:8000/profile/reloco
    const { email, user, password } = userInfo;
    console.log(userInfo)
    const [form, setForm] = useState({
        'userEdit': user,
        'emailEdit': email,
        'passwordEdit': password
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value,
        })
    }
    console.log(form);

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.put(URI, form)
        // navigate('/profile/')
    }


    return (
        <>
            <div className='editUserForm'>
                <svg className='closeEditUser' xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20" onClick={() => setConfigure(false)}><path d="M13.93,12L21.666,2.443c.521-.644,.422-1.588-.223-2.109-.645-.522-1.588-.421-2.109,.223l-7.334,9.06L4.666,.557c-1.241-1.519-3.56,.357-2.332,1.887l7.736,9.557L2.334,21.557c-.521,.644-.422,1.588,.223,2.109,.64,.519,1.586,.424,2.109-.223l7.334-9.06,7.334,9.06c.524,.647,1.47,.742,2.109,.223,.645-.521,.744-1.466,.223-2.109l-7.736-9.557Z" /></svg>
                {/* Si father es profile renderiza el pop up que tiene que cambiar la informacion del perfil de usuario */}
                {father === 'profile' ?
                    <form method='PUT' className='profileForm' onSubmit={handleSubmit}>
                        <div className='user editBox'>
                            <label htmlfor='userEdit'>Username</label>
                            <input type='text' id='userEdit' name='userEdit'
                                defaultValue={user} onChange={handleChange} />
                        </div>
                        <div className='email editBox'>
                            <label htlmfor='emailEdit'>Email</label>
                            <input type='email' id='emailEdit' name='emailEdit'
                                defaultValue={email} onChange={handleChange} />
                        </div>
                        <div className='password editBox'>
                            <label htlmfor='passwordEdit'>Contraseña</label>

                            <input type='password' name='passwordEdit' id='passwordEdit'
                                defaultValue={password} onChange={handleChange} />
                        </div>
                        <input type='submit' />
                    </form>
                    : null}
            </div>
            <div className='glassmorphism' />
        </>
    );
}

export default EditUser;