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
      <button className='btnUpdate'><svg xmlns="http://www.w3.org/2000/svg" id="Outline" className='colorAddAdmin' focusable="false" viewBox="0 0 24 24" width="30" height="30"><path d="M12,2a10.032,10.032,0,0,1,7.122,3H16a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1h4.143A1.858,1.858,0,0,0,22,5.143V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V3.078A11.981,11.981,0,0,0,.05,10.9a1.007,1.007,0,0,0,1,1.1h0a.982.982,0,0,0,.989-.878A10.014,10.014,0,0,1,12,2Z"/><path d="M22.951,12a.982.982,0,0,0-.989.878A9.986,9.986,0,0,1,4.878,19H8a1,1,0,0,0,1-1H9a1,1,0,0,0-1-1H3.857A1.856,1.856,0,0,0,2,18.857V23a1,1,0,0,0,1,1H3a1,1,0,0,0,1-1V20.922A11.981,11.981,0,0,0,23.95,13.1a1.007,1.007,0,0,0-1-1.1Z"/></svg></button>
      <button
        onClick={() => props.setEditing(false)}
        className='btnCancel'
      >
      <svg xmlns="http://www.w3.org/2000/svg" className='colorAddAdmin' focusable="false" viewBox="0 0 24 24" width="50" height="40"><g id="_01_align_center" data-name="01 align center"><polygon points="18.707 6.707 17.293 5.293 12 10.586 6.707 5.293 5.293 6.707 10.586 12 5.293 17.293 6.707 18.707 12 13.414 17.293 18.707 18.707 17.293 13.414 12 18.707 6.707"/></g></svg>
      </button>
    </form>

  )
}

export default EditUserForm