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

// Funzione al click della cella

const onCellClick = (event) => {
    let message = '';
    if(event.target.classList.contains('clicked') || end)  return;
    
    event.target.classList.add('clicked'); // Aggiunge/rimuove la classe clicked (creata in css)
    console.log('hai cliccato la casella: ' + event.target.innerText); // E mi stampa in console il numero della cella
    if(bombs.includes(parseInt(event.target.innerText))){
        event.target.classList.add('bomb');
        message = `<strong>BOOM!</strong> Partita terminata! ${message}`;
        end = true;
    } else if(score === (grid.childNodes.length - bombs.length - 1)){
        score++;
        message = `<strong>Vittoria!</strong> Hai raggiunto il punteggio massimo! ${message}`
        end = true;
    } else{score++;}
    
    message += `Il tuo punteggio è: <strong>${score}</strong>`
    result.innerHTML = message;
    
}

// Funzione per creare un numero random

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}


// * Steps 

// Creo la griglia usando js

// Collego gli elementi della pagina

const container = document.getElementById('grid-container')
let grid = document.getElementById('grid');
const button = document.getElementById('start-button');
const result = document.getElementById('result');




// * BONUS * //

// Collego l'elemento select della pagina

const gridSelect = document.getElementById('grid-select');

let rows;
let cells;

let end;

grid.innerText = 'Seleziona una difficoltà e premi inizia!'

// Creo una variabile con il punteggio

let score = 0;

// Creo un array per le bombe

let bombs = [];

// Quando premo il pulsante start

button.addEventListener('click',(event) => {
    
    event.target.innerText = 'Gioca ancora!';
    // Pulisco la griglia
    
    grid.innerHTML = ""
    
    // Resetto il punteggio
    
    score = 0;   
    bombs = [];
    end = false;
    
    // Dichiaro le misure della mia griglia nelle variabili
    
    switch(gridSelect.value) {
        case "1": {
            rows = cells = 10;
            break;
        };
        case "2": {
            rows = cells = 9;
            break;
        }
        case "3": {
            rows = cells = 7;
            break;
        }
        
    }
    
    const totalCells = rows * cells;   
    
    // Per 16 volte
    for(let i = 1; i <= 16; i++){

        let randomNum; // Creo la variabile di un numero
        do{randomNum = getRandomNumber(1,totalCells); // Genero almeno un numero, finché non esce uno che non
    } while(bombs.includes(randomNum)); // Appartiene al ciclo while
    bombs.push(randomNum); // Solo allora lo pushiamo nell'array bombs
    
}


for(let i = 1; i <= totalCells; i++){ // Fintanto che non ho creato tante celle quante quelle richieste (in totalCells)
    let cell = createCell(i); // Creo una cella (con variabile cell) usando la funzione createCell
    grid.appendChild(cell);  // Appendo la nuova cella alla griglia
        cell.addEventListener('click',onCellClick); // Osservo il comportamento al click di ogni cella
        
    }   
        
})