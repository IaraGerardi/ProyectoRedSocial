//Modelos de tablas que vamos a utilizar
const UserModel = require('../models/UserModel.js');


//Configuración que traera toda la lista de usuarios.
const getAllUserAdmin = async (req, res) => {
    try {
        const user = await UserModel.findAll();
        res.json(user);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const updateUserAdmin = async (req, res) => {
    try {
        const userEdit = UserModel.findOne({
            where: { id: req.params.id } //probar req.body si no funciona
        }); //buscamos el id que "creo" vendría por la ruta para luego poder utilizar el avatar que tiene en base de datos. Así si el input es null deja el que ya tiene
        const user = req.body.user.toLowerCase()
        const pass = await bcryptjs.hash(req.body.pass, 10)
        const avatar = !(req.files[0]) ? userEdit.avatar : req.files[0].filename //En caso de ser "null" el input deja el avatar que ya tiene, de no ser asi sube el archivo con el filename
        const email = req.body.email
        await UserModel.update({
            user: user,
            pass: pass,
            avatar: avatar,
            email: email,
            rol: 'user'
        }, {
            where: { id: req.params.id }
        })
    } catch (error) {
        res.json({ message: error.message });
    }
}

const deleteUserAdmin = async (req, res) => {
    await userModel.destroy({
        where: { id: req.params.id }
    })
}

//Exportamos los modulos alfabeticamente
module.exports = {
    deleteUserAdmin,
    getAllUserAdmin,
    updateUserAdmin
}