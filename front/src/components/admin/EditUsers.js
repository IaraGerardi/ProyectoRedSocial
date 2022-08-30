import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom'

const URI = 'http://localhost:8000/allUsers/'


export const EditUsers = () => {
    const [user,setUSer] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    //para actualizar

    const update = async (e)=>{
        e.preventDefault()
        await axios.put(URI+id, {
            userEditAdmin:user,
            emailEditAdmin:email,
            passwordEditAdmin:password
        })
        navigate('/allUSers/')
    }

    useEffect( ()=>{
        getUserById()
    },[])

    const getUserById = async ()=>{
        const res = await axios.get(URI+id)
        setUSer(res.data.user)
        setEmail(res.data.email)
    }

  return (
    <div className='boxFormEdit'>
        <h3>Editar usuario</h3>
        <form className='formEdit' method='PUT' onSubmit={update}>
            <label className='labelEdit'>Usuario</label>
            <input
            id="userEditAdmin" 
            name="userEditAdmin"
            value={user}
            onChange={ (e)=> setUSer(e.target.value)}
            type='text'
            className='inputEdit'
            />

            <label className='labelEdit'>Email</label>
            <input
            id="emailEditAdmin"
             name="emailEditAdmin"
            value={email}
            onChange={ (e)=> setEmail(e.target.value)}
            type='text'
            className='inputEdit'
            />

            <input
            id="passwordEditAdmin"
            name="passwordEditAdmin"
            defaultValue={password}
            className='passwordNone'
            onChange={ (e)=> setPassword(e.target.value)}
            type='password'
            />  

            <button className='btnUpdateEdit'  type='submit'>Actualizar</button>
        </form>
    </div>
  )
}
