import React from "react";

function Input ({Type,Placeholder,Id,Name}) {
    return(
        <input type={Type} placeholder={Placeholder} id={Id} name={Name} required/>
    )
}

export default Input;