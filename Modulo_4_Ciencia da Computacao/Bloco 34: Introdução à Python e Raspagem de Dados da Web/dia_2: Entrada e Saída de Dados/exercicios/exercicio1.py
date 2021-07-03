nome = input("Digite um nome: ");
index = len(nome);
array = [];

for n in nome:
    array.append(n);

while(index > 0):
    print("".join(array).upper());
    array.pop();
    index -= 1;
