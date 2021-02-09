import './main.scss';

console.log('Cara MEP, questo è ciò che sono riuscito a fare per il momento. Ho ancora da allenarmi con lo scripting però sono sicuro di migliorare in poco tempo. Giusto il tempo per un caffè. O due. O dieci.');

document.addEventListener('DOMContentLoaded', function() {
    var messaggio = document.querySelector('.js-user-rating');
    console.log(messaggio?.attributes[1].value);
});

const button = document.getElementById("ciao");
button!.addEventListener("click", onMouseClick);
let val=0;

function onMouseClick()
{
    val++;
    console.log("-----------------------------------------------");
    console.log(" Chiedo scusa per l'utilizzo del file 'config/packages/twig.yaml' ");
    console.log(" Ma era il modo più immediato che avevo per usare il template creato ");
    console.log(" Un piccolo contatore delle volte che avete premuto il pulsantino: "+val);
}
