const { create, getAll } = require('../models/client');
const Users = require('../models/user');
const { formatDate, randomUser } = require('../utils/getUserAndTime');

const userOnline = async (socket, nickname, io) => {
  await Users.create(socket.id, nickname);
  const users = await Users.getAll();
  io.emit('newUserConnect', users);
};

const sendMessage = (io, socket) => {
  socket.on('message', ({ chatMessage, nickname }) => {
    io.emit('message', `${formatDate()} - 
    <strong>${nickname}:</strong> ${chatMessage}`);
    create(chatMessage, nickname, formatDate());
  });
};

const messageList = async (socket) => {
  const messages = await getAll();
  messages.forEach(({ message, nickname, timestamp }) => {
    socket.emit('persistMessage', `${timestamp} - 
    <strong>${nickname}:</strong> ${message}`);
  });
};

const updateUser = (socket, io) => {
  socket.on('updatedUser', async (user) => {
    await Users.update(user);
    const users = await Users.getAll();
    io.emit('newUserConnect', users);
  });
};

const disconnectUser = (socket, io) => {
  socket.on('disconnect', async () => {
    await Users.removeById(socket.id);
    const users = await Users.getAll();
    io.emit('newUserConnect', users);
  });
};

module.exports = (io) => io.on('connection', (socket) => {
  const nickname = randomUser();
  socket.emit('userOnline', nickname);
  userOnline(socket, nickname, io);
  updateUser(socket, io);
  sendMessage(io, socket);
  messageList(socket);
  disconnectUser(socket, io); 
});
