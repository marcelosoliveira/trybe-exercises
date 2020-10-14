#!/bin/bash

echo "Qual o seu nome: ";
read NOME;
echo "Idade: ";
read IDADE;
USER=`whoami`;
DOC=`pwd`;

echo -e $NOME "\n" $IDADE "\n" $USER "\n" $DOC;