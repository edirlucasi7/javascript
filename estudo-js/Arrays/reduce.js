const nomes = [{
            cpf: '06268464397',
            nome: 'Edir Lucas da Silva Icety Braga',
            idade: 23, 
        },
        {
            cpf: '06979533355',
            nome: 'Yarice Aksa Silva Albuquerque',
            idade: 19,
        },
        { 
          cpf: '06268469369',
          nome: 'Marcos José da Silva Icety',
          idade: 38,
        },
];

const totalIdade = nomes.reduce((sum, nome) => {
    return sum + nome.idade;
}, 0);

console.log(totalIdade);