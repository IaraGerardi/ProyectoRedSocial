import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const URI ='http://localhost:8000/allUsers' 

export const CreateUser = () => {

    const[user,setUser] = useState('')
    const[email,setEmail] = useState('')
    const navigate = useNavigate()

    //guardar
    const store = async(e)=> {
        e.preventDefaul()
        await axios.post(URI, {user: user, email:email})
        navigate('/')
    }


  return (
    <div>
        <h3>Crear Usuario</h3>
        <form onSubmit={store}>
            <label>Usuario</label>
            <input
            value={user}
            onChange={ (e)=>setUser(e.target.value)}
            type='text'

            />
            <label>Email</label>
            <textarea
            value={email}
            onChange={ (e)=>setEmail(e.target.value)}
            type='text'
            />
            <button type='submit'>Guardar</button>
        </form>
    </div>
  )
}
