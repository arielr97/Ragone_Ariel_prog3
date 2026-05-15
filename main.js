const contenedorCartas = document.getElementById("cartas");

async function traerCartas() {
    contenedorCartas.innerHTML = "";
    const url = "https://deckofcardsapi.com/api/deck/new/draw/?count=6"
        try{
            const respuesta = await fetch(url);
            if(!respuesta.ok){
                alert("Carta no encontrada!");
            }else{
                const data = await respuesta.json();
                const cartas = data.cards;
                for(let i = 0; i < cartas.length; i++){
                    const carta = new Carta(cartas[i].code, cartas[i].value, cartas[i].suit, cartas[i].image);
                    const elemento = carta.createHtmlElement();
                    console.log(carta);
                    contenedorCartas.appendChild(elemento);
                }
            }
        }catch(e){
            alert("Falló la conexión")
        }
}

traerCartas();
console.log("ultimo");