import React from "react";


function Boton ({BtnClass,Type,BtnNombre, Id, Evento}){
    return(
        <button type={Type} className={BtnClass} id={Id} onClick={Evento}>
            {BtnNombre}
            </button>
    
    )
}

export default Boton