const client = window.io();

let newUser = {};

const messageId = '#userMessages';
const userUpdate = document.querySelector(messageId);

const createMessage = (chatMessage) => {
  const messageElement = document.createElement('div');
  messageElement.classList.add('msg');
  const messageComponent = `
    <div class="msg-bubble" data-testid="message">     
      <span class="msg-text">${chatMessage}</span>
    </div>
  `;
  messageElement.innerHTML = messageComponent;
  return messageElement;
};

const createUser = (from, message) => {
  const userElement = document.createElement('div');
  userElement.classList.add('msg');
  const userComponent = `
    <div class="msg-bubble" id="msg-user">
      <span class="msg-text">${message}</span>     
      <span data-testid="online-user" class="msg-info-name" id="nickname">${from}</span>
    </div>
  `;
  userElement.innerHTML = userComponent;
  return userElement;
};

document.querySelector('#button-user').addEventListener('click', (e) => {
  e.preventDefault();
  const textNickName = document.querySelector('#userInput');
  const userNickName = document.querySelectorAll('#nickname')[0];
  if (!textNickName.value) return alert('Field cannot be blank');
  userNickName.innerHTML = textNickName.value;
  newUser.nickname = textNickName.value;
  textNickName.value = '';
  client.emit('updatedUser', newUser);
});

document.querySelector('#button-message').addEventListener('click', (e) => {
  e.preventDefault();
  const { nickname } = newUser;
  const textMessage = document.querySelector('#messageInput');
  if (!textMessage.value) return alert('Field cannot be blank');
  client.emit('message', { chatMessage: textMessage.value, nickname });
  textMessage.value = '';
});

client.on('userOnline', (nickname) => {
  newUser = { nickname };
});

client.on('newUserConnect', (users) => {
  newUser = users.find((user) => user.nickname === newUser.nickname);
  console.log(users);
  userUpdate.innerHTML = '';

  const { nickname: name } = newUser;
  const newMessageUser = createUser(name, 'Entered the chat!');
  document.querySelector(messageId).append(newMessageUser);
  users.filter((user) => user.id !== newUser.id)
    .forEach(({ nickname: nick }) =>
    document.querySelector(messageId).append(createUser(nick, 'Entered the chat!')));
});

client.on('message', (chatMessage) => {
  const newMessageUser = createMessage(chatMessage);
  document.querySelector('#listMessages').append(newMessageUser);
});

client.on('persistMessage', (chatMessage) => {
  const newMessageUser = createMessage(chatMessage);
  document.querySelector('#listMessages').append(newMessageUser);
});
