import React from "react";

function Input ({Type,Placeholder,Id,Name,ClassInput,EventoInput}) {
    return(
        <input type={Type} placeholder={Placeholder} id={Id} name={Name} className={ClassInput} onChange={EventoInput} />
    )
}

export default Input;