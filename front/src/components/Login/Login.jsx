import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"


// Components
import Boton from "./Boton";
import Input from "./Input"


// Style
import "./css/login.css"
import { useEffect } from "react";




function Login() {


    const moverSlider = useRef(null);

    const moverRegister = () => {
        if (moverSlider.current.children.length > 0) {
            moverSlider.current.classList.add("right-panel-active")
        }
    }

    const moverLogin = () => {
        if (moverSlider.current.children.length > 0) {
            moverSlider.current.classList.remove("right-panel-active")
        }
    }





    const URI = 'http://localhost:8000/login';
    const URI2 = 'http://localhost:8000/logines';


    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordsec, setPasswordSec] = useState('')

    const [userLogeo, setuserLogeo] = useState('')
    const [passwordlogeo, setPasswordLogeo] = useState('')

    const [errors, setErrors] = useState([])
    useEffect(() => {

    })

    const navigate = useNavigate();


    const store = async (e) => {
        e.preventDefault()

        await axios.post(`${URI}`, { userReg: user, emailReg: email, passwordReg: password, password2Reg: passwordsec })

            .then((response) => {
                if (response.data.completado == "Registro Completado!") {
                    alert("Registro Completado!")
                        (navigate('/login'))

                } else if (response.data.errors.userReg == "Error el email ya esta registrado") {
                    alert(response.data.errors.userReg.msg);
                    setErrors(response.data);

                } else if (response.data.errors.emailReg == "Error el usuario ya esta registrado") {
                    alert(response.data.errors.emailReg.msg);
                    setErrors(response.data)
                } else if(response.data.errors.passwordReg == "Error el usuario ya esta registrado"){
                    alert(response.data.errors.passwordReg.msg)

                }
            })
            .catch(error => {
                console.log(error);
            })

    }


    const Logeo = async (e) => {
        e.preventDefault()
        await axios.get(`${URI2}`, { userLog: userLogeo, passwordLog: passwordlogeo })
        console.log("asd")
    }







    return (
        <div className="all-cont">


            {/* 
            <div> {errors.map((error) => (
                <ul key={error.alertMesagge}>
                    <li> {error.alertTitle} </li>
                    <li> {error.alertMessage} </li>
                </ul>))}
            </div> */}



            <div className="container-login" ref={moverSlider}>

                <div className="form-container login">


                    <span></span>

                    <form className="form-login"
                        onSubmit={store} >

                        <h1 className="title">Crear Cuenta</h1>
                        <span className="coment">completar formulario para avanzar</span>
                        <Input
                            ClassInput="input-login"
                            Type="text"
                            Placeholder="Usuario"
                            Id="userReg"
                            Name="userReg"
                            EventoInput={(e) => setUser(e.target.value)}
                        />




                        <Input
                            ClassInput="input-login"
                            Type="email"
                            Placeholder="Email"
                            Id="emailReg"
                            Name="emailReg"
                            EventoInput={(e) => setEmail(e.target.value)}
                        />

                        <Input
                            ClassInput="input-login"
                            Type="password"
                            Placeholder="Contraseña"
                            Id="passwordReg"
                            Name="passwordReg"
                            EventoInput={(e) => setPassword(e.target.value)}
                        />

                        <Input
                            ClassInput="input-login"
                            Type="password"
                            Placeholder="Repetir contraseña"
                            Id="password2Reg"
                            Name="password2Reg"
                            EventoInput={(e) => setPasswordSec(e.target.value)}
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

                    <form className="form-login" onSubmit={Logeo} >
                        <h1 className="title">¡Bienvenido!</h1>

                        <span className="coment">Ingresa desde tu cuenta</span>
                        <Input
                            ClassInput="input-login"
                            Type="text"
                            Placeholder="Nombre usuario o Email"
                            Id="userLog"
                            Name="userLog"
                            EventoInput={(e) => setuserLogeo(e.target.value)}
                        />

                        <Input
                            ClassInput="input-login"
                            Type="password"
                            Placeholder="Contraseña"
                            Id="passwordLog"
                            Name="passwordLog"
                            EventoInput={(e) => setPasswordLogeo(e.target.value)}
                        />
                   

                        <a className="reload-paswword" href="notenemoslink">¿Olvidaste tu contraseña?</a>
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
                                Evento={moverLogin}
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
                                Evento={moverRegister}
                            />
                        </div>


                    </div>
                </div>


            </div>


        </div>
    )
}

export default Login;