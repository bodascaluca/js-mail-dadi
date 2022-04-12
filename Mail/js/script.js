
const userEmail = ["bodasca.luca@gmail.com", "mario.rossi@gmail.com", "bodasca.alberto@gmail.com", "montrucchio.sarah@gmail.com"];
console.log(userEmail);

// Chiedere all'utente la sua email

const search = prompt(`Qual'è la tua email?`);
console.log(search);

// Controllare che sia nella lista di chi può accedere

let emailFound = false;
for (let i = 0; i < search.length; i++){
    const thisUserEmail = userEmail [i];
    if (thisUserEmail === search){
        emailFound = true;
    }
    console.log(thisUserEmail, "L'email è valida", emailFound)
}

console.log("Risultato finale:",emailFound);

// Stampa un messaggio approposito sull'esito del controllo
if(emailFound === true){
    console.log("Abbiamo trovato la tua email nel DataBase");
} else {
    console.log("Ci spaice, ma non abbiamo trovato la tua email nel nostro DataBase");
}