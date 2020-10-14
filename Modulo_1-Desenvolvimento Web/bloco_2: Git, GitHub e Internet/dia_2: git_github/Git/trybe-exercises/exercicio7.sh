#!/bin/bash

read -p "Digite um arquivo: " DIR;

ARQ=`ls -l "$DIR" | wc -l`;

if [ -d "$DIR" ]
then
echo " O $DIR tem $ARQ arquivos";
else 
echo " O Argumento $DIR não é um diretório";
fi;