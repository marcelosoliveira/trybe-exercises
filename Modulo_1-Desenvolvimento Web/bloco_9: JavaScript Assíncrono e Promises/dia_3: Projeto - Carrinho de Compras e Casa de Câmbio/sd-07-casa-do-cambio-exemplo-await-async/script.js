window.onload = () => {
  setupEventHandlers();
}

const setupEventHandlers = () => {
  const searchButton = document.querySelector('#search-button');
  searchButton.addEventListener('click', handleSearchEvent);
}

const handleSearchEvent = () => {
  const currency = document.querySelector('#currency-input').value;
  const currencyUpperCased = currency.toUpperCase();

  cleanList();
  
  if (currency === '') {
    showAlert('A moeda deve ser informada');
  } else if (currencyUpperCased === 'BTC') {
    fetchBtc();
  } 
  else {
    // fetchCurrency(currencyUpperCased);
    fetchCurrencyAwaitAsync(currencyUpperCased);
  }
}

const showAlert = (message) => {
  window.alert(message);
}

// const fetchCurrency = (currency) => {
//   const endpoint = `https://api.ratesapi.io/api/latest?base=${currency}`;

//   fetch(endpoint)
//     .then((response) => response.json())
//     .then((object) => {
//       if (object.error) {
//         throw new Error(object.error)
//       } else {
//         handleRates(object.rates);
//       }
//     })
//     .catch((error) => showAlert(error));
// }

const fetchBtc = (() => {
  return new Promise(() => {
    const endpoint = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    fetch(endpoint)
      .then((res) => res.json())
      .then((res) => {
        const btcValues = Object.values(res.bpi);
        btcValues.forEach(({code, rate}) => renderRate([code, rate]) );  
      });
  });
});


const fetchCurrencyAwaitAsync = async (currency) => {
  const endpoint = `https://api.ratesapi.io/api/latest?base=${currency}`;

  try {
    const response = await fetch(endpoint);
    const object = await response.json();

    if (object.error) {
      throw new Error(object.error);
    } else {
      handleRates(object.rates);
    }
  } catch (error) {
    showAlert(error);
  }
}

const handleRates = (rates) => {
  const ratesEntries = Object.entries(rates).sort();

  // ratesEntries.forEach(renderRate);
  ratesEntries.forEach((entry) => renderRate(entry));
}

const renderRate = ([ currency, value ]) => {
  const ul = document.querySelector('#currency-list');
  const li = document.createElement("li");
  li.innerHTML = `${currency}: ${value}`;
  ul.appendChild(li);
}

const cleanList = () => {
  const ul = document.querySelector('#currency-list');
  ul.innerHTML = '';
}

const cleanButton = document.querySelector('#clean-button');
cleanButton.addEventListener('click', cleanList);


