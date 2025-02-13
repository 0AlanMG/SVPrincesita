//Elementos
const txtPrincipal = document.getElementsByClassName("txt-principal")[0];
const btnContinue = document.getElementsByClassName("btn-continue")[0];

//Inicializacion
var countNumLine = 1;

//Functions
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

const writeTextPrincipal = (numLine) => {
    txtPrincipal.innerText = textPrincipalComplete(numLine);
}

//Inicializacion HTML
writeTextPrincipal(countNumLine);
btnContinue.innerText = "Continuar...";

//Clicks Events
btnContinue.addEventListener("click", () => {
    countNumLine++;
    writeTextPrincipal(countNumLine);
    
    if (countNumLine > 15)
        btnContinue.style.display = "none";
});