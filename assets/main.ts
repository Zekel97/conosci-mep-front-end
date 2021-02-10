import './main.scss';

//----------- VARIABLES 
    const ghostButton = document.getElementById("spirits");
    ghostButton!.addEventListener("click", posts);

    const messageButton = document.getElementById("message");
    messageButton!.addEventListener("click", messaggio);

    let data;
    let count = 0;

//----------- CONSOLE LOGS
    console.log('Cara MEP, questo è ciò che sono riuscito a fare per il momento. Ho ancora da allenarmi con lo scripting però sono sicuro di migliorare in poco tempo. Giusto il tempo per un caffè. O due. O dieci.');

//----------- FUNCTIONS
    document.addEventListener('DOMContentLoaded', function() {
        var messaggio = document.querySelector('.js-user-auth');
        console.log(messaggio?.attributes[1].value);
    });


    function posts()
    {

        fetch('http://127.0.0.1:8000/posts')
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
        
                data=myJson
                console.log("|POST "+count+" ---------| USERID "+data[count].userId+"-------")
                console.log("Title: "+data[count].title)
                console.log("Body: "+data[count].body)
                console.log("---------------------------")
                count++
            });
        
    }

    function messaggio()
    {
            console.log(" Chiedo scusa per l'utilizzo del file 'config/packages/twig.yaml' ")
            console.log(" Ma era il modo più immediato che avevo per popolare il template creato ")
            console.log("-----------------------------------------------")
    }
