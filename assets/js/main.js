// creazione array per la lista cognomi
var listaCognomi = ["D'Urzo", 'Fumagalli', 'Castillo', 'Viti', 'Tenca'];
console.log(listaCognomi);
var displayList = document.getElementById('display_list');
//creazione var per lista
var listaInput = document.getElementById('input_lista');
var btnLista = document.getElementById('lista_btn');

//listener sul bottone
btnLista.addEventListener('click', function() {
    //inserimento cognome lista

    //presa dei valori
    var lista = document.getElementById('input_lista').value;
    //inserimento cognomi nell'array
    var lastnameInsert = listaCognomi.unshift(lista);

    //ordine alfabetico dell'array;

    console.log(listaCognomi);
    //ciclo per inserimento lista in html
    for (var i = 0; i < listaCognomi.length; i++) {
      var lastName = listaCognomi[i];
      var listContent = displayList.innerHTML;
      document.getElementById('display_list').innerHTML =listContent + '<li>' + lastName + '</li>';
      var alphOrder = listaCognomi.sort();
    }
})
