//Modelos de tablas que vamos a utilizar
const UserModel = require('../models/UserModel.js');
const bcryptjs = require('bcryptjs');


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

        //Bodys de los inputs a modificar
        const user = req.body.userEditAdmin ? req.body.userEditAdmin : userEdit.user;
        const email = req.body.emailEditAdmin ? req.body.emailEditAdmin : userEdit.email;
        const rol  = req.body.rolEditAdmin ? req.body.rolEditAdmin : userEdit.rol;
        //Si el input tiene contenido hashea el nuevo pass, sino usa el que ya existe
        const password = (req.body.passwordEditAdmin).length>0 ? await bcryptjs.hash(req.body.passwordEditAdmin, 10) : userEdit.password //if ternario en caso de ser menor a 0 el pass deja el mismo que antes
        const avatar = req.files ? req.files[0].filename : userEdit.avatar; //En caso de ser "null" el input deja el avatar que ya tiene, de no ser asi sube el archivo con el filename
        //Fin de bodys


        await UserModel.update({
            user: user/* .toLowerCase() */,     //anda
            password: password,                    //anda
            avatar: avatar,
            email: email,                 //Anda
            rol: rol                      //anda
        }, {
            where: { id: req.params.id }
        });
        res.json({ message: "Succefuly updated" })
    } catch (error) {
        res.json({ message: error.message });
    }
}

const deleteUserAdmin = async (req, res) => {
try {
    await UserModel.destroy({
        where: { id: req.params.id }
    })
    res.json({ message: "Succefuly deleted" });
} catch (error) {
    res.json({ message: error.message });
}
}

//Exportamos los modulos alfabeticamente
module.exports = {
    deleteUserAdmin,
    getAllUserAdmin,
    updateUserAdmin
}