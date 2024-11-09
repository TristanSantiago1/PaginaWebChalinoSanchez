let tituloCancion;
let letraCancion;
let letraDiv;
var audio;

document.addEventListener("DOMContentLoaded", () => {
    tituloCancion = document.getElementById("tituloCancion");
    letraCancion = document.getElementById("letraCancion");
    letraDiv = document.querySelector(".letra");
    audio = document.getElementById("audioPlayer");

    letraDiv.style.display = "none";
});

function playSong(element) {
    let songliryc;
    let songTitle;

    switch (element.id) {
        case 'nieves':
            songliryc = nievesLetra;
            songTitle = "Nieves de Enero";
            audio.src = "../audios/Nieves de Enero.mp3"
            break;
        case 'alma':
            songliryc = almaLetra;
            songTitle = "Alma Enamorada";
            audio.src = "../audios/Alma Enamorada.mp3"
            break;
        case 'pavido':
            songliryc = pavidoLetra;
            songTitle = "Pavido Navido";
            audio.src = "../audios/pavido navido.mp3"
            break;
        case 'chismes':
            songliryc = chismesLetra;
            songTitle = "Los Chismes";
            audio.src = "../audios/Los Chismes.mp3"
            break;
        case 'ojitos':
            songliryc = ojitos;
            songTitle = "Lindos Ojitos Azules";
            audio.src = "../audios/Lindos Ojitos Azules.mp3"
            break;
        default:
            letraCancion.textContent = "Letra no disponible";
            tituloCancion.textContent = "";
            letraDiv.style.display = "none";
            return;
    }

    tituloCancion.textContent = songTitle;
    letraCancion.innerHTML = songliryc;
    
    letraDiv.style.display = "block";



    audio.play();

   
}




var almaLetra = "Tengo el alma enamorada nomás de pensar, corazón<br>" +
"De soñarme noche a noche, dueño de tu amor <br>" +
"Tengo el alma enamorada, muy enamorada, mi bien<br>" +
"Si me das toda tu vida, yo te la doy también<br><br>" +
"Tengo el alma enamorada, nomás de pensar, corazón<br>" +
"De soñarme noche a noche, dueño de tu amor<br>" +
"Tengo el alma enamorada, muy enamorada, mi bien<br>" +
"Si me das toda tu vida, yo te la doy también<br><br>" +
"Di, di si tu corazón<br>" +
"Tiene otro amor o tiene otro cariño<br>" +
"Di, di si no hay otro amor<br>" +
"Porque mi corazón morirá por ti<br><br>" +
"Yo no sé si tú me quieras, pero yo te puedo esperar<br>" +
"Si me dejas esperando, me vas a matar<br>" +
"No me niegues tu mirada, porque yo la quiero soñar<br>" +
"Y mi alma enamorada a ti te quiere más<br><br>" +
"Yo no sé si tú me quieras, pero yo te puedo esperar<br>" +
"Si me dejas esperando, me vas a matar<br>" +
"No me niegues tu mirada, porque yo la quiero soñar<br>" +
"Y mi alma enamorada a ti te quiere más<br><br>" +
"Di, di si tu corazón<br>" +
"Tiene otro amor o tiene otro cariño<br>" +
"Di, di si no hay otro amor<br>" +
"Porque mi corazón morirá por ti";

var nievesLetra = "Se ha llegado el momento, chatita del alma, de hablar<br>" +
"Sin mentiras<br>" +
"Espere mucho tiempo pa ver si cambiabas, y tú<br>" +
"Ni me miras<br>" +
"Al principio dijiste que, ya que vinieran<br>" +
"Las nieves de enero<br>" +
"Ir a ver a la Virgen y luego casarnos sería<br>" +
"Lo primero<br><br>" +
"Ya se fueron las nieves de enero<br>" +
"Y llegaron las flores de mayo<br>" +
"Ya lo ves, me he aguantado a lo macho<br>" +
"Y mi amargo dolor me lo callo<br><br>" +
"Ya se fueron las flores y llegó el invierno, y tú<br>" +
"Ni me miras<br>" +
"Es por eso te digo se llegó el momento de hablar<br>" +
"Sin mentiras<br>" +
"Al principio dijiste que, ya que vinieran<br>" +
"Las nieves de enero<br>" +
"Ir a ver a la Virgen y luego casarnos sería<br>" +
"Lo primero<br><br>" +
"No soporto ya más tus mentiras<br>" +
"Esta espera me está destrozando<br>" +
"Al mirar que han pasado los años<br>" +
"Y no pienso morirme esperando<br><br>" +
"Ya se fueron las nieves de enero<br>" +
"Ya llegaron las flores de mayo<br>" +
"Ya lo ves, me he aguantado a lo macho<br>" +
"Y mi amargo dolor me lo callo";

