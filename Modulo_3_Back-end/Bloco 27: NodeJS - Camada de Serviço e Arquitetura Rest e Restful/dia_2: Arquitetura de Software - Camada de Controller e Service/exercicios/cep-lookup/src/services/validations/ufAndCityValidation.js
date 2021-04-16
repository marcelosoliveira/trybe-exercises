const ufAndCityValidation = async (uf, cidade) => {
    if (!uf) return cidade;

    if (!cidade) return uf;

    if (!uf && !cidade) return undefined;

}

module.exports = ufAndCityValidation;
