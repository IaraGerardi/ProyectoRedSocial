import imgReactionLike from '../assets/amor.png';
import imgReactionLikeado from '../assets/me-gusta (1).png';
 import imgUserPost from '../assets/imgUserPost.jpg';
 import imgUserComment from '../assets/Screenshot_3.png'
import imgReactionComment from '../assets/comentario.png';
import {useState} from 'react';

function Post({textPostProp,userPostProp}) {

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
//-------------- cierra el manejo del like-----
//r--------------abre renderizado------------
  return (
            <>

                      <div className="boxPost">
                          <div className="boxProfilePost">
                             <img className="boxImgProfile" src={imgUserPost} alt=""/> <span className="userPost">@{userPostProp}</span>
                          </div>
                    
                          <div className="textPost">
                          <p>{textPostProp}</p>
                          </div>   
                          <div className="boxReactions">
                            <span>{liked===false ? <img src={imgReactionLike} alt="" onClick={handleLike}/>: <img src={imgReactionLikeado} alt="" onClick={handleLike}/>}{like}</span>
                            <span><img src={imgReactionComment} alt="" onClick={handleOpenComments}/></span>
                          </div>
                      </div>

                   

{/* ---------------------------caja comentarios abre----------------------------------------- */}
                          {openComments===true ? <div className='boxComments'>
                            <ul>
                              <li>
                                <div className='boxComment'>
                                  <img src={imgUserComment} className="imgUserComment" alt="" />
                                    <p>shgkjksdjgkhbdskhghdvsa</p> 
                                </div>
                              </li>
                            </ul>
                             <div className='inputComment'>
                             <input type="text" />
                              <button>Comentar</button>
                              </div> 
                               
                          </div>: null}




                      </>
            
           )
           
    
}

export default Post;
