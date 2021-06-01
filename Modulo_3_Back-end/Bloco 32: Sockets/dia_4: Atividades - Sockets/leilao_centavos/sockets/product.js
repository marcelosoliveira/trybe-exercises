module.exports = (io) => io.on('connection', (socket) => {

  socket.on('cel', ({ price }) => {
    price += 5;
    io.emit('serverCel', price);
  });

  socket.on('tv', ({ price }) => {
   price += 5;
    io.emit('serverTv', price);
  });

  socket.on('not', ({ price }) => {
    price += 5;
    io.emit('serverNot', price);
  });

});
