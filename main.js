const contenedorCartas = document.getElementById("cartas");
const btnAnterior = document.getElementById("anterior");
const btnSiguiente = document.getElementById("siguiente");
let listaCartas = [];
let paginas = [];
let paginaActual = 0;

async function traerCartas() {
    contenedorCartas.innerHTML = "";
    const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=52"
        try{
            const respuesta = await fetch(url);
            if(!respuesta.ok){
                alert("Carta no encontrada!");
            }else{
                const data = await respuesta.json();
                const cartas = data.cards;
                listaCartas = cartas.map(elemento => new Carta(elemento.code, elemento.value, elemento.suit, elemento.image));
                let pagina = [];
                for(let i = 0; i < listaCartas.length; i++){
                    if((i == 0) || (i % 6 != 0)){
                        pagina.push(listaCartas[i]);
                    }else{
                        paginas.push(pagina);
                        pagina = [];
                        pagina.push(listaCartas[i]);
                    }
                }
            }
            console.log("Paginas:")
            console.log(paginas);
            dibujarCartas(paginaActual);
        }catch(e){
            alert("Falló la conexión")
        }
}

function dibujarCartas(nroPagina){
    contenedorCartas.innerHTML = "";
    for(let i = 0; i < paginas[nroPagina].length; i++){
        const carta = paginas[nroPagina][i];
        const elemento = carta.createHtmlElement();
        contenedorCartas.appendChild(elemento);
    }
}

function paginaAnterior(){
    if(paginaActual > 0){
        paginaActual--
        dibujarCartas(paginaActual);
    }else{
        alert("¡No hay páginas anteriores!")
    }
}

function paginaSiguiente(){
    if(paginaActual < paginas.length-1){
        paginaActual++
        dibujarCartas(paginaActual);
    }else{
        alert("¡No hay páginas siguientes!")
    }
}

traerCartas();
btnAnterior.addEventListener("click", paginaAnterior);
btnSiguiente.addEventListener("click", paginaSiguiente);
