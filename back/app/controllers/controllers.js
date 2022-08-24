const {validationResult} = require('express-validator');
const RegisterModel = require("../models/RegisterModel.js")
const bcryptjs = require('bcryptjs')
const db = require("../database/db.js")

exports.registerUser = async(req, res)=>{
    let errors = (validationResult(req));
    const {user,email} = req.body
    const pass = await bcryptjs.hash(req.body.pass, 10)
    if (errors.isEmpty()){
    try {
        await RegisterModel.create({
            user: user,
            pass: pass,
            email: email
        })
        await db.query("SET @counter = 0;")
        await db.query("UPDATE users SET id = @counter := @counter + 1 ORDER BY id")
        res.redirect("/login")
    }catch (error) {
        res.json({message:error.message})
    }
}   else{
    console.log(errors)
    return res.render ('register', {errors:errors.errors})
    }
}