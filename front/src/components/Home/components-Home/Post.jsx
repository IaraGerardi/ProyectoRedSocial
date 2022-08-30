import imgReactionLike from '../assets/amor.png';
import imgReactionLikeado from '../assets/me-gusta (1).png';
 import imgUserPost from '../assets/imgUserPost.jpg';
 import imgUserComment from '../assets/Screenshot_3.png'
import imgReactionComment from '../assets/comentario.png';
import {useState,useEffect} from 'react';
import axios from 'axios';

function Post({textPostProp/* ,userPostProp */}) {

/*   ---------manejo de caja Comentarios----- */
  const [openComments,setOpenComments]=useState(false);
 const handleOpenComments =()=>{
  if(openComments===true){
    setOpenComments(false)
  }else{
    setOpenComments(true);
  }
     
 }


//----------------manejo del like abre------------
  const [like,setLike]=useState(0);
 const[liked,setlLiked]=useState(false);
 

    const handleLike=()=>{
    if(like===0 && liked===false){
      setLike(like+1);
      setlLiked(true);
      
    }
    else{
      setLike(like-1);
      setlLiked(false);
    }
    }
    //------------abre axios para comentarios------
                 const[commentsState,setCommentsState]=useState([]);

            const URI = 'http://localhost:8000/';



            //procedimiento para mostrar todos los comentarios
            const getComments = async () => {
                const res = await axios.get(URI);
                setCommentsState(res.data); 
               
            }
 
            useEffect( ()=>{
              getComments();
            },[])
               
           
//--------------abre renderizado------------
  return (
            <>

                      <div className="boxPost">
                          <div className="boxProfilePost">
                             <img className="boxImgProfile" src={imgUserPost} alt=""/> <span className="userPost">@ nosequsuario{/* {userPostProp} */}</span>
                          </div>
                    
                          <div className="textPost">
                          <p>{textPostProp}</p>
                          </div>   
                          {/* <img src="" alt="" /> */} {/* agregar imagen al post si la hubiera en el json */}
                          <div className="boxReactions">
                            <span>{liked===false ? <img src={imgReactionLike} alt="" onClick={handleLike}/>: <img src={imgReactionLikeado} alt="" onClick={handleLike}/>}{like}</span>
                            <span><img src={imgReactionComment} alt="" onClick={handleOpenComments}/></span>
                          </div>
                      </div>

                   

{/* ---------------------------caja comentarios abre----------------------------------------- */}
                          {openComments===true ?
                           <div className='boxComments'>
                            <ul>
                             
                             {commentsState.map((element)=>( 
                                    <li key={element.id}>
                                        <div className='boxComment'>
                                          <img src={imgUserComment} className="imgUserComment" alt="" />
                                            <p>{element.comments.content}</p> 
                                        </div>
                                      </li>
                                   ))  
                                 
                              }
                             
                              
                            </ul>
                             <form className='formComment' method='post'>
                             <input type="text" />
                              <button className='btnComment' type='submit'>Comentar</button>
                              </form> 
                               
                          </div>: null}




                      </>
            
           )
           
    
}

export default Post;
