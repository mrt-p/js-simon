// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

$(document).ready(function(){
  var randomNumbers = [];

  intervallo = setInterval(function(){
    document.getElementById("secondi").innerHTML = "Tempo a disposizione: " + sec;
    if (sec == 0) {
      clearInterval(intervallo);
      $('#numeri').css({display:'none'});
      var numeriUtente = [];
      var numeriCorretti = [];
      var numeriSbagliati = [];
      for (i=0; i<5; i++) {
        var numeroUtente = parseInt(prompt("Inserisci i numeri memorizzati: "));
        numeriUtente.push(numeroUtente);

        if (isInArray(randomNumbers, numeroUtente) == true)  {
          numeriCorretti.push(numeroUtente);
          document.getElementById("punteggio_giusto").innerHTML = "Hai indovinato questi numeri: " + numeriCorretti;
        }
        else {
          numeriSbagliati.push(numeroUtente);
          document.getElementById("punteggio_sbagliato").innerHTML = "Hai sbagliato questi numeri: " + numeriSbagliati;
        }
      }
      console.log(numeriUtente);
    }
    else {
      sec--;
    }
  }, 1000);

  while(randomNumbers.length < 5){
    var num = Math.floor(Math.random() * 100) + 1;
    if(randomNumbers.indexOf(num) === -1) randomNumbers.push(num);
    var sec = 30;
    var interval;

    document.getElementById("numeri").innerHTML = "Memorizza questi numeri: " + randomNumbers;
  }

});


function isInArray (array, value) {

  for (var i=0; i < array.length; i++) {
    if (value == array[i]) {
      return true;
    }
  }
  return false;
}
