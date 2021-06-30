fruits = ["orange", "apple", "grape", "pineapple"]  # elementos são definidos separados por vírgula, envolvidos por colchetes

fruits[0]  # o acesso é feito por indices iniciados em 0

fruits[-1]  # o acesso também pode ser negativo

fruits.append("banana")  # adicionando uma nova fruta

fruits.remove("pineapple")  # removendo uma fruta

fruits.extend(["pear", "melon", "kiwi"])  # acrescenta uma lista de frutas a lista original

fruits.index("apple")  # retorna o índice onde a fruta está localizada, neste caso 1 em seu programa
fruits.sort()  # ordena a lista de frutas

""" Tuplas (tuple)
São similares a listas, porém não podem ser modificados durante a execução do programa.
Sintaxe:
Copiar """
user = ("Cássio", "Botaro", 42)  # elementos são definidos separados por vírgula, envolvidos por parenteses

user[0]  # acesso também por índices

""" Conjuntos (set)
Conjunto de elementos únicos e não ordenados. Como conjuntos, implementam operações de união, intersecção e outras.
Sintaxe:
Copiar """
permissions = {"member", "group"}  # elementos separados por vírgula, envolvidos por chaves

permissions.add("root")  # adiciona um novo elemento ao conjunto

permissions.add("member")  # como o elemento já existe, nenhum novo item é adicionado ao conjunto

permissions.union({"user"})  # retorna um conjunto resultado da união

permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos


""" Conjuntos imutáveis (frozenset)
Variação do set, porém imutável, ou seja, seus elementos não podem ser modificados durante a execução do programa.
Sintaxe:
Copiar """
permissions = frozenset(["member", "group"])  # assim como o set, qualquer estrutura iterável pode ser utilizada para criar um frozenset

permissions.union({"user"})  # novos conjuntos imutáveis podem ser criados à partir do original, mas o mesmo não pode ser modificado

permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos


""" Dicionários (dict)
Estrutura que associa uma chave a um determinado valor. É a representação do tão famoso objeto que utilizamos em JavaScript.
Sintaxe:
Copiar """
people_by_id = {1: "Cássio", 2: "João", 3: "Felipe"}  # elementos no formato "chave: valor" separados por vírgula, envolvidos por chaves

people_by_name = {"Cássio": 1, "João": 2, "Felipe": 3}  # outro exemplo, dessa vez usando strings como chaves (ao contrário de JS, as aspas duplas são obrigatórias)

# elementos são acessados por suas chaves
people_by_id[1]  # saída: Cássio

# elementos podem ser removidos com a palavra chave del
del people_by_id[1]
people_by_id.items()  # dict_items([(1, "Cássio"), (2, "João"), (3, "Felipe")])
# um conjunto é retornado com tuplas contendo chaves e valores
""" 
amos fixar os aprendizados sobre dicts?
Utilizando o código abaixo, faça os exercícios de fixação 8, 9 e 10:
Copiar """
info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

""" Range (range)
Estrutura capaz de gerar uma sequência numérica de um valor inicial até um valor final, modificando seu valor de acordo com o passo ( step ) definido. Pode ser declarado como range( [start], stop[, step] ) , em que start e step podem ser omitidos, possuindo valores iniciais iguais a 0 e 1 respectivamente.
Um ponto de atenção é que o stop não é incluído na sequência, portanto caso queira uma sequência de 1 até 10 a chamada deverá ser range(1, 11)
Seus valores são criados a medida que esta sequência é percorrida.
Sintaxe:
Copiar """
# vamos converter o range em uma lista para ajudar na visualização

# definimos somente o valor de parada
list(range(5))  # saída: [0, 1, 2, 3, 4]

# definimos o valor inicial e o de parada
list(range(1, 6))  # saída: [1, 2, 3, 4, 5]

# definimos valor inicial, de parada e modificamos o passo para 2
list(range(1, 11, 2))  # saída: [1, 3, ,5 ,7 , 9]

# podemos utilizar valores negativos para as entradas também
list(range(10, 0, -1))  # saída: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

