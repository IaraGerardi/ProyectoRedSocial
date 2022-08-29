const jwt = require('jsonwebtoken')
const {promisify} = require('util')
const UserModel = require('../models/UserModel.js')
const bcryptjs = require('bcryptjs')
const {validationResult} = require('express-validator');
const db = require('../database/db.js')
const { Op } = require("sequelize")


exports.registerUser = async(req, res)=>{
    let errors = (validationResult(req));
    const {userReg,emailReg, password2Reg} = req.body
    const avatar = "default.jpg"
    const passwordReg = await bcryptjs.hash(req.body.passwordReg, 10)
    if (errors.isEmpty() && await bcryptjs.compare(password2Reg, passwordReg)){
    try {
        await UserModel.create({
            user: userReg,
            password: passwordReg,
            email: emailReg,
            avatar: avatar,
            rol: "user"
        })
        await db.query("SET @counter = 0;")
        await db.query("UPDATE users SET id = @counter := @counter + 1 ORDER BY id")
        res.json({completado: "Registro Completado!"})
    }catch (error) {
        res.json({message:error.message})
    }
} else {
        console.log(errors)
        return res.json({errors:errors.errors.mapped()})
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
        if (req.cookies.jwt) {
            try {
                const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO)
                const user = await UserModel.findAll({
                    where : {id : decodificada.id}
                }) 
                console.log(decodificada)
                    if(!user){res.redirect('/'); console.log("Usuario logueado, redirigiendo a home")}
                    req.user = user[0]
                    res.redirect('/'); console.log("Usuario logueado, redirigiendo a home") 
            
            } catch (error) {
                console.log(error)
                return next()
            }
        }else{
            console.log("El usuario debe estar logueado")
            return next()
        }
    }

    exports.userToProfile = async (req, res, next)=>{
        if (req.cookies.jwt) {
            const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO)
            const users = await UserModel.findAll({
                where : {id: decodificada.id}
            })
            req.user = users[0].user
            console.log(req.user)
         if(req.params.user == req.user){
            console.log("podes pasar")
            return next()
        } else {
            console.log("No podes pasar1")
            res.redirect(`/profile/${req.user}`) //cuando vaya a un perfil que no es el propio, lo va a redirigir a lo que pongamos aca
        }
        } else{
            console.log("No esta logueado")
            res.redirect("/login")
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

    exports.getUserEdit = async (req, res) => {
        try {
            const userEdit = req.params.user
            const userFind = await UserModel.findOne({ 
                where: {
                    user: userEdit
                }
            })
            res.json(userFind);
        } catch (error) {
            res.json({ message: error.message });
        }
    };

    exports.updateUser = async(req, res)=>{
        let errors = (validationResult(req));
        if (errors.isEmpty()){
        try {  
            const userEdit = await UserModel.findOne({
                where: { user: req.params.user }
            });
            const user = req.body.userEdit.toLowerCase()
            const password = await bcryptjs.hash(req.body.passwordEdit, 10)
            const email = req.body.emailEdit
            const avatar = req.files ? req.files[0].filename : userEdit.avatar
            await UserModel.update ({
                user: user,
                password: password,
                email: email,
                avatar: avatar
            }, {where:{user:req.params.user}})
            res.json({
                "message": "registro actualizado correctamente"
            })
            
        } catch (error) {
            res.json({message:error.message})

        }
    } else {
        res.json(errors.mapped())
    }
}
