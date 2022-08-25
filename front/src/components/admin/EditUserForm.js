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
      <label>Nombre</label>
      <input
        className='inputAdmin'
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Usuario</label>
      <input
      className='inputAdmin'
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button>Actualizar</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancelar
      </button>
    </form>

  )
}

export default EditUserForm