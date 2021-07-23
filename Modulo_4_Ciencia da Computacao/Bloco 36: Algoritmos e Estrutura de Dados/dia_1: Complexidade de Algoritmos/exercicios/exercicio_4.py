""" Exercício 4
O código abaixo está em JavaScript . Calcule sua ordem de complexidade para um 
array de tamanho n.

Resposta

As três funções iteram por todo o array, uma depois da outra.
A ordem de complexidade, portanto, seria O(n + n + n), ou O(3n),
mas dizemos O(n) para simplificar. """

numbers = [0,1,2,3,4,5,6,7,8,9]
result = (numbers.map(lambda n: n*n)
    .filter(lambda n: n%2 == 0)
    .reduce(lambda acc, n: acc + n))

print(result);