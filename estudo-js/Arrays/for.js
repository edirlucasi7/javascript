const bolsaYarice = [
      'Cartão de crédito',
      'Maquiagem',
      'Dinheiro',
      'Anticoncepcional',
      'Espelho',
];

for (let index = 0; index < bolsaYarice.length; index++) {
    console.log(`${index + 1}. ${bolsaYarice[index]}`);
    if(bolsaYarice[index] == 'Dinheiro') break; 
}