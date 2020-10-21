const familia = [{
      nome: 'Lucas',
      papel: 'pai'
    },
    {
      nome: 'Yarice',
      papel: 'mãe'
    },
    {
      nome: 'Bernardo',
      papel: 'filho'
    },
    {
      nome: 'Maria Luíza',
      papel: 'filha'
    },  
]

for (let pessoa in familia) {
    console.log(familia[pessoa]); 
}