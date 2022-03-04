/*

Descrizione:

Da lì parte un timer di 30 secondi. (Cioè lasciate i numeri visibili per 30 secondi allo scadere dei quali li nascondete)
Dopo aver nascosto i numeri chiedete all'utente (con dei prompt) di inserirli in ordine, uno alla volta.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.

*/

//// varabili

const contentNumber = document.querySelector('.content-number');
const timer = document.querySelector('.timer');
const result = document.querySelector('.result');

//// Visualizzare in pagina 5 numeri casuali.

let arrNumber = [];
let i = 0;


while (i < 5) {

    let randomNumber = parseInt(randomNumFunction(50, 1));

    if(!arrNumber.includes(randomNumber)) {
        contentNumber.append(randomNumber++ +'  '+"\u00A0"+"\u00A0")
        arrNumber.push(randomNumber)
        i++
    }
}

function randomNumFunction (max, min) {
    return number = Math.floor(Math.random() * (max - min) + min);
}