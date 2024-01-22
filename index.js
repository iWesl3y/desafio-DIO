/*
# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
  */

  class vingador {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        if (this.tipo === "mago") {
            ataque = " magia";
                } else if (this.tipo === "guerreiro") {
                    ataque = " espada";
                    } else if (this.tipo === "monge") {
                        ataque = " artes marciais";
                        } else if (this.tipo === "ninja") {
                            ataque = " shuriken";
                            } else {
                                ataque = "usou um ataque indefinido";
                                }

        let mensagemAtaque = `O ${this.tipo} ${this.nome}, com a idade ${this.idade}, atacou usando ${ataque} `
        console.log(mensagemAtaque);
    }
}


let heroi1 = new vingador("CapitãoAmerica", 150, "guerreiro");
let heroi2 = new vingador("FeiticeiraEscarlate", 30, "mago");
let heroi3 = new vingador("Wong", 35, "monge");
let heroi4 = new vingador("GaviãoArqueiro", 28, "ninja");

heroi1.atacar();  
heroi2.atacar();  
heroi3.atacar();  
heroi4.atacar();