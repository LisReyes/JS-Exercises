// Encontrar el numero n de una figura piramidal triangular (tetrahedron)
// (nivel) -> cantidad de numeritos

// Figurative number
const tetrahedron = (level) => {
    let count=1;
    while(count <= level){
        console.log("T"+count + " = "+(count*(count+1)/2));
        count++;
    }
}
tetrahedron(10);

// Crear una funcion que tome el nombre de un pais y su area
// (nombre,a)
// Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta
// ('Russia', 17098242) -> Rusia is 11.48%

// Portion of area
const portionArea = (country,portion) => {
     
}

// Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0
// No se pueden utilizar condicionales, ternario, negaciones ni operadores bit
const zeroOne = (number) => {

}

//Messenger bzz
// (0)n 
// Si no hay nadie -> "No hay nadie en linea"
// Si hay 1 persona -> "User1 esta en linea"
// Si hay 2 personas -> " User 1 y User2 esan en linea"
// Si hay n>2 personas -> "User1 y Usern-1 estan en linea"

const messengerBzz = (n) => {
    let res;
    switch(n){
        case 0:
            res = 1;
            break;
        case 1:
            res = 2;
            break;
        default:
            return "Its look like is not anybody here :c"
    }
    return `It's a ${res}`
}