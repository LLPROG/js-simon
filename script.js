

//// varabili

const contentNumber = document.querySelector('.content-number');
const timer = document.querySelector('.timer');
const resultNumber = document.querySelector('.result-number');
const hide = document.querySelector('.hide');
const hideContent = document.querySelector('.hide-content');
const btnSend = document.getElementById('btn-send');
const inputGroup = document.querySelector('.input-group');

//// Visualizzare in pagina 5 numeri casuali.

let arrNumberComputer = [];
let i = 0;

//// random number contentNUmber append
while (i < 5) {

    let randomNumber = parseInt(randomNumFunction(99, 1));

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
let conteggio1 = 5; ///// 10
let conteggio2 = 5 + 2;////12
let intervallo = 1000;


//// arrey userinput number
let arrNumberUser = [];

// equality
// function arraysEqual(a1,a2) {
//     return JSON.stringify(a1)==JSON.stringify(a2);
// }

//// conteggio 10s + cambio a user input
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

/*

Dopo aver nascosto i numeri chiedete all'utente (con dei prompt) di inserirli in ordine, uno alla volta.

*/

//// stampa risultato  with promtcon prompt
/*

let textResult = document.querySelector('.text');
let myInterval = setInterval(stampaConteggio, intervallo);
let promptInterval = setTimeout(() => {
    
    let arrCorrectNumber = [];

    for (let i =0;i < 5; i++) {
        let userPrompt = parseInt(prompt('dammi un numero'));
        arrNumberUser.push(userPrompt);
        console.log(arrNumberUser);
        if (arrNumberUser[i] == arrNumberComputer[i]) {
            arrCorrectNumber.push(arrNumberUser[i]);
            
        }
    }

    for(let i = 0; i < correctNumber.length; i++) {
        arrCorrectNumber.append(correctNumber[i] +"\u00A0"+"\u00A0");
        timer.innerHTML ='';
        hide.classList.remove('show');
    }

    textResult.innerHTML = `Il tuo punteggio é: ${correctNumber.length} `; 
    
}, 11000);

*/

///// stampa risultato con input

const textScore = document.querySelector('.text-score');
const correctNumberText = document.querySelector('.correct-number-text');
const numberUser = document.querySelector('.input-goroup input');

let myInterval = setInterval(stampaConteggio, intervallo);

btnSend.addEventListener('click', () => {

    let correctNumber = [];

    ////push numeri dell userInput in un arrey
    for (let i =0;i < 5; i++) {
        arrNumberUser.push(parseInt(inputGroup.children[i].value));  
        console.log(arrNumberUser);
        if (arrNumberUser[i] == arrNumberComputer[i]) {
            correctNumber.push(arrNumberUser[i]);
            console.log(correctNumber);
        }
    }

    /// stampa numeri e nascondi il resto
    for (let i = 0; i < correctNumber.length; i++) {
        resultNumber.append(correctNumber[i] +"\u00A0"+"\u00A0");
        timer.innerHTML ='';
        hide.classList.remove('show');
        hide.classList.add('hide');
    }

    correctNumberText.append('numeri corretti');


    textScore.innerHTML = `Il tuo punteggio é: ${correctNumber.length}`; 

});






