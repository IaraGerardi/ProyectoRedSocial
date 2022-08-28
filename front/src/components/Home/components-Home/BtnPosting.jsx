import imgBtnPost from '../assets/editar.png';

function BtnPosting({OpenWritePost}) {
  return (
    <div className="btnPosting">
      
      <button onClick={OpenWritePost}  className="btnPostingChildren"><img src={imgBtnPost} alt="" className='imgBtnPost' />Postear</button>
    </div>
  )
}

export default BtnPosting;
