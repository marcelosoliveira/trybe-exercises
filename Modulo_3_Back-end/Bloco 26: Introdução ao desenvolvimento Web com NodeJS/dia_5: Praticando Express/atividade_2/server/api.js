const fetch = require('node-fetch');

const btcPriceApi = async () => {
    try {
        const data = await fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json').then((d) => d.json());

        return data;

    } catch (error) {
        return {
            code: "Status Code " + 500 + "! Error: Internal Server Error",
            message: `Api not found! Error: ${error.message}`
        };           
    };
};

module.exports = btcPriceApi;
