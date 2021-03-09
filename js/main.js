// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

$(document).ready(function(){
  var randomNumbers = [];

  intervallo = setInterval(function(){
    document.getElementById("secondi").innerHTML = "Tempo a disposizione: " + sec;
    if (sec == 0) {
      alert("Tempo scaduto");
      clearInterval(intervallo);
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
