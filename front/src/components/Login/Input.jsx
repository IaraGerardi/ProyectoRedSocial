import React from "react";

function Input ({Type,Placeholder,Id,Name,ClassInput}) {
    return(
        <input type={Type} placeholder={Placeholder} id={Id} name={Name} className={ClassInput} required/>
    )
}

export default Input;