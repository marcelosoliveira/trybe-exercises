const axios = require('axios').default;
const fetch = require('fetch')

const userToken = async (userName, password) => {

    const requestTokenUrl = 'http://central-events-errors.herokuapp.com/oauth/token'

    const config = {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + Buffer.from('admin:admin').toString('base64')
        },
        body: 'grant_type=password'
          + '&username=' + userName
          + '&password=' + password,
    };
    try {
        const response = await axios.post(requestTokenUrl, config);
        const { access_token } = await response.json();
        return access_token;      
    }catch(error) {
        console.error(error);
    }
  }

module.exports = userToken;
