const contenedorCartas = document.getElementById("cartas");
const btnOrdValueDesc = document.getElementById("boton-value-desc");
const btnOrdValueAsc = document.getElementById("boton-value-asc");

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

function ordenarPorValueAsc(lista){
    lista.sort((a, b) => 
        a.value.localeCompare(b.value)
    );
    dibujarCartas(lista);
}

function ordenarPorValueDesc(lista){
    lista.sort((b, a) => 
        a.value.localeCompare(b.value)
    );
    dibujarCartas(lista);
}


dibujarCartas(listaInstanciada);
btnOrdValueDesc.addEventListener("click", () => {
    ordenarPorValueDesc(listaInstanciada);
})
btnOrdValueAsc.addEventListener("click", () => {
    ordenarPorValueAsc(listaInstanciada);
})