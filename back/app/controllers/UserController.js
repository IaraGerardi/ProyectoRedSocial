const jwt = require('jsonwebtoken')
const {promisify} = require('util')
const UserModel = require('../models/UserModel.js')
const bcryptjs = require('bcryptjs')
const {validationResult} = require('express-validator');
const db = require('../database/db.js')


exports.registerUser = async(req, res)=>{
    let errors = (validationResult(req));
    const {user,email} = req.body
    const pass = await bcryptjs.hash(req.body.pass, 10)
    if (errors.isEmpty()){
    try {
        await UserModel.create({
            user: user,
            pass: pass,
            email: email
        })
        await db.query("SET @counter = 0;")
        await db.query("UPDATE users SET id = @counter := @counter + 1 ORDER BY id")
        res.redirect("/")
    }catch (error) {
        res.json({message:error.message})
    }
}   else{
    console.log(errors)
    return res.json({errors:errors.errors})
    }
}


exports.login = async (req, res)=>{
    try {
        const user = req.body.user
        const pass = req.body.pass        
    
        if(!user || !pass ){
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
                const usuario = await UserModel.findAll({
                    where : {user:user}
                })
                if(  usuario.length == 0 || ! (await bcryptjs.compare(pass, usuario[0].pass)) ){
                    res.json({
                        alert: true,
                        alertTitle: "Error",
                        alertMessage: "Usuario y/o Password incorrectas",
                        alertIcon:'error',
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'login'    
                    })
                }else{
                    const id = usuario[0].id
                    req.session.userNew = {
                        id: usuario[0].id,
                        username: usuario[0].name,
                        apellido: usuario[0].apellido,
                        email: usuario[0].email,
                        avatar: usuario[0].avatar,
                        pass: usuario[0].pass
                    }
                    const token = jwt.sign({id:id}, process.env.JWT_SECRETO, {
                        expiresIn: process.env.JWT_TIEMPO_EXPIRA
                    })
                   console.log("TOKEN: "+token+" para el USUARIO : "+user)
    
                   const cookiesOptions = {
                        expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                        httpOnly: true
                   }
                   res.cookie('jwt', token, cookiesOptions)
                   res.render('login', {
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

    exports.isAuthenticated = async (req, res, next)=>{
        if (req.cookies.jwt) {
            try {
                const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO)
                const usuario = await UserModel.findAll({
                    where : {id : decodificada.id}
                })
                    if(!usuario){return next()}
                    req.user = usuario[0]
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
        res.redirect('/')
    } 