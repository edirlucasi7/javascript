var usuarios = [
  {
  nome: "Diego",
  habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
  nome: "Gabriel",
  habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
 ];

 function habilidadeDiegoEGabriel() {
  for (let variavel of usuarios) {
    let habilidades = variavel.habilidades.join(', ')
    console.log(`O ${variavel.nome} possui as habilidades: ${habilidades}`);
  }
 }

 habilidadeDiegoEGabriel();