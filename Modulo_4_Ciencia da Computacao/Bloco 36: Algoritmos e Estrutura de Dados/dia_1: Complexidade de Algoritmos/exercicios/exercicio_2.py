""" Exercício 2
Suponha que se está escrevendo uma função para um jogo de batalha naval.
Dado um array bidimensional com n linhas e m colunas, e um par de coordenadas
x para linhas e y para colunas, o algoritmo verifica se há um navio na 
coordenada alvo. Por exemplo:

Resposta: """

""" Mesmo para um array bidimensional, o acesso a um elemento é O(1).
A complexidade de espaço também é O(1), pois não consideramos a entrada em seu cálculo."""

def battleship(grid, line, column):
    if(grid[line][column] == 1): return True

    return False