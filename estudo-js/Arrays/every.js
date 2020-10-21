const nomes = [{
      cpf: '06268464397',
      nome: 'Edir Lucas da Silva Icety Braga',
      idade: 23, 
    },
    {
      cpf: '06979533355',
      nome: 'Yarice Aksa Silva Albuquerque',
      idade: 20,
    },
    { 
    cpf: '06268469369',
    nome: 'Marcos José da Silva Icety',
    idade: 38,
    },
];

let maiorDezoito = idadeMaior => idadeMaior.idade >= 18;
let verificar = nomes.every(maiorDezoito);
console.log(verificar);