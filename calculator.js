const boton = document.querySelectorAll('.botones');
const pantalla = document.getElementById('pantalla');
const botonResultado = document.getElementById('igual');
let estado = false;


function limpiar() {
    if(estado){
        let htmlString = '';
        pantalla.innerHTML = htmlString;
        estado =! estado;
    }
    console.log(estado);
}

function botonPulsado(boton) {
    limpiar();
    pantalla.innerHTML += boton.getAttribute('data-valor');
}

boton.forEach(function(boton){
    boton.addEventListener("click", /*FUNCION FANTASMA*/ function() {
        botonPulsado(boton);
    });
});


function resultado() {
    estado =! estado;
    if(pantalla.innerHTML != ''){
        pantalla.innerHTML = eval(pantalla.innerHTML);
    }
}



botonResultado.addEventListener('click', resultado);


