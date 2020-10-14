#!/bin/bash
echo "Digite o caminho de um arquivo ou diretório:" $1;
CAMINHO=$1;
if [ -d "$CAMINHO" ]
    then
        echo "$CAMINHO é um diretório!"
elif [ -f "$CAMINHO" ]
    then
        echo "$CAMINHO é um arquivo comum"
else
    echo "$CAMINHO é outro tipo de arquivo"
fi
ls -l $CAMINHO