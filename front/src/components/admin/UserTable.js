import './admin.css'
import usersAdmin from './assets/usersAdmin.png'

const UserTable = ({ users, deleteUser, editRow }) =>{

    

    return(

    <div>
    
    <div>
      {users.length > 0 ? (
        users.map((user) => (
          <ul key={user.id} className='boxUser'>
            <li className='name'> <img className='usersAdmin' src={usersAdmin} alt='user' /> {user.name}</li>
            <li className='name'>{user.username}</li>
            <li className='boxBtn'>
              <button className='btnAction'  onClick={() => { editRow(user) }} >Edit</button>
            
              <button className='btnAction' onClick=
              {() => {deleteUser(user.id)}}
              >Delete</button>

            </li>
          </ul>
        ))
      ) : (
        <div>
          <h2 colSpan={3}>No users</h2>
        </div>
      )}
    </div>
  </div>

)
      }       

export default UserTable