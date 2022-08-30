import imgBtnPost from '../assets/editar.png';

function BtnPosting({OpenWritePost}) {
  return (
    <div className="btnPosting">
        <button onClick={OpenWritePost} className="btnPost1">

            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                  <img src={imgBtnPost} alt="" className='imgBtnPost' />
              </div>
            </div>
            <span className="spanPost">Postear</span>
       </button>
      {/* <button onClick={OpenWritePost}  className="btnPostingChildren"><img src={imgBtnPost} alt="" className='imgBtnPost' />Postear</button> */}
    </div>
  )
}

export default BtnPosting;
