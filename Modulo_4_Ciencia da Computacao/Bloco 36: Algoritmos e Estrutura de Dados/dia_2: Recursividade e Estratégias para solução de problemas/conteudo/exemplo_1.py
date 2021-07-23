""" Exercício 1: Fibonacci A sequência de fibonacci é uma sequência numérica em que,
partindo dos dois primeiros números sendo 0 e 1, o próximo número será sempre a soma
dos dois anteriores. Esta sequência é interessante pois aparece muito na matemática
e na natureza de formas inusitadas. Veja os primeiros números:
 """
""" começo = [0, 1]
0 + 1 = 1 -> [0, 1, 1]
1 + 1 = 2 -> [0, 1, 1, 2]
1 + 2 = 3 -> [0, 1, 1, 2, 3]
3 + 2 = 5 -> [0, 1, 1, 2, 3, 5]
e assim por diante: 8, 13, 21, 33, 54...
Faça uma função que retorne o enésimo número da sequência de Fibonacci.
 """
# Soluções

def fibonacci(n):
    sequence = [0, 1]
    for x in range(n):
        next = sequence[-1] + sequence[-2]
        sequence.append(next)
    return sequence[-1]

# Na forma iterativa, calculamos todos os números da sequência até o número desejado.

def fibonacci(n):
    if n < 2:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

""" Na forma recursiva, definimos o caso trivial ou condição de parada como os dois
primeiros números, cuja posição na lista por acaso é igual à seu valor.
Em seguida, definimos a lógica recursiva: Um número é igual à soma dos dois
numeros que o precedem na sequência. """