
// Escribir una funcion que regrese la cantidad de valores true que hay en un array
/* 
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
 */
// Regresar 0 si el array es vacio
// usar recurcion

let pointer = 0;
let countT = 0;
const isTrue = (array) => {
    if (array[pointer]) {
        countT++;
    } 
    if(pointer<array.length) {
        pointer++;
        isTrue(array);
    }
    return countT;
}
let countTrue1 = [true, false, true, false, true, false];
let countTrue2 = [false, true, false, false];
let countTrue3 = [];

console.log("There is "+isTrue(countTrue2)+" true into the array ");