let ojitos = `Eres flor que al correr de los años<br>
no as perdido jamas tu ternura<br>
yo no e visto brillar las estrellas<br>
me persige una perra amargura<br>
Esos labios que un dia me dijieron<br><br>
tu recuerdo no guardo en mi pecho<br>
esos ojos que un dia me lloraron<br>
hoy sonriendo me brindan despresio<br>
Esos lindos ojitos azules<br><br>
con que adornan grasiosa tu frente<br>
no crei que con una mirada<br>
sentenciara mi pena de muerte<br>
No e podido olvidar tu carino<br><br>
no me culpes te sigo queriendo<br>
tu te encuentras tan lejos de mi<br>
yo me encuentro tu ausencia sufriendo<br>
Me despido florita del alma<br><br>
me despido llorando y cantando<br>
aunque tu no me quieras mirar<br>
no me importa yo te sigo amando<br>
Esos lindos ojitos azules<br><br>
con que adornan grasiosa tu frente<br>
no qrei que con una mirada<br>
se entenciara mi pena de muerte`;


let pavidoLetra = `Ya se reventó el columpio<br>
Donde ella se columpiaba<br>
Ya se le acabaron los gustos<br>
A la joven que yo amaba<br><br>
Bienvenivido, Pavido Navido<br>
Dónde está tu esposa, Navida<br>
Componiéndose el vestivido<br>
Arreglándose el peinavido<br>
Las hijas del Pavido Navido<br>
El cordón del churumbel<br><br>
El que quiera ser mi amigo<br>
Tres cosas debe tener<br>
Buena silla, buen caballo<br>
Buenas piernas para correr<br><br>
Bienvenivido, Pavido Navido<br>
Dónde está tu esposa, Navida<br
Componiéndose el vestivido<br>
Arreglándose el peinavido<br>
Las hijas del Pavido Navido<br>
El cordón del churumbel<br><br>
El que anda de enamorado<br>
Y no tiene que gastar<br>
Échenle un balde de agua<br>
Como un perro a remojar<br><br>
Bienvenivido, Pavido Navido<br>
Dónde está tu esposa, Navida<br>
Componiéndose el vestivido<br>
Arreglándose el peinavido<br>
Las hijas del pavido navido<br>
El cordón del churumbel<br><br>
Ya me voy para Chacala<br>
A ver a las Chacaleñas<br>
A ver si bailarlas puedo<br>
O me atasco hasta las greñas<br><br>
Bienvenivido, Pavido Navido<br>
Dónde está tu esposa, Navida<br>
Componiéndose el vestivido<br>
Arreglándose el peinavido<br>
Las hijas del Pavido Navido<br>
El cordón del churumbel<br>`;

let chismesLetra= `Nada mas abrí la boca<br>
Que ya estaba por casarme<br>
Y la gente que es curiosa<br>
Terminó por preguntarme<br>
Al saber quién es la novia<br>
Ya querían desanimarme<br><br>
Dicen que eres algo ciega<br>
Pero no me importa tanto<br>
Yo te quiero pa' mi esposa<br>
No para tirar al blanco<br>
Cuando no me veas, me tientas<br>
Pa' que sepas por 'onde ando<br><br>
A mí los chismes<br>
Me vienen flojos<br>
Y no me importa lo que digan por ahí<br><br>
Te quiero mucho<br>
Bien de mi vida<br>
Y nunca nadie me podrá alejar de ti<br><br>
Y no te aflijas chiquita<br>
Que estando bien con Dios<br>
Los santos valen un cero a la izquierda, si señor<br><br>
También dicen que eres fea<br>
Eso a mí no me interesa<br>
Porque nunca te he querido<br>
Pa' concurso de belleza<br>
Aunque fueras cacariza<br>
Para mí eres mi princesa<br><br>
Por ahí dicen que eres flaca<br>
Eso ya me lo sabia<br>
Al cabo es que no te quiero<br>
Pa' poner carnicería<br>
Si quisiera una gordita<br>
Sé que me la conseguía<br><br>
Me dijeron que estás prieta<br>
Y que no te voy a mirar<br>
Yo tengo mucho dinero<br>
Y te mando a niquelar<br>
Para que relampaguees<br>
Y te vea en la oscuridad<br><br>
A mí los chismes<br>
Me vienen flojos<br>
Y no me importa lo que digan por ahí<br><br>
Te quiero mucho<br>
Bien de mi vida<br>
Y nunca nadie me podrá alejar de ti`;
