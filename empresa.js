// Desafio Lidando com Objetos e Vetores
// Criar um programa que armazene a Robckseat dentro de um Objeto chamado empresa.

//Declarando Objeto... 
const empresa = [
    {
        Nome: "Rocketseat",
        Cor: "Roxo",
        Foco: "Programação",
        Endereço: {
            Rua: "Rua Guilherme Gembala",
            Número: 260
        },
    }

];

//Segunda parte do desafio.
console.log(`A empresa ${empresa[0].Nome} focada em ${empresa[0].Foco} está localizada em ${empresa[0].Endereço.Rua},${empresa[0].Endereço.Número}`);