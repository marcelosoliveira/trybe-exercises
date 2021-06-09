const crypto = require('crypto');

const options = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/Sao_Paulo',
  PatternParts: 'shared',
  hourCycle: 'h12',
};
  
const formatDate = () => {
  const date = new Intl.DateTimeFormat('pt-BR', options)
    .format(Date.parse(Date()));
  const dateFormat = date.toString().split('/').join('-');

  return dateFormat;
};

const randomUser = () => `User-${crypto.randomBytes(6).toString('hex').substr(1)}`;

module.exports = {
  formatDate,
  randomUser,
};
