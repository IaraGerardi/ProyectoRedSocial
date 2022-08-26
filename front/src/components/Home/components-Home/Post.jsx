import imgReactionLike from '../assets/amor.png';
import imgReactionLikeado from '../assets/me-gusta (1).png';
import imgReactionComment from '../assets/comentario.png';
import {useState} from 'react';

function Post({textPostProp,userPostProp,imgUserPost}) {
//-------traigo api user,mas adelante el "json" de user de chicos back----------
/*   const [users,setUsers]=useState([]);


const getUser=async()=>{
  const dataUsers= await fetch(`https://randomuser.me/api/?results=10_`);
  const dataUsersJson= await dataUsers.json();
  setUsers(dataUsersJson.results);
}
 useEffect(()=>{
  getUser();
 },[]) */

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
                      </div>

                      <div className="boxReactions">
                            <span>{liked===false ? <img src={imgReactionLike} alt="" onClick={handleLike}/>: <img src={imgReactionLikeado} alt="" onClick={handleLike}/>}{like}</span>
                            <span><img src={imgReactionComment} alt="" /></span>
                      </div>
                      </>
            
           )
           
    
}

export default Post;
