const userToken = require('./centralEventsErrorsToken.js');

const teste = async () => {
    const {result} = await userToken('bob', '123456789');
    console.log(result);
}

console.log(teste())