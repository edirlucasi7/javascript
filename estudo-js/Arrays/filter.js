// let numeros = [2, 4, 1, 20, 3, 8, 4, 7, 13, 15];
// let par = n => n % 2 == 0;
// let numerosPares = numeros.filter(par);

// console.log(`Os números pares são: ${numerosPares}.`);

const eletronicos = [
  ['lucas', 'Rio', '23'],
  ['lucas', 'Rio', '22'],
  ['Yuri', 'Paraíba', '25'],
  ['lucas', 'Rio', '26'],
  ['Yuri', 'João Pessoa', '23'],
  ['Carlos', 'Natal', '22'],
];

let pessoasRio = eletronicos.map((value) => {
    if (value[2] == '22') return value;
});

// let pessoasRio = eletronicos.filter((value) => {
//   if (value[2] == '23') return value;
// });

console.log(pessoasRio);