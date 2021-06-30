""" Exercícios
Exercício 1: Crie uma função que receba dois números e retorne o maior deles.
Copiar """
def bigger(number, other):
    if other > number:
        return other
    return number
""" Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
Copiar """
def mean(numbers):
    sum = 0
    for number in numbers:
        sum += number
    return sum/len(numbers)
""" Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
Copiar """
n = 5

""" *****
*****
*****
*****
***** """
""" 🦜 Dica: A função print aceita um parâmetro nomeado end que pode ser utilizado para imprimir sem a quebra de linha. Por exemplo, print(4, end="") e print(2) irá imprimir 42 e depois quebrar a linha.
Copiar """
def draw_square(n):
    for row in range(1, n + 1):
        for column in range(1, n + 1):
            print("*", end="")
        print()
""" Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"] , o retorno deve ser "Fernanda" .
Uma dica: Utilize a função len() para verificar o tamanho do nome.
Copiar """
def find_biggest_name(names):
    biggest_name = names[0]
    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name
""" Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede(em m²).
Copiar """
def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price
""" Uma alternativa mais direta, utilizando o módulo math
Copiar """
import math


def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = math.ceil(required_liters / 18)
    return required_cans, required_cans * can_price
""" Exercício 6: Crie uma função que receba os três lado de um triângulo e informe qual o tipo de triâgulo formado ou "não é triangulo" , caso não seja possível formar um triângulo.
🦜 Dica:
Copiar
  Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
  Triângulo Equilátero: três lados iguais;
  Triângulo Isósceles: quaisquer dois lados iguais;
  Triângulo Escaleno: três lados diferentes.
Copiar """
def type_of_triangle(side1, side2, side3):
    is_triangle = (
            side1 + side2 > side3 or
            side2 + side3 > side1 or
            side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"
""" Bônus
Exercício 1: Dada uma lista, descubra o menor elemento. Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 3.
Copiar """
def min(numbers):
    smaller = number[0]
    for number in numbers:
        if number < smaller:
            smaller = number
    return smaller
""" Exercício 2: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um triângulo retângulo com 5 asteriscos de base. Por exemplo:
Copiar """
n = 5

""" *
**
***
****
*****
Copiar """
def draw_triangle(n):
    for row in range(1, n + 1):
        for column in range(1, row + 1):
            print("*", end="")
        print()
""" Exercício 3: Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N. Por exemplo, para N = 5, o valor esperado será 15.
Copiar """
def summation(limit):
    sum = 0
    for number in range(1, limit + 1):
        sum += number
    return sum
""" Exercício 4: Um posto está vendendo combustíveis com a seguinte tabela de descontos:
Copiar
  Álcool:
    - Até 20 litros, desconto de 3% por litro;
    - Acima de 20 litros, desconto de 5% por litro.
  Gasolina:
    - Até 20 litros, desconto de 4% por litro;
    - Acima de 20 litros, desconto de 6% por litro.
Escreva uma função que receba o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A - álcool, G - gasolina), e retorne o valor a ser pago pelo cliente, sabendo-se que o preço do litro da gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.
Copiar """
def fuel_price(type, liters):
    if type == "A":
        price = 1.90
        discount = 0.03
        if liters > 20:
            discount = 0.05
    elif type == "G":
        price = 2.50
        discount = 0.04
        if liters > 20:
            discount = 0.06
    total = price * liters
    total -= total * discount
    return total
    