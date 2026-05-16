const contenedorCartas = document.getElementById("cartas");
const btnOrdSuit = document.getElementById("boton-suit");
const btnOrdValue = document.getElementById("boton-value");

let listaInstanciada = [];

if(!localStorage.getItem("listaCartas")){
    alert("No hay cartas en la lista de Local Storage");
}else{
    let listaActual = JSON.parse(localStorage.getItem("listaCartas"));
    for (let i = 0; i < listaActual.length; i++){
        let carta = JSON.stringify(listaActual[i]);
        carta = Carta.createFromJsonString(carta);
        listaInstanciada.push(carta);
    }
}

function dibujarCartas(lista){
    contenedorCartas.innerHTML = "";
    for (let i = 0; i < lista.length; i++){
        const elemento = lista[i].createHtmlElement();
        contenedorCartas.appendChild(elemento);
        const btnGuardar = elemento.querySelector(".btn-guardar")
        btnGuardar.style.display = "none";
    }
}

function ordenarPorSuit(lista){
    lista.sort((a, b) => 
        a.suit.localeCompare(b.suit)
    );
    dibujarCartas(lista);
}
function ordenarPorValue(lista){
    lista.sort((a, b) => 
        a.value.localeCompare(b.value)
    );
    dibujarCartas(lista);
}


dibujarCartas(listaInstanciada);
btnOrdSuit.addEventListener("click", () => {
    ordenarPorSuit(listaInstanciada);
})
btnOrdValue.addEventListener("click", () => {
    ordenarPorValue(listaInstanciada);
})