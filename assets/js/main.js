// creazione array per la lista cognomi
var listaCognomi = ["D'Urzo", 'Fumagalli', 'Castillo', 'Viti', 'Tenca'];
console.log(listaCognomi);
var displayList = document.getElementById('display_list');

//creazione var per lista
var listaInput = document.getElementById('input_lista');
var btnLista = document.getElementById('lista_btn');
var alert = document.getElementById('alert');

// var per il bottone Cancella
var cancel = document.getElementById('cancel');

//listener sul bottone
btnLista.addEventListener('click', function() {
    //cancellazione lista
    displayList.innerHTML= '';
    //presa dei valori
    var lista = document.getElementById('input_lista').value;
    //inserimento cognomi nell'array
    var lastnameInsert = listaCognomi.unshift(lista);

    //ordine alfabetico dell'array;
    var alphOrder = listaCognomi.sort();
    console.log(listaCognomi);
    // //ciclo per inserimento lista in html prova FOR
    for (var i = 0; i < listaCognomi.length; i++) {
      var lastName = listaCognomi[i];
      var listContent = displayList.innerHTML;
      document.getElementById('display_list').innerHTML =listContent + '<li>' + lastName + '</li>';
      var alphOrder = listaCognomi.sort();
     }
     // messaggio di avviso per la maiuscola!
     alert.innerHTML = 'Controlla la tua poszione e se hai inserito il tuo cognome senza maiuscola sarai in fondo alla lista!';
     //********************//
     // prova ciclo while //
     //*******************//
     // var i = 0;
     // while (i < listaCognomi.length) {
     //     var lastName = listaCognomi[i];
     //     var listContent = displayList.innerHTML;
     //     document.getElementById('display_list').innerHTML =listContent + '<li>' + lastName + '</li>';
     //     var alphOrder = listaCognomi.sort();
     //     i++;
     // }

     //*****************************************//

})

cancel.addEventListener('click', function() {
  listaInput.innerHTML= '';
  displayList.innerHTML= '';
  listaCognomi.shift();
})
