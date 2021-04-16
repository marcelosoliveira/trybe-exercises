const ufOrCityValidation = (log) => {
    if (!log) return undefined;

    if (log.length < 3) return true;

    return false;
}

module.exports = ufOrCityValidation;
