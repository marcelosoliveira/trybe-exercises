const User = require('../model/userModel');

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);

        res.status(201).send(user)
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });        
    }
}

const findAll = async (req, res) => {
    try {
        const users = await User.findAll();

        res.status(200).send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });          
    }
}

const findById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) return res.status(404).send({
            error: true,
            message: "Usuário não encontrado",
        });

        res.status(200).send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });          
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) return res.status(404).send({
            error: true,
            message: "Usuário não encontrado",
        });

        const userUpdate = await User.updateUser(req.body, req.params.id);

        res.status(200).send(userUpdate);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });          
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) return res.status(404).send({
            error: true,
            message: "Usuário não encontrado",
        });

        const userDelete = await User.deleteUser(req.params.id);

        res.status(200).send(userDelete);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });          
    }
}

module.exports = {
    createUser,
    findAll,
    findById,
    updateUser,
    deleteUser,
}
