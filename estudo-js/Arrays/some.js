const nomes = [{
  cpf: '06268464397',
  nome: 'Edir Lucas da Silva Icety Braga',
  idade: 12, 
},
{
  cpf: '06979533355',
  nome: 'Yarice Aksa Silva Albuquerque',
  idade: 17,
},
{ 
cpf: '06268469369',
nome: 'Marcos José da Silva Icety',
idade: 11,
},
];

let maiorDezoito = idadeMaior => idadeMaior.idade >= 18;
let temAdulto = nomes.some(maiorDezoito);
console.log(temAdulto);