var inputElement = document.querySelector('input[nome=conteudo]')
var buttonElement = document.getElementsByTagName('button')[0]
var ulElemnt = document.querySelector('.ulList')

buttonElement.setAttribute('onclick', 'buscarApi()') 

function buscarApi() {
  loading()

  ulElemnt.innerHTML = ''
  var conteudoElemento = inputElement.value

  axios.get(`https://api.github.com/users/${conteudoElemento}/repos`)
  .then(function(response) {
    for(res of response.data) {

      var ulElemnt = document.querySelector('.ulList')
      var list = document.createElement('li')

      ulElemnt.appendChild(list)

      var conteudoList = res.name
      var repos = document.createTextNode(conteudoList)

      list.appendChild(repos)
    }
  })
  .catch(function(reject) {
    alert('ERRO NA REQUISIÇÃO')
    loadingError()
    console.log(reject)
  })
}

function loading() {
  var list = document.createElement('li')
  var loading = document.createTextNode('Carregando...')

  ulElemnt.appendChild(list)
  list.appendChild(loading)
}

function loadingError() {
  var list = document.createElement('li')
  var loading = document.createTextNode('Repositório não encontrado!')

  ulElemnt.appendChild(list)
  list.appendChild(loading)
}
