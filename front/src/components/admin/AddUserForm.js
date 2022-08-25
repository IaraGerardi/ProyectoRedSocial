import React, { useState } from 'react'

const AddUserForm = ({ addUser}) => {

    const initialFormState = { id: null, name: '', username: '' }
const [user, setUser] = useState(initialFormState)

const handleInputChange = (event) => {
    const { name, value } = event.target
  
    setUser({ ...user, [name]: value })
  }

  return (
    <form
    className='boxAddUser'
      onSubmit={(event) => {
        event.preventDefault()
        if (!user.name || !user.username) return

        addUser(user)
        setUser(initialFormState)
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
      <button className='btnAddUser'>Agregar</button>
    </form>
  )
}

export default AddUserForm