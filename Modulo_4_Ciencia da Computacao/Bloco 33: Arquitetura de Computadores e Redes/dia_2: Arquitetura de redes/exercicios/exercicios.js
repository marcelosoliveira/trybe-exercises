/* Comandos no terminal

Exercicio 1

curl localhost:3000

curl -X GET localhost:3000

curl -X POST \
-H 'Content-Type: application/json' \
-d '{ "foo": "bar" }' \
localhost:3000

curl --request POST \
--header 'Content-Type: application/json' \
--header 'Authorization: ApiKey EXAMPLE-TOKEN' \
--data '{ "foo": "bar" }' \
localhost:3000

Exercicio 2

curl google.com

curl -L google.com

Exercicios3

wget betrybe.com

Exercicio 4
 */
const net = require('net');

const server = net.createServer((socket) => {
  socket.write('Olá, client!\n');

  socket.on('data', (data) => {
    console.log(data.toString());
  });
});

const PORT = 8085;

server.listen(PORT);

console.log(`Server TCP ativo!\nEscutando na porta: ${PORT}`);

/* Exercicio 5

nc -t 127.0.0.1 8085

telnet 127.0.0.1 8085

Exercicio 6

curl localhost:8085

curl --request POST \
--data "{ \"foo\": \"bar\" }" \
--header 'Content-Type: application/json' \
--header 'Foo-Bar-Header: foo-bar' \
localhost:8085/foo-bar

Exercicio 7

const dgram = require('dgram');
const { builtinModules } = require('module')

const socket = dgram.createSocket('udp4');

socket.on('message', (message) => {
  console.log(message.toString());
});

const PORT = 8084;

socket.bind(PORT);

console.log(`Server TCP ativo!\nEscutando na porta: ${PORT}`);

Exercício 8

nc -u 127.0.0.1 8084

Exercício 9

curl localhost:8084

Bonus
Exercicio 10

curl ifconfig.me

ifconfig */