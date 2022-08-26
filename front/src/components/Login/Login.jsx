import React from "react";
import { useState, useEffect } from "react";

// Components
import Boton from "./Boton";
import Input from "./Input"

// Style
import "./css/login.css"

function Login() {

    // const [login, setLogin] = useState();
    // useEffect(() => {
    //     obtenerDatos()
    // },[])

    // const obtenerDatos = async () => {
    //     const datos = await fetch("localhost:8000/login")
    //     const user = await datos.post();
    //     setLogin(login)

    // }

    // obtenerDatos();


    const URI = 'http://localhost:8000/login/';

    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordsec, setPasswordSec] = useState('')


    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await fetch.post(URI, { userReg: user, emailReg: email, passwordReg: password, password2Reg: passwordsec })

    }

    store();

    // DESCOMENTAR LO DE ABAJO

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });

    // DESCOMENTAR LO DE ARRIBA

    return (
        <div className="all-cont">

            <div className="container-login" id="container">

                <div className="form-container login">

                    <form className="form-login" method='POST' onSubmit={store}>
                        <h1 className="title">Crear Cuenta</h1>
                        <span className="coment">completar formulario para avanzar</span>
                        {/* <Input
                            ClassInput="input-login"
                            Type="text"
                            Placeholder="Usuario"
                            Id="userReg"
                            Name="userReg"
                            onChange={(e) => setUser(e.target.value)}
                        /> */}
                        <input type="text" className="input-login" placeholder="Usuario" id="userReg" name="userReg"
                            onChange={(e) => setUser(e.target.value)} />

                        <Input
                            ClassInput="input-login"
                            Type="email"
                            Placeholder="Email"
                            Id="emailReg"
                            Name="emailReg"
                            onChange={(e) => setEmail(e.target.value)} />

                        <Input
                            ClassInput="input-login"
                            Type="password"
                            Placeholder="Contraseña"
                            Id="passwordReg"
                            Name="passwordReg"
                            onChange={(e) => setPassword(e.target.value)} />

                        <Input
                            ClassInput="input-login"
                            Type="password"
                            Placeholder="Repetir contraseña"
                            Id="password2Reg"
                            Name="password2Reg"
                            onChange={(e) => setPasswordSec(e.target.value)}
                        />

                        <Boton
                            Type="submit"
                            BtnClass="btn"
                            BtnNombre="Crear Cuenta"
                            Id=""

                        />
                    </form>
                </div>


                <div className="form-container register">
                    <form className="form-login" method='POST'>
                        <h1 className="title">¡Bienvenido!</h1>

                        <span className="coment">Ingresa desde tu cuenta</span>
                        <Input
                            ClassInput="input-login"
                            Type="text"
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

                <div className="cont-front">
                    <div className="front">

                        <div className="front-panel front-left">

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
                            // onClick={() => setViewSingUp}
                            />
                        </div>

                        <div className="front-panel front-right">

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
                            // onClick={() => setViewSingIn} 
                            />
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Login;