// genera un numero random per il giocatore

const randomPlayer = Math.floor(Math.random() * 6) + 1;
console.log(`Numnero generato per i giocatori`, randomPlayer);

// genera un numero random per il computer
const randomComputer = Math.floor(Math.random() * 6) + 1;
console.log(`Numnero generato per i computer`,randomComputer);

// stabilire il vincitore in base al punteggio più alto 
let theWinner = "Siete pari" 

if (randomPlayer > randomComputer){
    theWinner = "Il vincitore è il giocatore"
} else if (randomPlayer < randomComputer){
    theWinner = "Il vincitore è il computer"
}

console.log(theWinner);