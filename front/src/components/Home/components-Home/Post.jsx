import imgReactionLike from '../assets/amor.png';
import imgReactionLikeado from '../assets/me-gusta (1).png';
 import imgUserPost from '../assets/imgUserPost.jpg';
 import imgUserComment from '../assets/Screenshot_3.png'
import imgReactionComment from '../assets/comentario.png';
import WriteComment from './WriteComment';
import {useState} from 'react';
import axios from 'axios';

function Post({textPostProp,commentsProp}) {

 

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
    //------------abre axios para agregar comentarios------
          const[comments,setComments]=useState(commentsProp)
          
          console.log(comments)
          

          const [content, setContent] = useState('')
  


  //procedimiento guardar -  joyaaaaaaaaaaa
  const storeComments = async (e) => {
      e.preventDefault()
      await axios.post(setComments , {content: content,likes:0,image:null,createdAt:'2022-08-28',updatedAt:'2022-08-29',usersId:1})           /* esto tendria que funcionar con el json de la gente  back  */
     
  }    

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
                             
                               {
                                commentsProp.map((eleComm)=>(
                                  <li key={eleComm.id}>
                                  <div className='boxComment'>
                                    <img src={imgUserComment} className="imgUserComment" alt="" />
                                      <p>{eleComm.content}</p> 
                                  </div>
                                </li>
                            
                                ))
                                   
                                 
                               }
                              
                            </ul>

                            <WriteComment storeProp={storeComments} valueContentComment={content} changeValueProp={ (e)=> setContent(e.target.value)}/>
                               
                          </div>: null}




                      </>
            
           )
           
    
}

export default Post;
