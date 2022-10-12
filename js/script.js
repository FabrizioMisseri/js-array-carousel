// **Consegna:**
// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
// **MILESTONE 1**
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
const imgs = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg"
];
// **MILESTONE 2**
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
const main = document.querySelector("main");

for (let i = 0; i < imgs.length; i++) {
    let thisImg = imgs[i];
    let element = `<div class="item hidden"> <img src="${thisImg}"> </div>`;
    main.innerHTML += element
};
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.

const items = document.getElementsByClassName("item");
const darkVeil = document.getElementsByClassName("dark-veil");
const card = document.getElementsByClassName("card");
let itemSelector = 0;
items[itemSelector].classList.remove("hidden");
darkVeil[itemSelector].classList.add("hidden");
card[itemSelector].classList.add("white-border");

// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
// **MILESTONE 3**
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

const upBtn = document.querySelector(".up-arrow");
const downBtn = document.querySelector(".down-arrow");

upBtn.addEventListener("click", function() {
    if (itemSelector < (items.length - 1)) {
        items[itemSelector].classList.add("hidden");
        darkVeil[itemSelector].classList.remove("hidden");
        card[itemSelector].classList.remove("white-border");

        itemSelector++

        items[itemSelector].classList.remove("hidden");
        darkVeil[itemSelector].classList.add("hidden");
        card[itemSelector].classList.add("white-border");

    } else {
        
        items[itemSelector].classList.add("hidden");
        darkVeil[itemSelector].classList.remove("hidden");
        card[itemSelector].classList.remove("white-border");
        
        itemSelector = 0

        items[itemSelector].classList.remove("hidden");
        darkVeil[itemSelector].classList.add("hidden");
        card[itemSelector].classList.add("white-border");
    }
})

downBtn.addEventListener("click", function() {
    if (itemSelector > 0) {

        items[itemSelector].classList.add("hidden");
        darkVeil[itemSelector].classList.remove("hidden");
        card[itemSelector].classList.remove("white-border");

        itemSelector--

        items[itemSelector].classList.remove("hidden");
        darkVeil[itemSelector].classList.add("hidden");
        card[itemSelector].classList.add("white-border");

    } else {

        items[itemSelector].classList.add("hidden");
        darkVeil[itemSelector].classList.remove("hidden");
        card[itemSelector].classList.remove("white-border");

        itemSelector = (items.length - 1);
        
        items[itemSelector].classList.remove("hidden");
        darkVeil[itemSelector].classList.add("hidden");
        card[itemSelector].classList.add("white-border");
    }
})