let mensajeTexto = "";  
let historial;  
let mensaje;    

document.addEventListener("DOMContentLoaded", function() {
    historial = document.getElementById("historial");
    mensaje = document.getElementById("mensaje");
});

function limpiar() {
    historial.value = "";
}

function clickbutton(elemento) {
    switch (elemento.id) {
        case 'byes': mensajeTexto += "Yes"; break;
        case 'bno': mensajeTexto += "No"; break;
        case 'ba': mensajeTexto += "A"; break;
        case 'bb': mensajeTexto += "B"; break;
        case 'bc': mensajeTexto += "C"; break;
        case 'bd': mensajeTexto += "D"; break;
        case 'be': mensajeTexto += "E"; break;
        case 'bf': mensajeTexto += "F"; break;
        case 'bg': mensajeTexto += "G"; break;
        case 'bh': mensajeTexto += "H"; break;
        case 'bi': mensajeTexto += "I"; break;
        case 'bj': mensajeTexto += "J"; break;
        case 'bk': mensajeTexto += "K"; break;
        case 'bl': mensajeTexto += "L"; break;
        case 'bm': mensajeTexto += "M"; break;
        case 'bn': mensajeTexto += "N"; break;
        case 'bo': mensajeTexto += "O"; break;
        case 'bp': mensajeTexto += "P"; break;
        case 'bq': mensajeTexto += "Q"; break;
        case 'br': mensajeTexto += "R"; break;
        case 'bs': mensajeTexto += "S"; break;
        case 'bt': mensajeTexto += "T"; break;
        case 'bu': mensajeTexto += "U"; break;
        case 'bv': mensajeTexto += "V"; break;
        case 'bw': mensajeTexto += "W"; break;
        case 'bx': mensajeTexto += "X"; break;
        case 'by': mensajeTexto += "Y"; break;
        case 'bz': mensajeTexto += "Z"; break;
        case 'b1': mensajeTexto += "1"; break;
        case 'b2': mensajeTexto += "2"; break;
        case 'b3': mensajeTexto += "3"; break;
        case 'b4': mensajeTexto += "4"; break;
        case 'b5': mensajeTexto += "5"; break;
        case 'b6': mensajeTexto += "6"; break;
        case 'b7': mensajeTexto += "7"; break;
        case 'b8': mensajeTexto += "8"; break;
        case 'b9': mensajeTexto += "9"; break;
        case 'b0': mensajeTexto += "0"; break;
        case 'bbye': mensajeTexto += "Good Bye";  break;
    }
    
    mensaje.textContent = mensajeTexto;
}

function enviarMensaje() {
    if (mensajeTexto.trim() === "") return; 

    historial.value += "Tú: " + mensajeTexto + "\n";
    
    let respuestaAutomatica = "";
    if (mensajeTexto.toLowerCase().includes("hola")) {
        respuestaAutomatica = "Hola, Cerote, un corrido o que?";
    } else if (mensajeTexto.toLowerCase().includes("quieneres")) {
        respuestaAutomatica = "EL misimo rey del corrido, y tu plebe?";
    } else if (mensajeTexto.toLowerCase().includes("good bye")) {
        respuestaAutomatica = "Orale perico, hasta luego.";
    } else if (mensajeTexto.toLowerCase().includes("comoestas")) {
        respuestaAutomatica = "Desvivido, como mas voy a estar?";
    }

    if (respuestaAutomatica) {
        historial.value += "Chalino: " + respuestaAutomatica + "\n";
    }

    mensajeTexto = '';
    mensaje.textContent = mensajeTexto;
}

