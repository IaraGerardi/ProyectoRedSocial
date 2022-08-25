import imgBtnPost from '../assets/editar.png';

function BtnPosting() {
  return (
    <div className="btnPosting">
      
      <button><img src={imgBtnPost} alt="" className='imgBtnPost' />Postear</button>
    </div>
  )
}

export default BtnPosting;
