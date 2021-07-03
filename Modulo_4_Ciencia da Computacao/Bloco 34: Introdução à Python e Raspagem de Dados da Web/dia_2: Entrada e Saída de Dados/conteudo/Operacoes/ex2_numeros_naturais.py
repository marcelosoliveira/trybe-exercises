numero = input("Digite um numero separadompor um espaço: ");
numeroArr = numero.split(" ");
soma = 0;

for num in numeroArr:
    if not num.isdigit():
       print(f"Erro ao somar valores, {num} é um valor inválido");
    else:
        soma += int(num);   

print(f"Soma dos números válidos {soma}");