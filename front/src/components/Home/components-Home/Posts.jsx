import { useState,useEffect, useNavigate } from 'react';
import axios from 'axios';
import BtnPosting from './BtnPosting';
import Post from './Post';
import WritePost from './WritePost';



function Posts() {
  const navigate = useNavigate()
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


const URI = 'http://localhost:8000/home';



//procedimiento para mostrar todos los posts
const getPosts = async () => {
  await axios.get(URI, {withCredentials:true}).then(result=>{
    if(result.data.mensaje) {
      console.log("miau")
      navigate('/login')
    } else {
      console.log(result.data)
      setPosts(result.data);
    }
  })
  /* setPosts(res.data); */
}

useEffect( ()=>{
  getPosts();
},[])


//eliminar post ----- sirveeeeee lo cambiamos de lugar
// const deletePost = async(id) => {
//   await axios.delete(`${URI}/${id}`)
//   //  getPosts()
//   window.location.reload()
// }



  return (
    <div className="container-Posts">
   
               <BtnPosting OpenWritePost={handlePopUpWritePost} />
               {popUp===true?<WritePost propWritePost={handlePopUpWritePost}  />:null} 

               {/* agrago clase para que los post se ubiquen en column */}
               <ul className='listPosts'>
                  {
                    posts.map((elementPost)=>(
                      <li key={elementPost.id} className='liPosts'>
                        <Post postData={elementPost} id={elementPost.id} textPostProp={elementPost.content} commentsProp={elementPost.comments} 
                        // onClickProp={()=> deletePost(elementPost.id)}
                        />
                        
                        </li>
                    ))
                  }
               </ul>






    
    </div>
  )
}

export default Posts
