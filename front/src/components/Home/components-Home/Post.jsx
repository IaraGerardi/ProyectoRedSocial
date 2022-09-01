import imgReactionLike from '../assets/amor.png';
import imgReactionLikeado from '../assets/me-gusta (1).png';
import imgUserPost from '../assets/imgUserPost.jpg';
import imgUserComment from '../assets/Screenshot_3.png'
import imgReactionComment from '../assets/comentario.png';
import WriteComment from './WriteComment';
import { useState, useEffect } from 'react';
import axios from 'axios';

/* El componente recibe como props: 
- toda la informacion del post,
- el texto del post, 
- los comentarios del mismo, 
- la funcion que elimina posts,
- el id del post*/

function Post({ postData, textPostProp, commentsProp, onClickProp, id }) {
  console.log('-------------------Post Data:--------------------')
  console.log(postData)
  /*   ---------manejo de caja Comentarios----- */
  const [openComments, setOpenComments] = useState(false);
  const handleOpenComments = () => {
    openComments === true ? setOpenComments(false) : setOpenComments(true);
  }


  //----------------manejo del like abre------------
  const [like, setLike] = useState(0);
  const [liked, setlLiked] = useState(false);

  const handleLike = () => {
    if (like === 0 && liked === false) {
      setLike(like + 1);
      setlLiked(true);
    }
    else {
      setLike(like - 1);
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
        


  //procedimiento guardar - 
    const storeComments = async (e) => {
      e.preventDefault()
      await axios.post(URI, {content: content,likes:0,image:null,createdAt:'2022-08-28',updatedAt:'2022-08-29',usersId:1}) */

  // A post Edit le paso toda la informacion que el metodo get trae en la peticion de Posts.jsx, y despues la propiedad "contentEdit", asi puedo devolver toda la informacion cuando haga la funcion con el metodo put
  const [isEditing, setIsEditing] = useState(false);
  const [postEdit, setPostEdit] = useState({
    ...postData,
    contentEdit: textPostProp,
  })
  const URI = 'http://localhost:8000/home/'

  const handlePostChange = (e) => {
    setPostEdit({
      // ...postEdit,
      ...postData,
      'content': e.target.value,
    })
  }

  const updatePost = async (e) => {
    e.preventDefault()
    await axios.put(`${URI}${postData.id}`, postEdit);
    window.location.reload()
  }

  useEffect(() => {
    getPostById()
  }, [])

  const getPostById = async () => {
    const res = await axios.get(URI + id)
    setPostEdit(res.data.user)
  }


  //--------------abre renderizado------------
  return (
    <>

      <div className="boxPost">
        <div className="boxProfilePost">
          <img className="boxImgProfile" src={imgUserPost} alt="" /> <span className="userPost">@ nosequsuario{/* {userPostProp} */}</span>
         {/* Agrego un condicional para que estas opciones solo se vean un ciertos posts, cuando tengamos la info del web token podemos cambiarlo para que en vez de dos este el id del usuario que actualmente esta logueado */}
          {postData.usersId == 2 ?
            <>
              <button onClick={onClickProp}>Borrar</button>
              <button onClick={() => setIsEditing(true)}>Editar</button>
            </>
            : null}
        </div>

        <div className="textPost">
          {isEditing ?
            <form method='put' onSubmit={updatePost}>
              <input defaultValue={textPostProp} id='contentEdit' onChange={handlePostChange} />
              <input type='submit' value='Guardar cambios'/>
            </form>
            :
            <p>{textPostProp}</p>
          }
        </div>
        {/* <img src="" alt="" /> */} {/* agregar imagen al post si la hubiera en el json */}
        <div className="boxReactions">
          <span>{liked === false ? <img src={imgReactionLike} alt="" onClick={handleLike} /> : <img src={imgReactionLikeado} alt="" onClick={handleLike} />}{like}</span>
          <span><img src={imgReactionComment} alt="" onClick={handleOpenComments} /></span>
        </div>
      </div>

      {/* ---------------------------caja comentarios abre----------------------------------------- */}
      {openComments === true ?
        <div className='boxComments'>
          <ul>
            {
              commentsProp.map((eleComm) => (
                <li key={eleComm.id}>
                  <div className='boxComment'>
                    <img src={imgUserComment} className="imgUserComment" alt="" />
                    <p>{eleComm.content}</p>
                  </div>
                </li>
              ))
            }
          </ul>

          <WriteComment
          /* storeProp={storeComments} valueContentComment={content}  changeValueProp={ (e)=> setContent(e.target.value)} */ />
        </div> : null}
    </>
  )
}

export default Post;
