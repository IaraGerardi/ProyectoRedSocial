import './admin.css'
import usersAdmin from './assets/usersAdmin.png'

const UserTable = ({ users, deleteUser, editRow }) =>{

    

    return(

    <div>
    <div>
      <ul className='boxUser1'>
        <li className='name1'>Name</li>
        <li className='name1'>Username</li>
        <li className='actions'>Actions</li>
      </ul>
    </div>
    <div>
      {users.length > 0 ? (
        users.map((user) => (
          <ul key={user.id} className='boxUser'>
            <li className='name'> <img className='usersAdmin' src={usersAdmin} alt='user' /> {user.name}</li>
            <li className='name'>{user.username}</li>
            <li className='boxBtn'>
              <button onClick={() => { editRow(user) }} >Edit</button>
            
              <button onClick=
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