module.exports = (io) => io.on('connection', (socket) => {
  socket.on('likePost', ({ current }) => {
    let count = Number(current) + 1;
    io.emit('updateLikes', count);
  });

  socket.on('starPost', ({ current }) => {
    let count = Number(current) + 1;
    io.emit('updateStars', count);
  });
});