""" Além dos tipos básicos, temos outros como datas, tuplas nomeadas, arrays, enumerações e outros, mas estes tem de ser importados de seus respectivos módulos.
Exercício 12: Após uma consulta do banco de dados, temos linhas que contém nome, sobrenome e idade como: "Thiago", "Nobre", 29 . Que estrutura vista anteriormente seria recomendada dado que após esta consulta somente exibimos estes valores.
Exercício 13: Realizar a contagem de quantas vezes cada elemento aparece em uma sequência é uma técnica muito útil na solução de alguns problemas. Qual é a estrutura mais recomendada para o armazenamento desta contagem? """


"""  Em uma análise de dados sobre pessoas desenvolvedoras, temos uma base de dados que contém o salário de várias pessoas, porém não temos informação da senioridade das mesmas. Para fazer um agrupamento por senioridade precisamos criar uma nova coluna que será baseada no salário.
Caso o salário seja menor que "R$2.000,00", a pessoa será considerada como estagiária, para salários entre R$2.000,00 e R$5.800,00 júnior, entre R$5.800,00 e R$7.500,00 pleno, entre R$7.500,00 e R$10.500,00 será sênior e qualquer valor acima disto consideraremos líder.
Copiar """
position = ""
if salary <= 2000:
    position = "estagiário"
elif 2000 < salary <= 5800:
    position = "júnior"
elif 5800 < salary <= 7500:
    position = "pleno"
elif 7500 < salary <= 10500:
    position = "senior"
else:
    position = "líder"


""" Em alguns casos, que não prejudiquem a legibilidade, podemos criar estruturas de mapeamento ( dicts ) para simplificar o aninhamento de condicionais.
Copiar """
key = "id"
from_to = {
    "id": "identifier",
    "mail": "email",
    "lastName": "last_name",
}
from_to[key]


""" Pense em um sistema que faça a listagem de restaurantes. Estes restaurantes possuem uma nota proveniente da avaliação dos seus clientes.
Copiar """
restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]


""" Quando um cliente pede a listagem de restaurantes, ele pode escolher filtrar o resultado de acordo com a nota.
Podemos fazer isto percorrendo a lista de restaurantes, criando uma nova lista com somente aqueles que atendem ao filtro.
Copiar """
filtered_restaurants = []
min_rating = 3.0
for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D


""" Dado que a maior parte do tempo estamos percorrendo estruturas, os criadores da linguagem decidiram que o for each seria o laço de repetição principal na linguagem.
Para cada repetição do nosso laço, um novo elemento da estrutura iterável é atribuído a variável de iteração. No exemplo acima vemos que, a cada iteração, um novo restaurante é colocado na variável restaurant .
💡 Em alguns casos, ainda podemos querer percorrer uma sequência numérica, e para isto iteramos sobre a estrutura de dados range .
Copiar """
for index in range(5):
    print(index)



""" compreensão de listas
Existe uma maneira mais "pythônica" de se fazer isto! 🐍
Quando uma nova lista é criada como resultado de uma iteração, podemos simplificar utilizando compreensão de listas .
Copiar """
min_rating = 3.0
filtered_restaurants = [restaurant
                         for restaurant in restaurants
                         if restaurant["nota"] > min_rating]
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

""" A compreensão de listas é declarada da mesma maneira que uma lista comum, porém no lugar dos elementos nós colocamos a iteração que irá gerar os elementos da nova lista. Um detalhe importante é que é possível filtrar esses elementos utilizando o if .
Poderíamos listar também somente o nome dos restaurantes.
Copiar """
# min_rating = 3.0
filtered_restaurants = [restaurant["name"] ] # aqui pedimos somente o nome do restaurante
#                        for restaurant in restaurants
#                        if restaurant["nota"] > min_rating]
# print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D



""" while
🔢 A Sequência de Fibonacci, muito presente em diversas formas na natureza, é uma sequência numérica começando por 0 e 1 e cada termo subsequente corresponde à soma dos dois anteriores.
Podemos escrever esta sequência da seguinte maneira:
Copiar """
n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next

