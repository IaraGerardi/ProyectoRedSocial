import React from "react";
import Boton from "./Boton";
import Input from "./Input"
import "./css/login.css"

function Login() {


  
    // const signUpButton = document.getElementById('signUp');
    // const signInButton = document.getElementById('signIn');
    // const container = document.getElementById('container');
  
  
    // signUpButton.addEventListener('click', () => {
    //   container.classList.add("right-panel-active");
    // });
  
    // signInButton.addEventListener('click', () => {
    //   container.classList.remove("right-panel-active");
    // });
  


    return (
        <div className="all-cont">

            <div class="container-login" id="container">

                <div class="form-container login">

                    <form method='POST'>
                        <h1 className="title">Crear Cuenta</h1>
                        <span className="coment">completar formulario para avanzar</span>
                        <Input
                            Type="text"
                            Placeholder="Usuario"
                            Id="userReg"
                            Name="userReg" />

                        <Input
                            Type="email"
                            Placeholder="Email"
                            Id="emailReg"
                            Name="emailReg" />

                        <Input
                            Type="password"
                            Placeholder="Contraseña"
                            Id="passwordReg"
                            Name="passwordReg" />

                        <Input
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
                    <form method='POST'>
                        <h1 className="title">¡Bienvenido!</h1>

                        <span className="coment">Ingresa desde tu cuenta</span>
                        <Input
                            Type="email"
                            Placeholder="Nombre usuario o Email"
                            Id="userLog"
                            Name="userLog"
                        />

                        <Input
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
                            <h1 className="title">¡Bienvenido de vuelta!</h1>
                            <p className="help-comment">Ingresa para seguir posteando</p>
                            <Boton
                                BtnClass="ghost btn"
                                Type=""
                                BtnNombre="Ingresar"
                                Id="signIn" />
                        </div>

                        <div class="front-panel front-right">
                            <h1 className="title">¿Aún no tienes cuenta?</h1>
                            <p className="help-comment">¡Registrate ya mismo!</p>
                            <Boton
                                BtnClass="ghost btn"
                                Type=""
                                BtnNombre="Registrarse"
                                Id="signUp" />
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Login;