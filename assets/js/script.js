//Elementos
const txtPrincipal = document.getElementsByClassName("txt-principal")[0];
const btnContinue = document.getElementsByClassName("btn-continue")[0];
const imgSticker = document.getElementsByClassName("img-sticker")[0];
const imgSecret = document.getElementsByClassName("img-secret")[0];

//Inicializacion
var countNumLine = 1;

//Functions (Lists)
const textPrincipalComplete = (numLine) => {
    switch (numLine) {
        case 1:
            return "Oye preciosa..."
        case 2:
            return "Oye hermosa..."
        case 3:
            return "Oye chulada de señorita..."
        case 4:
            return "Quiero contarte algo..."
        case 5:
            return "Eres una chica maravillosa..."
        case 6:
            return "Con un bonito corazón..."
        case 7:
            return "Una personita muy especial en mi vida..."
        case 8:
            return "A la que amo demasiado..."
        case 9:
            return "Por el tiempo, por la atención..."
        case 10:
            return "Por el cuidado, por el amor..."
        case 11:
            return "Y por todo lo que me has dado..."
        case 12:
            return "Por todo lo que representas para mí..."
        case 13:
            return "Por simplemente ser tu..."
        case 14:
            return "Quiero pedirte algo mi princesita..."
        case 15:
            return "¿Te gustaría ser mi..."
        case 16:
            return "¿Te gustaría ser mi San Valentine?"
        case 17:
            return "¡Sabía de dirías que si mi niña bonita!"
        default:
            break;
    }
}

const urlSticker = (numLine) => {
    switch (numLine) {
        case 1:
            return "./assets/img/Stickers/Kuromi-Sticker3.gif";
        case 2:
            return "./assets/img/Stickers/Kuromi-Sticker.gif"
        case 3:
            return "./assets/img/Stickers/Kuromi-Sticker2.gif"
        case 4:
            return "./assets/img/Stickers/Capybara-Sticker4.gif"
        case 5:
            return "./assets/img/Stickers/Capybara-Sticker1.gif"
        case 6:
            return "./assets/img/Stickers/Capybara-Sticker3.gif"
        case 7:
            return "./assets/img/Stickers/Capybara-Sticker2.gif"
        case 8:
            return "./assets/img/Stickers/Capybara-Sticker6.gif"
        case 9:
            return "./assets/img/Stickers/Capybara-Sticker11.gif"
        case 10:
            return "./assets/img/Stickers/Capybara-Sticker.gif"
        case 11:
            return "./assets/img/Stickers/Capybara-Sticker10.gif"
        case 12:
            return "./assets/img/Stickers/Capybara-Sticker8.gif"
        case 13:
            return "./assets/img/Stickers/Capybara-Sticker1.gif"
        case 14:
            return "./assets/img/Stickers/Capybara-Sticker4.gif"
        case 15:
            return "./assets/img/Stickers/Capybara-Sticker7.gif"
        case 16:
            return "./assets/img/Stickers/Capybara-Sticker9.gif"
        case 17:
            return "./assets/img/Stickers/Capybara-Sticker1.gif"
        default:
            break;
    }
}

const urlImgSecret = (numLine) => {
    switch (numLine) {
        case 1:
            return "./assets/img/Secret Photos/Foto.jpg";
        case 2:
            return "./assets/img/Secret Photos/Foto1.jpg"
        case 3:
            return "./assets/img/Secret Photos/Foto2.jpg"
        case 4:
            return "./assets/img/Secret Photos/Mensaje.jpg"
        case 5:
            return "./assets/img/Secret Photos/Detalle2.jpg"
        case 6:
            return "./assets/img/Secret Photos/Detalle3.jpg"
        case 7:
            return "./assets/img/Secret Photos/Cancion1.jpg"
        case 8:
            return "./assets/img/Secret Photos/Detalle6.jpg"
        case 9:
            return "./assets/img/Secret Photos/Cancion.jpg"
        case 10:
            return "./assets/img/Secret Photos/Detalle4.jpg"
        case 11:
            return "./assets/img/Secret Photos/Cancion2.jpg"
        case 12:
            return "./assets/img/Secret Photos/Detalle1.jpg"
        case 13:
            return "./assets/img/Secret Photos/Detalle7.jpg"
        case 14:
            return "./assets/img/Secret Photos/Cancion5.jpg"
        case 15:
            return "./assets/img/Secret Photos/Cancion8.jpg"
        case 16:
            return "./assets/img/Secret Photos/Foto4.jpg"
        case 17:
            return "./assets/img/Secret Photos/Foto3.jpg"
        default:
            break;
    }
}

//Functions (Changes)
const writeTextPrincipal = (numLine) => {
    txtPrincipal.innerText = textPrincipalComplete(numLine);
}

const changeSticker = (numLine) => {
    imgSticker.src = urlSticker(numLine);
}

const changeImgSecret = (numLine) => {
    imgSecret.src = urlImgSecret(numLine);
}

const changeDisplayImgSecret = (display) => {
    imgSecret.style.display = display;
}

//Inicializacion HTML
writeTextPrincipal(countNumLine);
changeSticker(countNumLine);
btnContinue.innerText = "Continuar...";
changeImgSecret(countNumLine);
changeDisplayImgSecret("none");

//Clicks Events
btnContinue.addEventListener("click", () => {
    countNumLine++;
    writeTextPrincipal(countNumLine);
    changeSticker(countNumLine);
    changeImgSecret(countNumLine);
    changeDisplayImgSecret("none");
    
    if (countNumLine > 15)
        btnContinue.style.display = "none";
});

imgSticker.addEventListener("click", () => {
    changeDisplayImgSecret("block");
});