""" 
    Notamos que funções são definidas através da palavra reservada def , seguido por um nome e os parâmetros entre parenteses. Como todo bloco de código em Python o caractere : define o início do bloco e a indentação seu fim.
Os parâmetros podem ser passados de forma posicional ou nomeada. Os posicionais são aqueles definidos através da posição ao qual é chamado e os nomeados são definidos através do nome.
Copiar """
def soma(x, y):
    return x + y

soma(2, 2)  # os parâmetros aqui são posicionais

soma(x=2, y=2)  # aqui estamos nomeando os parâmetros


""" Os parâmetros também podem ser variádicos. Ou seja, podem variar em sua quantidade. Parâmetros posicionais variádicos são acessados como tuplas no interior de uma função e parâmetros nomeados variádicos como dicionário.
Copiar """
def concat(*strings):
    # Equivalente a um ", ".join(strings), que concatena os elementos de um iterável em uma string utilizando um separador
    # Nesse caso a string resultante estaria separada por vírgula
    final_string = ""
    for string in strings:
        final_string += string
        if not string == strings[-1]:
            final_string += ', '
    return final_string

# pode ser chamado com 2 parâmetros
concat("Carlos", "João")  # saída: "Carlos, João"

# pode ser chamado com um número n de parâmetros
concat("Carlos", "João", "Maria")  # saída: "Carlos, João, Maria"

# dict é uma função que já vem embutida no python
dict(nome="Felipe", sobrenome="Silva", idade=25)  # cria um dicionário utilizando as chaves passadas

dict(nome="Ana", sobrenome="Souza", idade=21, turma=1)  # o número de parâmetros passados para a função pode variar


""" Variáveis definidas dentro das funções tem escopo local, porém uma função quando não encontra um nome no escopo local irá procurar no espaço de nomes global.
Em alguns casos, podemos querer limitar um parâmetro em nomeado ou posicional para evitar ambiguidades e/ou aumentar legibilidade.
Copiar """
len([1, 2, 3, 4])  # função len não aceita argumentos nomeados

len(obj=[1, 2, 3, 4])  # este código irá falhar

print("Botaro", "Cássio", ", ")  # imprime Botaro Cássio ,

print("Botaro", "Cássio", sep=", ")  # nomeando o terceiro parâmetro, agora temos a saída: Botaro, Cássio


PI = 3.14  # PI é uma "constante" em nosso módulo


def square(side):
    '''Calculate area of square.'''
    return side * side


def rectangle(length, width):
    '''Calculate area of rectangle.'''
    return length * width


def circle(radius):
    '''Calculate area of circle.'''
    return PI * radius * radius


print("Área do quadrado:", square(10))
print("Área do retângulo:", rectangle(2, 2))
print("Área do círculo:", circle(3))


import area


PEOPLE_AT_CONCERT_PER_SQUARE_METER = 2  # numero de pessoas por metro quadrado em média
FIELD_LENGTH = 240  # em metros
FIELD_WIDTH = 45  # em metros
PEOPLE_AT_CONCERT = area.rectangle(FIELD_LENGTH, FIELD_WIDTH) // PEOPLE_AT_CONCERT_PER_SQUARE_METER


print("Estão presentes no show aproximadamente", PEOPLE_AT_CONCERT, "pessoas")


# ...


if __name__ == "__main__":
    print("Área do quadrado:", square(10))
    print("Área do retângulo:", rectangle(2, 2))
    print("Área do círculo:", circle(3))


""" Você deve estar pensando agora: "Socorro! Acho que não vou conseguir me lembrar de tudo o que vi, posso acabar me confundindo com outras linguagens.".
Então vou te dar um conselho! Sempre que estiver programando e surgir alguma dúvida, abra o terminal interativo e verifique o que está fazendo. Ele pode ser seu aliado, e pode inclusive te dar uma ajuda quando for necessário.
Temos um comando que chama help , e ele pode ser utilizado até mesmo em em cláusulas if ou for , desde que colocado entre aspas.
Copiar """
help("if")
""" A tecla q deve ser apertada para sair da ajuda.
Experimente também para funções como abs ou len que são padrões da linguagem. E para a função sin que está presente no módulo math que já vem embutido.
Copiar
import math """

help(abs)

help(len)

help(math.sin)
