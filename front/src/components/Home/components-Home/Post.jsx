import imgReactionLike from '../assets/amor.png';
import imgReactionLikeado from '../assets/me-gusta (1).png';
 import imgUserPost from '../assets/imgUserPost.jpg';
 import imgUserComment from '../assets/Screenshot_3.png'
import imgReactionComment from '../assets/comentario.png';
import WriteComment from './WriteComment';
import {useState} from 'react';
/* import axios from 'axios'; */

function Post({textPostProp,commentsProp,onClickProp,id}) {

 

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
     /*   const URI=`http://localhost:8000/comments/2/${id}`;
          const[comments,setComments]=useState([])

          const Comment = async () => {
            const res = await axios.get(URI);
            setComments(res.data);
           
        }
      

        console.log(comments);

          const [content, setContent] = useState('')
          //guardar
          const storeComments = async(e)=> {
            e.preventDefault()
            await axios.post(URI, {content:content})
           
          }
         
      




          console.log(commentsProp)
           */

  


  //procedimiento guardar - 
 /*  const storeComments = async (e) => {
      e.preventDefault()
      await axios.post(URI, {content: content,likes:0,image:null,createdAt:'2022-08-28',updatedAt:'2022-08-29',usersId:1})           /* esto tendria que funcionar con el json de la gente  back  */
     
     
//espero sea lo ultimo- actualizar post
  //para actualizar
  const [postEdit,setPostEdit]=useState([])
  const URI='http://localhost:8000/home/'


  //esto solo lo traje
  const update = async (e)=>{
    e.preventDefault()
    await axios.put(URI+id, {
        userEditAdmin:user
       
    })
   
}

useEffect( ()=>{
    getPostById()
},[])

const getPostById = async ()=>{
    const res = await axios.get(URI+id)
    setPostEdit(res.data.user)
    
}

  

//--------------abre renderizado------------
  return (
            <>

                      <div className="boxPost">
                          <div className="boxProfilePost">
                             <img className="boxImgProfile" src={imgUserPost} alt=""/> <span className="userPost">@ nosequsuario{/* {userPostProp} */}</span>
                             <button onClick={onClickProp}>Borrar</button>
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

                            <WriteComment /* storeProp={storeComments}  *//* valueContentComment={content}  *//* changeValueProp={ (e)=> setContent(e.target.value)} *//>
                               
                          </div>: null}




                      </>
            
           )
           
    
}

export default Post;
