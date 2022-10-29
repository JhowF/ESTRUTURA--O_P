
function k (){

let nome = window.prompt(' Digite seu nome:');

let usuario = document.querySelector('#NomeUsuario');

console.log(usuario);

usuario.innerHTML = nome;}


// let block = document.querySelector('.Checkbox');

// for (var i = 0; i < block.length; i++) {
// if (block[i].checked==true){

// console.log(block[i].id)
// }}

let img = document.querySelector('#img');

function obterMarcados() {
    let img = document.querySelector('#img');
    var listaMarcados = document.getElementsByTagName("input");
    for (loop = 0; loop < listaMarcados.length; loop++) {
       var item = listaMarcados[loop];
       if (item.type == "checkbox" && item.checked) {
         alert(img.value);
       }
    }
  }

  let bt = document.querySelector('#Button');

  bt.addEventListener('click', obterMarcados)

  