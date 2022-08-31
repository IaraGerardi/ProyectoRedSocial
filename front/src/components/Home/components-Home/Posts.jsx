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
const[comments,setComments]=useState([])

const URI = 'http://localhost:8000/';



//procedimiento para mostrar todos los posts
const getPosts = async () => {
    const res = await axios.get(URI);
    setPosts(res.data);
    setComments();
}
console.log(comments);
useEffect( ()=>{
  getPosts();
},[])





  return (
    <div className="container-Posts">
   
               <BtnPosting OpenWritePost={handlePopUpWritePost} />
               {popUp===true?<WritePost propWritePost={handlePopUpWritePost}  />:null} 

               {/* agrago clase para que los post se ubiquen en column */}
               <ul className='listPosts'>
                  {
                    posts.map((elementPost)=>(
                      <li key={elementPost.id} className='liPosts'>
                        <Post /* userPostProp={elementPost .users.id}  */ textPostProp={elementPost.content} commentsProp={elementPost.comments} elementPost={elementPost}/>
                        
                        </li>
                    ))
                  }
               </ul>






    
    </div>
  )
}

export default Posts
