import React from "react";
import { useState, useEffect } from "react";

// Components
import Boton from "./Boton";
import Input from "./Input"

// Style
import "./css/login.css"

function Login() {

    const [singIn, setSingIn] = useState(true);
    const [singUp, setSignUp] = useState(false);

    const setViewSingIn = () => {
        setSingIn(true)
        setSingIn(false)
    }
    const setViewSingUp = () => {
        setSignUp(true)
        setSingIn(false)
    }


    return (
        <div className="all-cont">

            <div class="container-login" id="container">

                <div class="form-container login">

                    <form className="form-login" method='POST'>
                        <h1 className="title">Crear Cuenta</h1>
                        <span className="coment">completar formulario para avanzar</span>
                        <Input
                            ClassInput="input-login"
                            Type="text"
                            Placeholder="Usuario"
                            Id="userReg"
                            Name="userReg" />

                        <Input
                            ClassInput="input-login"
                            Type="email"
                            Placeholder="Email"
                            Id="emailReg"
                            Name="emailReg" />

                        <Input
                            ClassInput="input-login"
                            Type="password"
                            Placeholder="Contraseña"
                            Id="passwordReg"
                            Name="passwordReg" />

                        <Input
                            ClassInput="input-login"
                            Type="password"
                            Placeholder="Repetir contraseña"
                            Id="password2Reg"
                            Name="password2Reg"
                        />

                        <Boton
                            Type="submit"
                            BtnClass="btn"
                            BtnNombre="Crear Cuenta"
                            Id=""

                        />
                    </form>
                </div>


                <div class="form-container register">
                    <form className="form-login" method='POST'>
                        <h1 className="title">¡Bienvenido!</h1>

                        <span className="coment">Ingresa desde tu cuenta</span>
                        <Input
                            ClassInput="input-login"
                            Type="email"
                            Placeholder="Nombre usuario o Email"
                            Id="userLog"
                            Name="userLog"
                        />

                        <Input
                            ClassInput="input-login"
                            Type="password"
                            Placeholder="Contraseña"
                            Id="passwordLog"
                            Name="passwordLog"
                        />

                        <a className="reload-paswword" href="#">¿Olvidaste tu contraseña?</a>
                        <Boton
                            Type="submit"
                            BtnClass="btn"
                            BtnNombre="Iniciar Sesión"
                            Id="" />
                    </form>
                </div>

                <div class="cont-front">
                    <div class="front">

                        <div class="front-panel front-left">

                            <h1 className="title">
                                ¡Bienvenido de vuelta!
                            </h1>

                            <p className="help-comment">
                                Ingresa para seguir posteando
                            </p>

                            <Boton
                                BtnClass="ghost btn"
                                Type=""
                                BtnNombre="Ingresar"
                                Id="signIn"
                                onClick={() => setViewSingUp} />
                        </div>

                        <div class="front-panel front-right">

                            <h1 className="title">
                                ¿Aún no tienes cuenta?
                            </h1>

                            <p className="help-comment">
                                ¡Registrate ya mismo!
                            </p>

                            <Boton
                                BtnClass="ghost btn"
                                Type=""
                                BtnNombre="Registrarse"
                                Id="signUp"
                                onClick={() => setViewSingIn} />
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Login;