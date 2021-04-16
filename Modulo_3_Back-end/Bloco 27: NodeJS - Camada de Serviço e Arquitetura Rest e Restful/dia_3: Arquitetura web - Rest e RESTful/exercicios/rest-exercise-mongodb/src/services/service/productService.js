const productModel = require('../../models/productModel');

const getAll = async () => {
    const products = await productModel.getAll();
    if (products.length === 0) return { message: "Products not found!" };

    return products;
}

const add = async (name, brand) => {
    if (!name || !brand) return { message: "Name ou brand is undefined!" };

    await productModel.add(name, brand);

    return { message: "Product created success!"}
}

const getById = async (id) => {
    if (!id) return { message: "Id is invalid!" };

    const product = await productModel.getById(id);

    if (!product) return { message: "Product not found!" };

    return product;
}

const update = async (id, name, brand) => {
    if (!id || !name || !brand) return { message: "Attributes is invalid!" };

    const product = await productModel.getById(id);

    if (!product) return { message: "Product not found!" };
    
    await productModel.update(id, name, brand);

    return {id, name, brand };
}

const exclude = async (id) => {
    if (!id) return { message: "Id is invalid!" };

    const product = await productModel.getById(id);

    if (!product) return { message: "Product not found!" };
    
    await productModel.exclude(id);
}

module.exports = {
    getAll,
    add,
    getById,
    update,
    exclude 
}