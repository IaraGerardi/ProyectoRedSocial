import './admin.css'
import usersAdmin from './assets/usersAdmin.png'

const UserTable = ({ users, deleteUser, editRow }) =>{

    

    return(

    <div>
    
    <div>
      {users.length > 0 ? (
        users.map((user) => (
          <ul key={user.id} className='boxUser'>
            <li className='name'>{user.id}</li>
            <li><img className='usersAdmin' src={usersAdmin} alt='user' /></li>
            <li className='name'>{user.user}</li>
            <li className='name'>{user.email}</li>
            <li className='boxBtn'>
              <button className='btnAction'  onClick={() => { editRow(user) }} >Editar <svg xmlns="http://www.w3.org/2000/svg" id="Outline" className='iconEdit' focusable="false" viewBox="0 0 24 24" width="30" height="20"><path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z"/><path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z"/></svg></button>
            
              <button className='btnAction' onClick=
              {() => {deleteUser(user.id)}}
              >Delete <svg xmlns="http://www.w3.org/2000/svg" className='iconEdit' focusable="false" viewBox="0 0 24 24" width="30" height="20"><g id="_01_align_center" data-name="01 align center"><path d="M22,4H17V2a2,2,0,0,0-2-2H9A2,2,0,0,0,7,2V4H2V6H4V21a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V6h2ZM9,2h6V4H9Zm9,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V6H18Z"/><rect x="9" y="10" width="2" height="8"/><rect x="13" y="10" width="2" height="8"/></g></svg></button>

            </li>
          </ul>
        ))
      ) : (
        <div>
          <h2 >No users</h2>
        </div>
      )}
    </div>
  </div>

)
      }       

export default UserTable