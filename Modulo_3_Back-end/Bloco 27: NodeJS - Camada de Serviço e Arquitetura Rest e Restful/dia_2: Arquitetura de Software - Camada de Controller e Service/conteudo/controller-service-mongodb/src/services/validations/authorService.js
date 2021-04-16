const Author = require('../../models/authorModel');
const { ObjectId } = require('mongodb');

const getNewAuthor = (authorData) => {
    const { id, firstName, middleName, lastName } = authorData;

    const fullName = [firstName, middleName, lastName]
        .filter((name) => name)
        .join(' ');

    return {
        id,
        firstName,
        middleName,
        lastName,
        name: fullName,
    };
};

const isValid = (firstName, middleName, lastName) => {
    if (!firstName || typeof firstName !== 'string') return false;
    if (!lastName || typeof lastName !== 'string') return false;
    if (middleName && typeof middleName !== 'string') return false;

    return true;
};

const getAll = async () => {
    const authors = await Author.getAll();

    return authors.map(getNewAuthor);
};

const findById = async (id) => {
    if (!ObjectId.isValid(id)) return { message: "Id is not valid!"};
     
    const author = await Author.findById(id);

    if (!author) return null;

    const { firstName, middleName, lastName } = author;

    return getNewAuthor({ id, firstName, middleName, lastName });
}

const create = async (firstName, middleName, lastName) => {
    const userValid = isValid(firstName, middleName, lastName);

    if(!userValid) return false;

    const { insertedId } = await Author.create(firstName, middleName, lastName);

    return getNewAuthor({
        id: insertedId,
        firstName,
        middleName,
        lastName
    });
}

module.exports = {
    getAll,
    findById,
    create,
};