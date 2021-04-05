const multiMiddleware = (req, res, next) => {
    const { operacao, numero1, numero2 } = req.params;

    if ( operacao === 'multi') res.status(200).send({ result: `${ numero1 } x ${ numero2 } = ${ numero1 * numero2 } `});

    next();
}

const divMiddleware = (req, res, next) => {
    const { operacao, numero1, numero2 } = req.params;

    if(numero2 === "0") res.status(200).send({
        message: "O numero divisor não pode ser 0"
    });


    if ( operacao === 'div') res.status(200).send({
        result: `${ numero1 } / ${ numero2 } = ${ numero1 / numero2 } `
    });

    next();
}

const subMiddleware = (req, res, next) => {
    const { operacao, numero1, numero2 } = req.params;

    if ( operacao === 'sub') res.status(200).send({ result: `${ numero1 } - ${ numero2 } = ${ numero1 - numero2 } `});

    next();
}

const sumMiddleware = (req, res, next) => {
    const { operacao, numero1, numero2 } = req.params;

    if ( operacao === 'sum') res.status(200).send({ result: `${ numero1 } + ${ numero2 } = ${ parseInt(numero1) + parseInt(numero2) } `});

    next();
}

module.exports = { multiMiddleware, divMiddleware, subMiddleware, sumMiddleware };
