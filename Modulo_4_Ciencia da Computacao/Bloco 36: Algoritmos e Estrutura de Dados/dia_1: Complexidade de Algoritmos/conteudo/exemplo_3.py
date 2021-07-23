""" Exercício 3
Faça um algoritmo qualquer com três loops aninhados um dentro do outro.
Entenda como ele terá uma complexidade de O(n³)! """

""" Resposta:
Podemos alterar o algoritmo do exercício anterior pra isso:
 """
def multiply_arrays(array1, array2, array3):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        for number2 in array2:
            for number3 in array3:
                result.append(number1 * number2 * number3)
                number_of_iterations += 1

    print(f'{number_of_iterations} iterações!')
    return result


# Usar 1000 aqui vai ser muito lento!
meu_array = list(range(1, 200))
multiply_arrays(meu_array, meu_array, meu_array)

""" A lógica da complexidade cúbica, ou O(n³) , estende-se da quadrática: se o array
de entrada tem 10 elementos, haverá 10 * 10 * 10 == 1000 iterações. Conte para ver! """