import BtnPosting from './BtnPosting';
import Post from './Post';

 /* import {useEffect,useState} from 'react';  */

function Posts({setPopUp,popUp}) {
  /* const [popUp, setPopUp] = useState(false); */

/*   ----------------------esto lo dejo para traer el json de gente de back------- */
/*     const [users,setUsers]=useState([]);


const getUser=async()=>{
  const dataUsers= await fetch(`https://randomuser.me/api/?results=10_`);
  const dataUsersJson= await dataUsers.json();
  setUsers(dataUsersJson.results);
}
 useEffect(()=>{
  getUser();
 },[])  */


  return (
    <div className="container-Posts">
      {/* Paso de nuevo la funcion de cambiar estado asi desde el boton lo puedo cambiar */}
     {popUp?null:<BtnPosting setPopUp={setPopUp}  />} 

                <Post  textPostProp="holiiiiiiiiiiiiiii" userPostProp="gonzalo"/>
                 <Post userPostProp="Macarena" textPostProp="holiii aguante react"/>
                  <Post userPostProp="Maximiliano"textPostProp="Buenos dias a todos!" />
                  <Post userPostProp="Cristian" textPostProp="Hola Gente" />
                  <Post userPostProp="Ezequiel" textPostProp="Aguante Back"/>
                  <Post userPostProp="Iara" textPostProp="Trabajar en la nasa es lo mejor"/>
     
    
    </div>
  )
}

export default Posts
