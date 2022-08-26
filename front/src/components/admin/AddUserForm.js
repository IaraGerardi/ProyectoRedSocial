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
      <button className='btnAddUser'><svg xmlns="http://www.w3.org/2000/svg" className='colorAddAdmin' focusable="false" viewBox="0 0 24 24" width="50" height="40"><g id="_01_align_center" data-name="01 align center"><path d="M9,12A6,6,0,1,0,3,6,6.006,6.006,0,0,0,9,12ZM9,2A4,4,0,1,1,5,6,4,4,0,0,1,9,2Z"/><polygon points="21 10 21 7 19 7 19 10 16 10 16 12 19 12 19 15 21 15 21 12 24 12 24 10 21 10"/><path d="M13.043,14H4.957A4.963,4.963,0,0,0,0,18.957V24H2V18.957A2.96,2.96,0,0,1,4.957,16h8.086A2.96,2.96,0,0,1,16,18.957V24h2V18.957A4.963,4.963,0,0,0,13.043,14Z"/></g></svg></button>
    </form>
  )
}

export default AddUserForm