// Encontrar el numero n de una figura piramidal triangular (tetrahedron)
// (nivel) -> cantidad de numeritos

// Figurative number
const tetrahedron = (level) => {
    let count = 1;
    while (count <= level) {
        console.log("T" + count + " = " + (count * (count + 1) / 2));
        count++;
    }
}
tetrahedron(10);

// Crear una funcion que tome el nombre de un pais y su area
// (nombre,a)
// Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta
// ('Russia', 17098242) -> Rusia is 11.48%

// Portion of area
const areaEarth = 148939390.2439024;
const portionArea = (country, portion) => {
    return `The country ${country} has an area of ${((portion / areaEarth) * 100).toFixed(4)}% of Earth superficie `
}

console.log(portionArea('USA', 9372610));

// Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0
// No se pueden utilizar condicionales, ternario, negaciones ni operadores bit
const zeroOne = (number) => {
    const array = ['1', '0'];
    return array[number];
}
console.log(zeroOne(0));

//Messenger bzz
// (0)n 
// Si no hay nadie -> "No hay nadie en linea"
// Si hay 1 persona -> "User1 esta en linea"
// Si hay 2 personas -> " User 1 y User2 esan en linea"
// Si hay n>2 personas -> "User1 y Usern-1 estan en linea"

const messengerBzz = (n) => {
    switch (true) {
        case n == 0:
            console.log("It looks like is not anybody here :c");
            break;
        case n == 1:
            console.log(`User1 is online `);
            break;
        case n == 2:
            console.log(`User1 and user2 are online `);
            break;
        case n >= 3:
            console.log(`User${n-1} and User${n} are online too`);
        default:
            return console.log("That's not a valid number try again")
        break;
    }
}

messengerBzz(-1);