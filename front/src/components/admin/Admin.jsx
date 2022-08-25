import React, { useState, useEffect } from 'react';
import './admin.css'
import UserTable from './UserTable';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';


export const Admin = () => {
  
  const [users, setUsers] = useState([])
 
  const obtenerUsuarios = async () => {
      const obtenerDatos = await fetch('https://jsonplaceholder.typicode.com/users');
      const res=await obtenerDatos.json();
      setUsers(res); //"Answer of async/await", res
} 


useEffect(()=>{
  obtenerUsuarios()    
},[])
 

    const [editing, setEditing] = useState(false)
    const initialFormState = { id: null, name: '', username: '' }
    const [currentUser, setCurrentUser] = useState(initialFormState)

    //add user
    const addUser = (user) => {
      user.id = users.length + 1
      setUsers([...users, user])
    }
  
    //delete user
    const deleteUser = (id) => {
      setUsers(users.filter((user) => user.id !== id))
    }

    //edit user
    const editRow = (user) => {
      setEditing(true)
    
      setCurrentUser({ id: user.id, name: user.name, username: user.username })
    }

    //update User
    const updateUser = (id, updatedUser) => {
      setEditing(false)
    
      setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
    }

  return (
    <>
      <nav>
        <ul>
          <li>Logo</li>
          <li>Lista de Usuarios</li>
          <li>Admin</li>
        </ul>
      </nav>
      <br />

      <div >
  {editing ? (
    <div>
      <h2>Editar usuario</h2>
      <EditUserForm
        setEditing={setEditing}
        currentUser={currentUser}
        updateUser={updateUser}
      />
    </div>
  ) : (
    <div>
      <h2>Agregar Usuario</h2>
      <AddUserForm addUser={addUser} />
    </div>
  )}
</div>

      <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />

    
    </>
  )
}