// Récupération de la div du DVD
let Objdvd = document.getElementById('Objdvd');
// Récupération de l'élément DVD
let dvd = document.getElementById('dvd');

// Mise à jour de la taille de la fenêtre
window.addEventListener('resize', function () {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
});

// Position initiale du DVD sur l'écran
let posX = 400;
let posY = 250;

// Vitesse de déplacement du DVD
let velocityX = 1;
let velocityY = 1;

const dvdWidth = 280; // Largeur du DVD
const dvdHeight = 140; // Hauteur du DVD

// Fonction de déplacement du DVD
function moov() {
    posX += velocityX;
    posY += velocityY;

    // Taille de la fenêtre du DVD
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (posX <= 0 || posX + dvdWidth >= screenWidth) {
        velocityX = -velocityX; // Inverser la direction horizontale    
        changeColor(); // Changer la couleur à chaque rebond B/G/Y/R
    }

    if (posY <= 0 || posY + dvdHeight >= screenHeight) {
        velocityY = -velocityY; // Inverser la direction verticale
        changeColor(); // Changer la couleur à chaque rebond B/G/Y/R
    }

    Objdvd.style.left = posX + 'px';
    Objdvd.style.top = posY + 'px';

    requestAnimationFrame(moov);
}

function changeColor() {
    const colors = ['blue', 'green', 'yellow', 'red'];
    const randomColor = Math.floor(Math.random() * colors.length);
    dvd.style.fill = colors[randomColor];
}