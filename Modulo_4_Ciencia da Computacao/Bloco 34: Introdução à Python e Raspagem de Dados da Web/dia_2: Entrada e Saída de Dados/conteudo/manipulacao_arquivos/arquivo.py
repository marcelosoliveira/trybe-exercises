# ao abrir um arquivo para escrita,
# um novo arquivo é criado mesmo que ele já exista, sobrescrevendo o antigo.
file = open("arquivo.txt", mode="w");

file.write("Nome      Idade\n")
file.write("Maria      45\n")
file.write("Miguel     33\n")
print("Marcelo    34", file=file);

LINE = ["Marcio     33\n", "Raphael    10\n", "Ana Marcia 60\n"];
file.writelines(LINE);

file.close();

file = open("arquivo.txt", mode="r");
print(file.read());
file.close();