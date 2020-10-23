/* 1.O que é um código que é executado de modo assíncrono? 
Qual é a diferença disso para um código que é executado de modo síncrono? 
R: O código que não interrompe a execução do script, ou seja 
o codigo síncrono se não for executado ele trava o fluxo do script, já o assícrono
executa em um derteminado tempo e volta para fila de execução do script para entregar sua resposta

2.Quando você tem que enfileirar várias callbacks, que problema surge?
R: O problema é que fica difícil a interpretação do código, as callbacks crescem descontroladamente
e resulta nas famosas callHells. 

3.Por que as Promises são uma forma de se resolver esse problema?
R: Porque elas são assíncronas, possuindo funções para tratamento de erros de requisições e
para as respostas que foram requisitadas, tornando assim um código mais limpo e controlável.

4.Quando você vai se comunicar com uma API, tal comunicação deve ser síncrona ou assíncrona? 
Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco 
para dar retorno, pode estar fora do ar etc.
R: Ela deve ser assícrona, porque as requisições tem tempo de respostas, do contrário
as respostas nunca retornaram.

5.Dada a resposta anterior, o que é fetch e para que ele serve?
R: É uma função responsável pelas requisições enviadas para API's, também possui
ferramentas para tratar dados recebidos e lidar com erros.
*/

