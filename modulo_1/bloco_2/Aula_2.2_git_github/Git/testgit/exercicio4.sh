#!/bin/bash
ARQUIVO="exercicio1.sh"
CAMINHO=`pwd`


if [ -e "$CAMINHO" ]
then
    echo "O caminho $CAMINHO está habilitado!"
fi


if [ -w "$CAMINHO/$ARQUIVO" ]
then
    echo "Você tem permissão para editar $ARQUIVO"
else
    echo "Você não foi autorizado a editar $ARQUIVO"
fi