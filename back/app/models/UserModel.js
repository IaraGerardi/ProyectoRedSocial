const db = require('../database/db.js');
const { DataTypes } = require('sequelize');

const UserModel = db.define('users',{
    user: {types: DataTypes.STRING},
    password: {types: DataTypes.STRING},
    email: {types: DataTypes.STRING},
    avatar: {types: DataTypes.STRING},
    rol: {types: DataTypes.STRING},
})

module.exports = UserModel;