
function view(counter) {
    return `\n\n Count:  ${counter} \n\n (+) (-) \n\n (q) for quit \n`
}

function update(msg,counter){
    if (msg === '+') return counter+1 ;
    else if (msg === '-') return counter-1 ;
    else if(msg === 'q') return counter = 'stop';
    else return counter;

    }

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

app(0);