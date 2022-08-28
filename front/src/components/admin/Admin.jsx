import React, { useState, useEffect } from 'react';
import './admin.css'
import UserTable from './UserTable';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';
import socialLogo from '../pageInitial/assets/socialDEV.png'
import axios from 'axios'

const URI= 'http://localhost:8000/allUsers'
export const Admin = () => {
  
 /*  const [users, setUsers] = useState([]) */
 
/*   const obtenerUsuarios = async () => {
      const obtenerDatos = await fetch('http://localhost:8000/allUsers');
      const res=await obtenerDatos.json();
      setUsers(res); //"Answer of async/await", res
}  */

/* 
useEffect(() => {
  const getData = () => {
    fetch('http://localhost:8000/allUsers')
    .then(res => res.json())
    .then(res => setUsers(res))
  }
  getData()
  
}, []) */

 //hooks
 const [users, setUser] = useState ([])
 useEffect( ()=>{
     getUsers()
 },[])

 //muestra todos los blogs
 const getUsers = async () => {
     const res = await axios.get(URI) //peticion al back
     setUser(res.data)
 }


/* useEffect(()=>{
  obtenerUsuarios()    
},[]) */
 

    const [editing, setEditing] = useState(false)
    const initialFormState = { id: null, name: '', username: '' }
    const [currentUser, setCurrentUser] = useState(initialFormState)

    //add user
    const addUser = (user) => {
      user.id = users.length + 1
      setUser([...users, user])
    }
  
    //delete user
    const deleteUser = (id) => {
      setUser(users.filter((user) => user.id !== id))
    }

    //edit user
    const editRow = (users) => {
      setEditing(true)
    
      setCurrentUser({ id: users.id, name: users.user, email: users.email})
    }

    //update User
    const updateUser = (id, updatedUser) => {
      setEditing(false)
    
      setUser(users.map((user) => (user.id === id ? updatedUser : user)))
    }

  return (
    
    <div className='boxAdmin'>
      <nav className='navAdmin'>
        <ul className='backgroundNav'>
          <li><img className='logoAdmin' src={socialLogo} alt="logo" /></li>
          <li><div >
  {editing ? (
    <div className='boxAddMain'>
      <h2>Editar usuario</h2>
      <EditUserForm
        setEditing={setEditing}
        currentUser={currentUser}
        updateUser={updateUser}
      />
    </div>
  ) : (
    <div className='boxAddMain'>
   
      <AddUserForm addUser={addUser} />
    </div>
  )}
</div>
</li>
          <li>Admin 

</li>
        </ul>
        
      </nav>
      <br />

      

      <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />

      </div>
    
  )
}
