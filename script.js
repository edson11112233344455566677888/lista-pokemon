var form = document.querySelector('form')

form.addEventListener('submit', function(e){
    //bloqueia o refresh da pagina
    e.preventDefault
    //url da pesquisa
    let urlform =" https://pokeapi.co/api/v2/pokemon/"
    //valor do inputname
    let name = document.getElementById("name")
    // concatenar a url com o imput name
    urlform = urlform + this.name.value
    //trasforma os valores em minusculos
    urlform = urlform.toLocaleLowerCase
    //id content
    let resposta = document.getElementById('content')
    //id do imgpokemon
    let imagem = document.getElementById('imgpokemon')
    //resposta em html
    let html = ''


    fetch(urlform)
          .then(resposta => resposta.json())
          .then(function(data){
            console.log(data)
            html = 'nome:' + data.name + '<br>'
            html = html + 'type:' + data.types[0].type.name
            resposta.innerHTML = html
          })

        .catch(function(err){
            console.log(err)
        })

});

function maiusculo(val){
      return val[0.toUpperCase() + val.substr(1)]
}