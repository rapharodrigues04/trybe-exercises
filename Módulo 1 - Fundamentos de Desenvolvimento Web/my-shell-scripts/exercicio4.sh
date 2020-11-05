#!/bin/bash

FILE="/Documentos/exercicio shellscript/exercicio4.sh"

if [ -e "$FILE" ]
    then
        echo "O caminho $FILE está habilitado"
fi
if [ -w "$FILE" ]
    then
        echo "Você tem permissão para editar $FILE"
    else
        echo "Você não foi altorizado a editar $FILE"
fi
