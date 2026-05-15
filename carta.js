class Carta{
    code;
    value;
    suit;
    imagen;
    constructor(code, value, suit, imagen){
        if (!code || !value || !suit || !imagen) {
            throw new Error("Los datos son inválidos");
        }
        this.code = code;
        this.value = value;
        this.suit = suit;
        this.imagen = imagen;
    }

    toJsonString(){
        return JSON.stringify(this);
    }
    static createFromJsonString(json) {
        const data = JSON.parse(json);
        return new Carta(data.code, data.value, data.suit, data.imagen);
    }
    createHtmlElement() {
        const div = document.createElement("div");
        div.classList.add("carta-contenedor");
        const img = document.createElement("img");
        img.src = this.imagen;
        img.alt = this.code;
        img.style.width = "100%"
        img.style.cursor = "pointer";
        const p = document.createElement("p");
        p.textContent = `${this.suit} ${this.value}`;
        div.appendChild(img);
        div.appendChild(p);
        return div;
    }
}