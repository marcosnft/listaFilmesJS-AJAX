/*var request = new XMLHttpRequest();
setTimeout(()=>{
    request.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);

    request.onload = () =>{
        if(request.status >= 200 && request.status <400){
            var data = JSON.parse(request.response); //colocar o retorno da request ajax dentro de um objeto
            console.log(data);
        } else{
            alert('Erro, não foi possível concluir a requisição.');
        }
    
    }
    
    request.onerror = () =>{}
    
    request.send();
},2000)
*/
/* GET COM FETCH
setTimeout(() =>{
    var resposta = fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response=>response.json())
.then(resposta=>console.log(resposta));
var texto = document.querySelector('.conteudo');
texto.innerHTML =resposta;
},2000)

/*POST COM FETCH 
var texto2 = "Conteúdo do Envio";
setTimeout(()=>{
    var conteudo = fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title:'Título de Envio',
            body: texto2,
            userId: 10
        }),
        headers:{
            'Content-Type':'application/json; charset=UTF-8'
        }
    }).then(response=>response.json())
    .then(conteudo=>console.log(conteudo));
    var texto = document.querySelector('.container');
    texto.innerHTML = conteudo.body;
    
},4000)
*/

fetch ('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1', {
    method: 'GET'})
    .then(response=>response.json())
    .then((json)=>{
        var container = document.querySelector('.container');
        json.results.map((val)=>{
            container.innerHTML +=`
            <div class="tituloFilme">`+val.title+`
            <div style="display:none;" class="description">`+val.overview+ `</div>
            <hr>
           
            
            </div>`;

        })
        var titulos = document.querySelectorAll('.tituloFilme');
        
        for (var i = 0; i< titulos.length; i++){
            
            titulos[i].addEventListener('click', function (t) {
               if(t.target.querySelector('.description').style.display == "none"){
                t.target.querySelector('.description').style.display = "block";
               }else{
                t.target.querySelector('.description').style.display = "none";
               }
                
            })
        }
        console.log(json);
    })
