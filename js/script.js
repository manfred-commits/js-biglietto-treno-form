// Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// 1. First, it's necessary to save the buttons that will drastically affect the page. The necessity of this action, stem from the fact that we will later have to 'toggle' with the use of the buttons the information of the exercise.
var btnGenerate=document.getElementById("generate").value;
var btnCancel=document.getElementById("cancel").value;

// 2. for each button we'll have to generate an event using the addEventListener property, to allow us to execute the action of calculating the price by clicking on the designate button
btnGenerate.addEventListener('click',
    function(){

    }
);
