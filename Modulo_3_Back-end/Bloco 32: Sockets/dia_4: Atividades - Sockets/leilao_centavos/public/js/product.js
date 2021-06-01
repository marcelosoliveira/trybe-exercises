const socket = window.io();

const buttonNot = document.querySelector('#button-not');
const buttonTv = document.querySelector('#button-tv');
const buttonCel = document.querySelector('#button-cel');
const priceCel = document.querySelector('#price-span-cel');
const priceTv = document.querySelector('#price-span-tv');
const priceNot = document.querySelector('#price-span-not');

buttonCel.addEventListener('click', (event) => {
  event.preventDefault();
  socket.emit('cel', { price: Number.parseFloat(priceCel.innerHTML) });
  return false;
});

buttonTv.addEventListener('click', (event) => {
  event.preventDefault();
  socket.emit('tv', { price: Number.parseFloat(priceTv.innerHTML) })
  return false;
});

buttonNot.addEventListener('click', (event) => {
  event.preventDefault();
  socket.emit('not', { price: Number.parseFloat(priceNot.innerHTML) })
  return false;
});

const buttonDisable = (price, buttons) => {
  if (price >= 100) {
    buttons.setAttribute('disabled', 'true');
    buttons.innerHTML = 'Produto arrematado';
  }
};

socket.on('serverCel', (price) => {
  buttonDisable(price, buttonCel);
  priceCel.innerHTML = price.toFixed(2) ;
});
socket.on('serverTv', (price) => {
  buttonDisable(price, buttonTv);
  priceTv.innerHTML = price.toFixed(2);    
});
socket.on('serverNot', (price) => {
  buttonDisable(price, buttonNot);
  priceNot.innerHTML = price.toFixed(2)
});
