const carrusel = document.querySelector(".carrusel");

function scrollCarruselLeft() {
    carrusel.scrollBy({ left: -600, behavior: "smooth" });
}

function scrollCarruselRight() {
    carrusel.scrollBy({ left: 600, behavior: "smooth" });
}
