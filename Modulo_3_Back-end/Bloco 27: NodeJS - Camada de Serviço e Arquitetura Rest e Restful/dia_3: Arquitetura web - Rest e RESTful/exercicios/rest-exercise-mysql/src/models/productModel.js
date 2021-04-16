const connection = require('../../config/connection');

const add = async (name, brand) => {  
    const [
      result,
    ] = await connection.query(
      `INSERT INTO products (name, brand) VALUES (?, ?);`,
      [name, brand]
    );

    return { id: result.insertId, name, brand };
};

const getAll = async () => {
    const [rows] = await connection.query('SELECT * FROM products');
    return rows;
};

const getById = async (id) => {
    const [result] = await connection.query('SELECT * FROM products WHERE id = ?', [id]);
    return result[0];
};

const update = async (id, name, brand) => {
    await connection.query('UPDATE products SET name = ?, brand = ? WHERE id = ?', [name, brand, id])
};

const exclude = async (id) => {
    await connection.query('DELETE FROM products WHERE id = ?', [id])
};

module.exports = {
  add,
  getAll,
  getById,
  update,
  exclude
};
