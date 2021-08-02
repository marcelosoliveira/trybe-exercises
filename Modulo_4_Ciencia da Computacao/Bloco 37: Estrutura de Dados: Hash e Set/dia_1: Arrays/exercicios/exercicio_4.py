# Exercício 4 Dado dois arrays de números inteiros que representam instantes de
# entrada e saídas em uma biblioteca e um número que represente um instante a ser
# buscado. Retorne quantas pessoas estudantes estão na biblioteca naquele instante.
# Considere que todo estudante que entrou, saiu da biblioteca.

# entradas = [1, 2, 3]
# saídas = [3, 2, 7]
# instante_buscado = 4
# resultado: 1

# O estudante 1 entrou no instante 1 e saiu no 3, já o segundo entrou
# e saiu no 2 e o último foi único a estar presente no instante 4.

# Solução:
def students_in_instant(inputs, outputs, query_number):
    answer = 0
    size = len(input)
    for index in range(size):
        if inputs[index] < query_number < outputs[size]:
            answer += 1
    return answer


# ou de uma maneira mais pythonica
def students_in_instant(inputs, outputs, query_number):
    answer = 0
    for input, output in zip(inputs, outputs):
        if input < query_number < output:
            answer += 1
    return answer