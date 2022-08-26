import BtnPosting from './BtnPosting';
import Post from './Post';
import {useEffect,useState} from 'react';

function Posts({setPopUp}) {
    const [users,setUsers]=useState([]);


const getUser=async()=>{
  const dataUsers= await fetch(`https://randomuser.me/api/?results=10_`);
  const dataUsersJson= await dataUsers.json();
  setUsers(dataUsersJson.results);
}
 useEffect(()=>{
  getUser();
 },[]) 
  return (
    <div className="container-Posts">
      {/* Paso de nuevo la funcion de cambiar estado asi desde el boton lo puedo cambiar */}
      <BtnPosting setPopUp={setPopUp}/>

      <>
        {
          users.map((user)=>(
            < >
                 <Post  textPostProp="holiiiiiiiiiiiiiii" userPostProp={user.login.username} imgUserPost={user.picture.large} />
                 <Post userPostProp="Macarena" textPostProp="holiii aguante react" imgUserPost={user.picture.large} />
                  <Post userPostProp="Maximiliano"textPostProp="Buenos dias a todos!" imgUserPost={user.picture.large} />
                  <Post userPostProp="Cristian" textPostProp="Hola Gente" imgUserPost={user.picture.large} />
                  <Post userPostProp="Ezequiel" textPostProp="Aguante Back" imgUserPost={user.picture.large} />
                  <Post userPostProp="Iara" textPostProp="Trabajar en la nasa es lo mejor" imgUserPost={user.picture.large} />
             </>
          ))
        }
      </>
      
    
    </div>
  )
}

export default Posts
