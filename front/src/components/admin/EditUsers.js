import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate , useParams} from 'react-router-dom'

const URI = 'http://localhost:8000/allUsers'


export const EditUsers = () => {
    const [user,setUSer] = useState('')
    const [email,setEmail] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    //para actualizar

    const update = async (e)=>{
        e.preventDefaul()
        await axios.put(URI+id, {
            user:user,
            email:email
        })
        navigate('/allUsers')
    }

    useEffect( ()=>{
        getUserById()
    },[])

    const getUserById = async ()=>{
        const res = await axios.get(URI+id)
        setUSer(res.user)
        setEmail(res.email)
    }

  return (
    <div>
        <h3>Editar usuario</h3>
        <form onSubmit={update}>
            <label>Usuario</label>
            <input
            value={user}
            onChange={ (e)=> setUSer(e.target.value)}
            type='text'
            />

            <label>email</label>
            <input
            value={email}
            onChange={ (e)=> setEmail(e.target.value)}
            type='text'
            />

            <button  type='submit'>Actualizar</button>
        </form>
    </div>
  )
}
