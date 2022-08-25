const jwt = require('jsonwebtoken')
const {promisify} = require('util')
const UserModel = require('../models/UserModel.js')
const bcryptjs = require('bcryptjs')
const {validationResult} = require('express-validator');
const db = require('../database/db.js')
const { Op } = require("sequelize")


exports.registerUser = async(req, res)=>{
    let errors = (validationResult(req));
    const {userReg,emailReg} = req.body
    const passwordReg = await bcryptjs.hash(req.body.passwordReg, 10)
    if (errors.isEmpty()){
    try {
        await UserModel.create({
            user: userReg,
            password: passwordReg,
            email: emailReg,
            rol: "user"
        })
        await db.query("SET @counter = 0;")
        await db.query("UPDATE users SET id = @counter := @counter + 1 ORDER BY id")
        res.redirect("/login")
    }catch (error) {
        res.json({message:error.message})
    }
}   else{
    console.log(errors)
    return res.json({errors:errors.errors})
    }
}


exports.loginUser = async (req, res)=>{
    try {
        const userLog = req.body.userLog
        const passwordLog = req.body.passwordLog
        if(!userLog || !passwordLog ){
            res.json({
                alert:true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese un usuario y password",
                alertIcon:'info',
                showConfirmButton: true,
                timer: false,
                ruta: 'login'
            })
        }else{
                const user = await UserModel.findAll({ 
                    where: {
                        [Op.or]:
                        [{
                            user: userLog
                        }, {
                            email: userLog
                        }],
                    }
                })
                if(  user.length == 0 || ! (await bcryptjs.compare(passwordLog, user[0].password)) ){
                    res.json({
                        alert: true,
                        alertTitle: "Error",
                        alertMessage: "Usuario y/o password incorrectas",
                        alertIcon:'error',
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'login'    
                    })
                }else{
                    const id = user[0].id
                    req.session.userNew = {
                        id: user[0].id,
                        username: user[0].name,
                        apellido: user[0].apellido,
                        email: user[0].email,
                        avatar: user[0].avatar,
                        password: user[0].password
                    }
                    const token = jwt.sign({id:id}, process.env.JWT_SECRETO, {
                        expiresIn: process.env.JWT_TIEMPO_EXPIRA
                    })
                   console.log("TOKEN: "+token+" para el USUARIO : "+userLog)
    
                   const cookiesOptions = {
                        expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                        httpOnly: true
                   }
                   res.cookie('jwt', token, cookiesOptions)
                   res.json({
                        alert: true,
                        alertTitle: "Conexión exitosa",
                        alertMessage: "¡LOGIN CORRECTO!",
                        alertIcon:'success',
                        showConfirmButton: false,
                        timer: 800,
                        ruta: ''
                   })
                }
            
        }
    } catch (error) {
        console.log(error)
    }
    }

    exports.userLogged = async (req, res, next)=>{
        if (!req.cookies.jwt) {
            console.log("hola")
        }else{
            res.redirect('/'); console.log("Usuario logueado, redirigiendo a home")        
        }
    }

    exports.isAuthenticated = async (req, res, next)=>{
        if (req.cookies.jwt) {
            try {
                const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO)
                const user = await UserModel.findAll({
                    where : {id : decodificada.id}
                })
                    if(!user){return next()}
                    req.user = user[0]
                    return next()
            
            } catch (error) {
                console.log(error)
                return next()
            }
        }else{
            res.redirect('/login')        
        }
    }
    
    exports.logout = (req, res)=>{
        res.clearCookie('jwt')   
        res.redirect('/login')
    } 