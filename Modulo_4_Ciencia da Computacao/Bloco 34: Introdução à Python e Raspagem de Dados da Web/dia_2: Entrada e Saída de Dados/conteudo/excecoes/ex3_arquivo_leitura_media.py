import re;

file = open("nomes_alunos_notas.txt", mode="w");

LINE = ["Marcos 10\n",
"Felipe 4\n",
"José 6\n",
"Ana 10\n",
"Maria 9\n",
"Miguel 5\n"]

file.writelines(LINE);
file.close();

with open("nomes_alunos_notas.txt", mode="r") as alunos_notas:
   print("Alunos aprovados! Média maior que 6\n");
   for aluno in alunos_notas:
       nota = int("".join(re.findall("\d+", aluno)));
       if nota >= 6:
           print("".join(re.findall("[a-zà-úA-ZÀ-Ú]", aluno)));
           