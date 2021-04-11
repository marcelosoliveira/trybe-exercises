const connection = require('../../config/connection');

const convertFields = (userData) => {
    return {
        id: userData.id,
        firstName: userData.first_name,
        lastName: userData.last_name,
        email: userData.email
    }
}

const create = async (body) => {
    const { firstName, lastName, email, password } = body;
    const [users] = await connection.execute(
        'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)', [firstName, lastName, email, password],
    );
   return { id: users.insertId, firstName, lastName, email };
}

const findAll = async () => {
    const [users] = await connection.query(
        'SELECT * FROM  users_crud.users'
    );

    return users.map(convertFields);
}

const findById = async (id) => {
    const [users] = await connection.query(
        'SELECT * FROM users_crud.users WHERE id = ?', [Number(id)]
    );

    if (users.length < 1) return { message: "Id is not valid!"};

    return users.map(convertFields)[0];
}

const updateUser = async (body, id) => {
    const { firstName, lastName, email, password } = body;

    const [users] = await connection.query(
        'SELECT * FROM users_crud.users WHERE id = ?', [Number(id)],
    );

    if (users.length < 1) return { message: "Id is not valid!"};

    await connection.query(
        'UPDATE users_crud.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?', [firstName, lastName, email, password, Number(id)],
    );
    
    return { id: Number(id), firstName, lastName, email };
}

const deleteUser = async (id) => {
    const [users] = await connection.query(
        'SELECT * FROM users_crud.users WHERE id = ?', [Number(id)],
    );

    if (users.length < 1) return { message: "Id is not valid!"};

    await connection.query(
        'DELETE FROM users_crud.users WHERE id = ?', [Number(id)],
    );

    return { message: "Usuário excluído com sucesso!" };
}

module.exports = { 
    create,
    findAll,
    findById,
    updateUser,
    deleteUser,       
}
