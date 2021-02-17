const boton = document.querySelectorAll('.botones');
const pantalla = document.getElementById('pantalla');
const botonResultado = document.getElementById('igual');
const clear = document.getElementById('clean');
let simbolo = '';

function limpiar() {
        let htmlString = '';
        pantalla.innerHTML = htmlString;
}

function botonPulsado(boton) {
    simbolo = boton.getAttribute('data-valor');
    pantalla.innerHTML += simbolo;
    animation(simbolo, 'animate__heartBeat');
}

boton.forEach(function(boton){
    boton.addEventListener("click", /*FUNCION FANTASMA*/ function() {
        botonPulsado(boton);
    });
});


function resultado() {
    animation('igual', 'animate__heartBeat');
    animation('id_container', 'animate__headShake');
    if(pantalla.innerHTML != ''){
        pantalla.innerHTML = eval(pantalla.innerHTML);
    }
}

function animation(simbolo, anim){
    document.getElementById(simbolo).classList.toggle(anim);
    setTimeout(function(){
        document.getElementById(simbolo).classList.toggle(anim);
    }, 300);
}

botonResultado.addEventListener('click', resultado);

clear.addEventListener('click', function(){
    animation('clean', 'animate__heartBeat');
    limpiar();
});


setTimeout(function(){
    document.getElementById('id_container').classList.toggle('animate__flip');
}, 2000);


