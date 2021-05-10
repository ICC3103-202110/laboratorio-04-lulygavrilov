// recibe el valor actual del contador
//retorna un string con el formato que se muestra
//en el video Count, (+) (-) (q) for quit, What would you do
function view(counter) {
    return `\n\n Count:  ${counter} \n\n (+) (-) \n\n (q) for quit \n`
}

//recibe como parametro '+', '-'
//si msg = '+' retorna counter +1
//si msg = '-' retorna counter -1
//funcion pura, solo depende de los parametros que recibe
//(no cambia ninguna variable externa)
function update(msg,counter){
    if (msg === '+') return counter+1 ;
    else if (msg === '-') return counter-1 ;
    else if(msg === 'q') return counter = 'stop';
    else return counter;

    }

//brain of the app
//es impura porque lleva el estado del contador
//lee el input, llama la funcion anterior en un loop infinito
//hasta que la app cierre (q)?
// obtener el valor del contador actual
function app(counter){
    while (counter !== 'stop'){
        const currentView = view(counter);
        console.clear();
        console.log(view(counter));
        const prompt = require('prompt-sync')();
        const msg = prompt('What would you do?  ');
        counter = update(msg,counter);
        }
}

//initialize:

app(0);