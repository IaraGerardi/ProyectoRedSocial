

function WriteComment({storeProp,changeValueProp,valueContentComment,setContent}) {

  return (
    <form className='formComment' onSubmit={storeProp} >
    <input type="text" value={valueContentComment}  onChange={ changeValueProp} />
     <button className='btnComment' type='submit'>Comentar</button>
     </form> 
  )
}

export default WriteComment;
/* (e)=> setContentComment(e.target.value) */