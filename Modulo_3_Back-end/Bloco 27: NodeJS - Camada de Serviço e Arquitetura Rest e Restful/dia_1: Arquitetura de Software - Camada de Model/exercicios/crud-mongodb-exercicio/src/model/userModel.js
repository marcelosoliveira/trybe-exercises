const connection = require('../../config/connection');
const { ObjectId } = require('mongodb');

const create = async (body) => {
    const { firstName, lastName, email, password } = body;
    const user = await connection()
    .then((db) => db.collection('user')
    .insertOne({ firstName, lastName, email, password }));

    return { id: user.insertedId, firstName, lastName, email};
}

const findAll = async () => {
    return connection()
    .then((db) => db.collection('user').find().toArray());
}

const findById = async (id) => {
    if (!ObjectId.isValid(id)) return { message: "Id is not valid!"};

    return connection()
    .then((db) => db.collection('user').findOne(ObjectId(id)));
}

const updateUser = async (body, id) => {
    const { firstName, lastName, email, password } = body;
    if (!ObjectId.isValid(id)) return { message: "Id is not valid!"};

    connection()
    .then((db) => db.collection('user').updateMany({ _id: ObjectId(id) },
        { $set: { firstName, lastName, email, password }}));
    
    return { id, firstName, lastName, email };
}

const deleteUser = async (id) => {
    if (!ObjectId.isValid(id)) return { message: "Id is not valid!"};

    connection()
    .then((db) => db.collection('user').deleteOne({ _id: ObjectId(id) }));

    return { message: "Usuário excluído com sucesso!" };
}

module.exports = { 
    create,
    findAll,
    findById,
    updateUser,
    deleteUser,       
}
