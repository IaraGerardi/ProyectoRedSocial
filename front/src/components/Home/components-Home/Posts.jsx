import { useState,useEffect } from 'react';
import axios from 'axios';
import BtnPosting from './BtnPosting';
import Post from './Post';
import WritePost from './WritePost';



function Posts() {
  const [popUp, setPopUp] = useState(false);

        const handlePopUpWritePost =()=>{
              if(popUp===true){
                setPopUp(false)
              }else{
                setPopUp(true);
              }
                  
        
        }
/*   ----------------------esto lo dejo para traer el json de gente de back------- */


/*  -------usando axios traer todo los posts----------- */ 
const[posts,setPosts]=useState([]);

const URI = 'https://jsonplaceholder.typicode.com/users';



//procedimiento para mostrar todos los posts
const getPosts = async () => {
    const res = await axios.get(URI);
    setPosts(res.data);
}

useEffect( ()=>{
  getPosts();
},[])

  console.log(posts);

  return (
    <div className="container-Posts">
   
               <BtnPosting OpenWritePost={handlePopUpWritePost} />
               {popUp===true?<WritePost propWritePost={handlePopUpWritePost}/>:null} 

               {/* agrago clase para que los post se ubiquen en column */}
               <ul className='listPosts'>
                  {
                    posts.map((elementPost)=>(
                      <li key={elementPost.id} className='liPosts'>
                        <Post userPostProp={elementPost.username} textPostProp={elementPost.company.catchPhrase} />
                        </li>
                    ))
                  }
               </ul>






               {/*  <Post  textPostProp="holiiiiiiiiiiiiiii" userPostProp="gonzalo"/>
                 <Post userPostProp="Macarena" textPostProp="holiii aguante react"/>
                  <Post userPostProp="Maximiliano"textPostProp="Buenos dias a todos!" />
                  <Post userPostProp="Cristian" textPostProp="Hola Gente" />
                  <Post userPostProp="Ezequiel" textPostProp="Aguante Back"/>
                  <Post userPostProp="Iara" textPostProp="Trabajar en la nasa es lo mejor"/> */}
     
    
    </div>
  )
}

export default Posts
