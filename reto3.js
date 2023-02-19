// Crear el sistema de calendario para verificar si el dia actual, junto a la hora
// es considerada dia y horario laboral estandar
// 9:00 am - 6pm es horario laboral
// new Date().getDay(). da como resultado el dia de la semana del 0-6 siendo 0-Domingo y asi sucesivamente

const businessHours = () => {
    //  data
    let today = new Date();
    let day = today.getDay();
    // hour
    let hour = today.toLocaleTimeString();
    // let's start with the determinate if it is a WorkDay
    if ((day > 0 && day < 6) && (hour > 9 && hour < 18)) {
        console.log(" Buh is a working day");
    } else {
        console.log(" Yeah is time to rest ");
    }
}
businessHours();
