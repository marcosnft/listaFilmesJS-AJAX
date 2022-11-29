var p = document.getElementsByTagName("p");

var el =document.querySelectorAll('.box')[0];
setTimeout (()=>{
    //el.classList.add('animEsquerda');
},1000);

el.addEventListener('click',()=>{
    el.classList.add('animEsquerda');
});

var span = document.querySelector('.conteudo span');

span.addEventListener('click',function () {
   var conteudo =  document.querySelector('.conteudo p');

   if (conteudo.classList.contains('mostrar')){
    span.innerHTML = "Ver mais!";
    conteudo.classList.remove('mostrar');
    
    alert('esconda o conteudo');
   } else{
    span.innerHTML = "Ocultar";
    conteudo.classList.add('mostrar');
    alert('mostrar o conteudo');
   }
})


var conteudo = `Aqui vai o conteúdo Lorem ipsum dolor sit amet, consectetur adipisicing eli
Amet aperiam omnis molestiae ea provident vero nemo, a obcaecati dolor, suscipit cumque! Magnam est doloremque eius dolorem nobis, quo alias adipisci.
`;

console.log(conteudo);
