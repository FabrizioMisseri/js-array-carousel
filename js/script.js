// **Consegna:**
// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
const imgs = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg"
];

const itemContainer = document.querySelector(".item-container");
// **MILESTONE 1**
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
// **MILESTONE 2**
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
for (let i = 0; i < imgs.length; i++) {
    const thisImg = imgs[i];
    const element = `
    <div class="item">
        <img src="${thisImg}">
    </div>
    `;
    itemContainer.innerHTML += element;
}
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
const items = document.getElementsByClassName("item");
let sliderPosition = 0;
items[sliderPosition].classList.add("active");
// **MILESTONE 3**
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
const upBtn = document.querySelector(".up-arrow");
const downBtn = document.querySelector(".down-arrow");

upBtn.addEventListener ("click", function() {
    if (sliderPosition < (items.length - 1)) {
        items[sliderPosition].classList.remove("active");
        sliderPosition++
        items[sliderPosition].classList.add("active");
    }
})

downBtn.addEventListener ("click", function() {
    if (sliderPosition > 0) {
        items[sliderPosition].classList.remove("active");
        sliderPosition--
        items[sliderPosition].classList.add("active");
    }
})