let temperaturaCelsius = [0, 2, 5, 3, 7, 4];
let toFahrenhait = value => ((value * 9) / 5) + 32;
let temperaturaFahrenhait = temperaturaCelsius.map(toFahrenhait);

console.log(temperaturaCelsius);
console.log(temperaturaFahrenhait);