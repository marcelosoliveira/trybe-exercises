const isValid = (cep) => {
    if (cep && cep.match(/^\d{5}-?\d{3}$/)) {
        return true;
    }

    return false;
}

module.exports = isValid;
