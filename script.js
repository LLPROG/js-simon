

//// varabili

const contentNumber = document.querySelector('.content-number');
const timer = document.querySelector('.timer');
const result = document.querySelector('.result');
const hide = document.querySelector('.hide');
const hideContent = document.querySelector('.hide-content');

//// Visualizzare in pagina 5 numeri casuali.

let arrNumberComputer = [];
let i = 0;

//// random number
while (i < 5) {

    let randomNumber = parseInt(randomNumFunction(50, 1));

    if(!arrNumberComputer.includes(randomNumber)) {
        contentNumber.append(randomNumber +"\u00A0"+"\u00A0");
        arrNumberComputer.push(randomNumber);
        i++
    }
}

console.log(arrNumberComputer);
//// random function
function randomNumFunction (max, min) {
    return number = Math.floor(Math.random() * (max - min) + min);
}

/*

Da lì parte un timer di 30 secondi. (Cioè lasciate i numeri visibili per 30 secondi allo scadere dei quali li nascondete)

*/

//// timer
let conteggio1 = 10; ///// 10
let conteggio2 = 12;
let intervallo = 1000;

let arrNumberUser = [];


function stampaConteggio() {

    if (conteggio1 !== 0) {
        timer.innerHTML = conteggio1 + 's'
        conteggio1--;

    } else {

        hideContent.innerHTML = '';
        timer.innerHTML ='GO';
        hide.classList.add('show');
        clearInterval(myInterval);
    }
   
}

// equality
function arraysEqual(a1,a2) {
    return JSON.stringify(a1)==JSON.stringify(a2);
}

/*

Dopo aver nascosto i numeri chiedete all'utente (con dei prompt) di inserirli in ordine, uno alla volta.

*/

//// stampa time result

let textResult = document.querySelector('.text');
let myInterval = setInterval(stampaConteggio, intervallo);
let promptInterval = setTimeout(() => {
    
    let correctNumber = [];

    for (let i =0;i < 5; i++) {
        let userPrompt = parseInt(prompt('dammi un numero'));
        arrNumberUser.push(userPrompt);
        console.log(arrNumberUser);
    }

    for (let i = 0; i< 5; i++) {
        if (arrNumberUser[i] == arrNumberComputer[i]) {
            correctNumber.push(arrNumberUser[i]);
            
        }
    }

    for(let i = 0; i < correctNumber.length; i++) {
        result.append(correctNumber[i] +"\u00A0"+"\u00A0");
        timer.innerHTML ='';
        hide.classList.remove('show');

        
    }

    textResult.innerHTML = `Punti: ${correctNumber.length} `; 
    
}, 11000);







