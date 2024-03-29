""" Exercício 2
Código base para o exercício: """

def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f'Array 1: {number1}')
        for number2 in array2:
            print(f'Array 2: {number2}')
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f'{number_of_iterations} iterações!')
    return result


meu_array = [1,2,3,4,5]

multiply_arrays(meu_array, meu_array)

""" Para desembaraçar a sopa de letrinhas que a seção anterior criou, meça o tempo 
de execução do algoritmo acima e, mudando o tamanho das entradas, veja como, 
se você aumenta a entrada em n vezes, o tempo de execução aumenta em n² vezes!

Resposta:

Para fazer o exercício, basta substituir a linha a linha que define meu_array 
por esta: """

meu_array = list(range(1, 1000))

""" Use números grandes para que a diferença de tempo fique visível, rode uns cinco 
exemplos! Há várias formas de medir o tempo de execução também. Nós usamos esta: """

""" time python3 meu_programa.py """