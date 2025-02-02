// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo() {  
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo == "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    amigos.push(nombreAmigo);
    limpiarCaja();
    recorrerAmigos();
    return;
    
}
function limpiarCaja() {
    let valorCajaNombreAmigo = document.getElementById('amigo');
    valorCajaNombreAmigo.value = '';
}
function recorrerAmigos() {
    let listaAmigos = document.querySelector('#listaAmigos'); 
    listaAmigos.innerHTML = '';
    for(let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}
function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    if(amigos.length == 0) {
        resultado.classList.add('colorRed');
        resultado.innerHTML = 'No hay amigos en la lista';
        return;
    } else {
        resultado.classList.remove('colorRed');
        let indiceAleatorio =  Math.floor(Math.random() * amigos.length);
        resultado.innerHTML = `El resultado del sorteo es igual a: < ${amigos[indiceAleatorio]} >`; 
        limipiarLista();
    }
      
}
function limipiarLista() {
    let listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.length = 0;
}