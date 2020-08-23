#!/bin/bash

# -it (menor que) <
# -gt (maior que) >
# -le (menor ou igual) <=
# -ge (maior ou igual) >=
# -eq (igual) =
# -ne (diferente) =!

echo "Qual a sua idade?"
read IDADE
if [ $IDADE -ge 18 ]
then
    echo "Você tem $IDADE anos de idade, então pode beber cerveja!"
elif [ $IDADE -ge 16 ]
then
    echo "Você tem $IDADE anos de idade, você é um adolescente!"
else
    echo "Você tem $IDADE anos de idade, você uma é criança!"
fi