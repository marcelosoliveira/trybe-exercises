/* Exercício 1 : Defina uma regra de firewall utilizando o comando iptables -A ,
que bloqueie ( block ou REJECT/DROP ) toda a entrada ( in ou INPUT ) de pacotes
utilizando o protocolo ICMP , impedindo assim que a máquina responda ao comando
ping . Lembre-se, você pode executar o comando ping para validar se sua regra
está funcionando corretamente: ping 127.0.0.1 (você pode adicionar o parâmetro -O
para exibir os pings rejeitados também).

 iptables -A INPUT -p icmp -j REJECT


Exercício 2 : Exclua a regra anterior utilizando o parâmetro -D .

 iptables -D INPUT -p icmp -j REJECT


Exercício 3 : Agora vamos criar uma regra para bloquear o tráfego HTTPS. 
Para isso, iremos bloquear a saída de pacotes ( out ou OUTPUT ). 
Lembre-se, a porta padrão para esse protocolo é a 443 , para especificá-la 
utilize o parâmetro --sport . Ele utiliza também o protocolo tcp . 
Para testar sua regra, tente acessar um site pelo navegador que use o protocolo, 
como o Youtube, o Google ou o Facebook.

 iptables -A OUTPUT -p tcp --sport 443 -j REJECT


Exercício 4 : Bloqueie agora o tráfego de saída para HTTP. Lembre-se, também é 
utilizado o protocolo tcp e a porta 80 . Para testar sua regra, tente acessar 
um site pelo navegador que use HTTP .

 iptables -A OUTPUT -p tcp --sport 80 -j REJECT


Exercício 5 : Para finalizar, vamos limpar todas as regras. Para isso, utilize o 
comando --flush do iptables (Linux).

 iptables --flush


Exercício 6 : Agora, vamos utilizar um tipo de proxy bem legal que pode ser 
bastante útil no nosso dia como pessoas desenvolvedoras: o NGROK . Com ele 
conseguimos criar um túnel para o nosso localhost .
Crie um servidor HTTP em sua máquina executando na porta 80 , pode ser um 
front-end ou um back-end criado em aulas anteriores.

const http = require('http');

const requestListener = (req, res) => {
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(80);

 node index.js

Baixe o ngrok e extraia o arquivo baixado em uma pasta de sua preferência, 
conforme instruções no site oficial .

unzip /path/to/ngrok.zip

Conforme instruções do site, crie um túnel para a porta 80 de sua máquina.

 ./ngrok http 80

Acesse o o link disponibilizado em seu navegador. Utilize ele para acessar de 
outros dispositivos, como seu smartphone ou outro computador.

 ./ngrok http 80


Exercício 7 : No conteúdo vimos o que são os protocolos SSL e TLS. Vamos subir 
nosso próprio servidor HTTPS, utilizando nosso próprio certificado!
Vamos utilizar a ferramenta OpenSSL para gerar nossos certificados. Ela já vem 
instalada na maioria das distro Linux.

 openssl -v

Para gerar nosso próprio certificado auto-assinado, utilize os comandos abaixo.
Lembrando que, como nós estamos gerando o certificado, ele não será reconhecido 
por nenhuma entidade certificadora, de modo que ele só nos servirá para utilizar 
o protocolo TLS com o HTTPS, não sendo capaz de ser aceito pelo navegador.

 openssl genrsa -out key.pem
 openssl req -new -key key.pem -out csr.pem
 openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
 rm csr.pem


openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem


Acabamos de gerar dois arquivos, o cert.pem (o certificado) e o key.pem 
(chave privada). Copie os dois arquivos para um diretório onde iremos criar 
nosso server HTTPS, utilizando o modulo HTTPS do Node.js .

 mkdir /some-dir/https-server
 mv key.pem /some-dir/https-server
 mv cert.pem /some-dir/https-server
 cd /some-dir/https-server

Siga a documentação do módulo para criar seu servidor HTTPS.

const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
};

https
  .createServer(options, (_req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  })
  .listen(8000);

Acesse o servidor utilizando o navegador. Perceba que ele irá informar que o 
certificado não é reconhecido por ele, pois não foi assinado por nenhuma 
entidade da confiança dele.
Acesse o servidor novamente, porém, desta vez utilizando cURL.

 curl https://localhost:8000

Por último, vamos utilizar um recurso do cURL, somente para testes 
(somente utilize, caso realmente você esteja esperando por aquilo), 
que é o parâmetro -k ou --insecure . Com ele, falamos para o nosso cURL 
prosseguir a request mesmo sabendo que a conexão não é "confiável". 

 curl --insecure https://localhost:8000 */