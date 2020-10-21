const bolsaYarice = [
  'Cartão de crédito',
  'Maquiagem',
  'Dinheiro',
  'Anticoncepcional',
  'Espelho',
];

bolsaYarice.forEach((value, index, array) => {
      console.log(`${index+1}. ${value}`)
      console.log(array)
});

const divs = Array.from(document.querySelectorAll('.block'));
const hide = el => el.style.display = 'none';
const show = el => el.style.display = 'block';