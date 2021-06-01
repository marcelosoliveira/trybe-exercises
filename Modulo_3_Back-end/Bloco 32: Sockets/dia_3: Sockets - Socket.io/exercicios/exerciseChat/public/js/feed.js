const socket = window.io();

const iconLike = document.querySelector('#likeIcon');
const currentLikes = document.querySelector('#currentLikes');
const iconStar = document.querySelector('#starIcon');
const currentStars = document.querySelector('#currentStars');

iconLike.addEventListener('click', (event) => {
  event.preventDefault();
  socket.emit('likePost', { current: currentLikes.innerHTML });
  return false;
});

iconStar.addEventListener('click', (event) => {
  event.preventDefault();
  socket.emit('starPost', { current: currentStars.innerHTML });
  return false;
});

socket.on('updateLikes', (count) => currentLikes.innerHTML = count);
socket.on('updateStars', (count) => currentStars.innerHTML = count);
