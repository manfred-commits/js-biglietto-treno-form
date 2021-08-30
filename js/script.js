// Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// 1. First, it's necessary to save the buttons that will drastically affect the page. The necessity of this action, stems from the fact that we will later have to 'toggle' with the use of the buttons the information of the exercise.
var btnGenerate = document.getElementById("generate");
var btnCancel = document.getElementById("cancel");
var discount = 0;
var pricePerKm=0;

// 2. for each button we'll have to generate an event using the addEventListener property, to allow us to execute the action of calculating the price by clicking on the designated button
btnGenerate.addEventListener("click",
    function(){
        var name = document.getElementById("name").value;
        var number = parseInt(document.getElementById("number").value);
        var ageRange = document.getElementById("age").value;
        console.log(number);
        console.log(name);
        console.log(ageRange);
        // 3. having gathered the information required to estimate the price in the different cases(underage/adult/over 65), it is now necessary to create the appropriate if statement/statements to satisfy the condition of the exercise. 
        // Which is:
        // calculate the price, defined on the basis of km that have to be  travelled (0.21€ at km);
        // apply a discount of 20% if the customer is underage;
        // apply a discount of 40% if the customer is over 65.
        if(ageRange=="underage"){
            pricePerKm = number * 0.21;
            discount = pricePerKm * 0.20; 
            pricePerKm = pricePerKm-discount;
            console.log(pricePerKm.toFixed(2));
        }else if(ageRange=="over"){
            pricePerKm = number * 0.21;
            discount = pricePerKm * 0.40; 
            pricePerKm = pricePerKm-discount;
            console.log(pricePerKm.toFixed(2));
        }else{
            pricePerKm = number * 0.21;
            console.log(pricePerKm.toFixed(2));
        }

    }
);
// btnCancel.addEventListener('click',
//     function(){
//         
//     }
// );
