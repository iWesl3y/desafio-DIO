/* # 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

let heroi = "Zézão"
let valor = 8450

if (valor <= 1000){
    console.log("O Herói de nome " + heroi + " está no nível de Ferro")
} else if(valor >= 1001 && valor <= 2000){
    console.log("O Herói de nome " + heroi + " está no nível de Bronze")
} else if(valor >= 2001 && valor <= 5000){
    console.log("O Herói de nome " + heroi + " está no nível de Prata")
} else if(valor >= 5001 && valor <= 7000){
    console.log("O Herói de nome " + heroi + " está no nível de Ouro")
} else if(valor >= 7001 && valor <= 8000){
    console.log("O Herói de nome " + heroi + " está no nível de Platina")
} else if(valor >= 8001 && valor <= 9000){
    console.log("O Herói de nome " + heroi + " está no nível de Ascendente")
} else if(valor >= 9001 && valor <= 10000){
    console.log("O Herói de nome " + heroi + " está no nível de Imortal")
}else if(valor >= 10001){
    console.log("O Herói de nome " + heroi + " está no nível de Radiante")
} else {
    console.log("Valor inválido")
}