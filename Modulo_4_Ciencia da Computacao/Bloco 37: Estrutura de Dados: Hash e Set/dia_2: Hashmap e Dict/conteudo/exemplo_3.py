# Exercício 3
# Tente descobrir qual técnica de tratamento de colisão é utilizada pelo Dict,
# de Python e o HashMap , do Java. Em inglês, o termo de busca
# é " collision resolution ".

# Solução:
# A classe Dict utiliza o Open Addressing e Java utiliza Separate Chaining.
# Vamos entender isso com mais detalhes.

# A classe Dict , de Python, utiliza a técnica de tratamento de colisão chamada
# Open Addressing e busca o próximo espaço vazio em duas fases. Ambas as fases
# utilizam a representação binária da chave e aplicam fórmulas matemáticas para
# definir o próximo índice a ser visitado.

# A classe HashMap , de Java, utiliza a técnica de Separate Chaining, mas quando a
# lista do bucket começa a ficar grande, Java substitui essa lista por uma Árvore
# Binária de Busca , uma estrutura de dados que diferente, que não veremos no curso,
# mas já posso adiantar que é mais eficiente do que uma lista para operações de busca.