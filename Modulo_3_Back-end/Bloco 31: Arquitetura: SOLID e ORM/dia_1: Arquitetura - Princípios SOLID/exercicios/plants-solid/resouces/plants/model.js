const connection = require("../../config/connection");

const savePlants = async (breed, needsSun, origin, specialCare, size) => {
  await connection.execute(
    `INSERT INTO plants 
        (breed, needsSun, origin, specialCare, size) 
        VALUES (?, ?, ?, ?, ?)`,
    [breed, needsSun, origin, specialCare, size]
  );
};

const getPlants = () => {
  const [[plant]] = await conn.execute("SELECT * FROM plants");
  return plant;
};

const getPlantById = (id) => {
  const [[plant]] = await conn.execute(
    "SELECT * FROM plants WHERE plants.id = ?;",
    [id]
  );
  return plant;
};

const removePlantById = (id) => {
  cconst[[plant]] = await conn.execute(
    "DELETE FROM plants WHERE plants.id = ?;",
    [id]
  );
};

module.exports = {
  savePlants,
  getPlants,
  getPlantById,
  removePlantById,
};
