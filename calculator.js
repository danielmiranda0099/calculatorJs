const button = document.querySelectorAll('.buttons');
const screen = document.getElementById('screen');
const buttonResult = document.getElementById('equal');
const clear = document.getElementById('clean');
let symbol = '';

function Clear() {
        screen.innerHTML = '';
}

function ButtonPressed(button) {
    symbol = button.getAttribute('data-valor');
    screen.innerHTML += symbol;
    Animation(symbol, 'animate__heartBeat');
}

button.forEach(function(button){
    button.addEventListener("click", /*FUNCION FANTASMA*/ function() {
        ButtonPressed(button);
    });
});


function result() {
    Animation('equal', 'animate__heartBeat');
    Animation('id_container', 'animate__headShake');
    if(screen.innerHTML != ''){
        screen.innerHTML = eval(screen.innerHTML);
    }
}

function Animation(symbol, anim){
    document.getElementById(symbol).classList.toggle(anim);
    setTimeout(function(){
        document.getElementById(symbol).classList.toggle(anim);
    }, 300);
}

buttonResult.addEventListener('click', result);

clear.addEventListener('click', function(){
    Animation('clean', 'animate__heartBeat');
    Clear();
});


setTimeout(function(){
    document.getElementById('id_container').classList.toggle('animate__flip');
}, 2000);


