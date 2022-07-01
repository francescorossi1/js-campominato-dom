/* Traccia 

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati (delle bombe) - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
# MILESTONE 1
Prepariamo "qualcosa" per tenere il punteggio dell'utente.
Quando l'utente clicca su una cella, incrementiamo il punteggio.
Se riusciamo, facciamo anche in modo da non poter più cliccare la stessa cella.
# MILESTONE 2
Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e il massimo di caselle disponibili.
Generiamoli e stampiamo in console per essere certi che siano corretti
# MILESTONE 3
Quando l'utente clicca su una cella, verifichiamo se ha calpestato una bomba, controllando se il numero di cella è presente nell'array di bombe. Se si, la cella diventa rossa (raccogliamo il punteggio e e scriviamo in console che la partita termina) altrimenti diventa azzurra e dobbiamo incrementare il punteggio.
# MILESTONE 4
Quando l'utente clicca su una cella, e questa non è una bomba, dobbiamo controllare se il punteggio incrementato ha raggiunto il punteggio massimo perchè in quel caso la partita termina. Raccogliamo quindi il messaggio è scriviamo un messaggio appropriato.
(Ma come stabiliamo quale sia il punteggio massimo?)
# MILESTONE 5
Quando la partita termina dobbiamo capire se è terminata perchè è stata cliccata una bomba o se perchè l'utente ha raggiunto il punteggio massimo. Dobbiamo poi stampare in pagina il punteggio raggiunto ed il messaggio adeguato in caso di vittoria o sconfitta.
#BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

*/

// * Functions

// Funzione per creare una cella

const createCell = (number) => {
    let cell = document.createElement('div'); // creo la cella
    cell.classList.add('cell'); // gli inserisco la classe che permette a css di dare le proprietà
    if(gridSelect.value === "2"){
        cell.classList.add('medium-cell');
    } else if(gridSelect.value === "3"){
        cell.classList.add('hard-cell');
    }
    cell.innerText = number; // preparo la lettura del numero al suo interno

    return cell;
}

// * Steps 

// Creo la griglia usando js

// Collego gli elementi della pagina

const container = document.getElementById('grid-container')
let grid = document.getElementById('grid');
const button = document.getElementById('start-button');



// * BONUS * //

// Collego l'elemento select della pagina

const gridSelect = document.getElementById('grid-select');

let rows;
let cells;


// Quando premo il pulsante start

button.addEventListener('click',() => {

// Pulisco la griglia

    grid.innerHTML = ""
    
    

    // Dichiaro le misure della mia griglia nelle variabili
    
    switch(gridSelect.value) {
        case "1": {
            rows = 10;
            cells = 10;
            break;
        };
        case "2": {
            rows = 9
            cells = 9;
            
            break;
        }
        case "3": {
            rows = 7
            cells = 7;
            break;
        }
        
    }

    const totalCells = rows * cells;

    for(let i = 1; i <= totalCells; i++){ // Fintanto che non ho creato tante celle quante quelle richieste (in totalCells)
        let cell = createCell(i); // Creo una cella (con variabile cell) usando la funzione createCell
        grid.appendChild(cell);  // Appendo la nuova cella alla griglia
        cell.addEventListener('click',(event) => { // Osservo un evento applicato alla nuova cella quando essa viene cliccata
            event.target.classList.add('clicked'); // Che aggiunge/rimuove la classe clicked (creata in css)
            console.log('hai cliccato la casella: ' + [i]) // E mi stampa in console il numero della cella
        })
    }   
})