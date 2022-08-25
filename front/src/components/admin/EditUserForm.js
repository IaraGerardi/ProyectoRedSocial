import React, { useState } from 'react';


const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }


  return (
    <form
    className='boxAddUser'
      onSubmit={(event) => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label className='labelAdmin'>Nombre</label>
      <input
        className='inputAdmin'
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label className='labelAdmin'>Usuario</label>
      <input
      className='inputAdmin'
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button className='btnAddUser'>Actualizar</button>
      <button
        onClick={() => props.setEditing(false)}
        className='btnAddUser'
      >
        Cancelar
      </button>
    </form>

  )
}

export default EditUserForm