import undo from '../assets/undo (1).png';
 import axios from 'axios';
 import {useState} from 'react';
/*  import { useNavigate } from 'react-router-dom'; */



function WritePost({propWritePost}) {

/* ----------------usando axios para agregar un post---------- */ /* no terminado */
const URI = 'http://localhost:8000/home';

  const [content, setContent] = useState('')
  const [image, setImage] = useState('')
  
  


  //procedimiento guardar -  joyaaaaaaaaaaa
  const store = async (e) => {
      e.preventDefault()
      await axios.post(URI, {content: content, image:image,likes:0,createdAt:'2022-08-28',updatedAt:'2022-08-29',usersId:1})           /* esto tendria que funcionar con el json de la gente  back  */
      
  }    

 //refrescar cuando hago click 
  const reload = () => {
    window.location.reload(true);
}

  return (
    <div className="container-filterWritePost">
            <div className="container-WritePost">
              <button onClick={propWritePost} className="btnCloseWritePost">x</button>
            
              <form className="formWritePost" /* method="post" */ onSubmit={store}>
                
                  <input type="text" value={content} className="inputWritePost" onChange={ (e)=> setContent(e.target.value)} />
                  <input type="file" value={image}  accept=".jpg,.png" onChange={ (e)=> setImage(e.target.value)}  />

                  <div className="btnsFormWritePost">
                      <button type="reset" className="btnResetPost">
                      <img className='imgResetPost' src={undo} width='25px' height='25px' alt="undo" />
                      </button>
                      <button className="btnSendWritePost" type="submit" onClick={reload} >
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
                        <span>Postear</span>
                      </button>
                  </div>
                
              </form>
           
            </div>
    </div>
  )
}

export default WritePost;
