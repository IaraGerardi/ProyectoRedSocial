import React from "react";


function Boton ({BtnClass,Type,BtnNombre, Id}){
    return(
        <button type={Type} className={BtnClass} id={Id}>{BtnNombre}</button>
    
    )
}

export default Boton