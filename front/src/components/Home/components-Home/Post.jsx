import imgReactionLike from '../assets/amor.png';
import imgReactionComment from '../assets/comentario.png';
import {useState} from 'react';

function Post() {
 const [like,setLike]=useState(0);
 const[likeado,setlLikeado]=useState(false);

 const handleLike=()=>{
if(like===0 && likeado===false){
  setLike(like+1);
  setlLikeado(true);
}
else{
  setLike(like-1);
  setlLikeado(false);
}
 }

  return (
    <>
    <div className="boxPost">
        <div className="boxProfilePost">
          <div className="boxImgProfile"></div><span className="userPost">@user</span>
        </div>
   
        <div className="textPost">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        </div>
        <div className="boxReactions">
              <span><img src={imgReactionLike} alt="" onClick={handleLike}/>{like}</span>
              <span><img src={imgReactionComment} alt="" /></span>
        </div>
    </>
  )
}

export default Post;
