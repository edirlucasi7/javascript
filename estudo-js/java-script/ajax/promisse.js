var minhaPromisse = function () {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://api.github.com/users/edirlucasi7')
    xhr.send(null)

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
         resolve(JSON.parse(xhr.responseText))
        } else {
          reject('ERRO NA REQUISIÇÃO')
        }
      }
    }


  })
}

minhaPromisse()
  .then(function(response) {
    console.log(response)
  })
  .catch(function(reject) {
    console.log(reject)
  })