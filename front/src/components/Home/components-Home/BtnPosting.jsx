import imgBtnPost from '../assets/editar.png';

function BtnPosting({setPopUp}) {
  return (
    <div className="btnPosting">
      
      <button onClick={()=> setPopUp(true)} className="btnPostingChildren"><img src={imgBtnPost} alt="" className='imgBtnPost' />Postear</button>
    </div>
  )
}

export default BtnPosting;
