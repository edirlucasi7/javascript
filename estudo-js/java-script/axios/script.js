axios.get('https://api.github.com/users/edirlucasi7')
  .then(function(response) {
    console.log(response)
  })
  .catch(function(error) {
    console.log(error)
  })