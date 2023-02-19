// Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
const MCD = (number1, number2) => {
    if(number1 == 0){
        return number2;
    }else{
        return MCD(number2%number1,number1);
    }
}
console.log("The MCD of the numbers is "+MCD(125,80));

// Serie Fibonacci
 const fibonnaciS = (number) => {

      if (number <= 1){
          return number;
      }else{
        return (fibonnaciS(number-1)+fibonnaciS(number-2))   
     }
}

//console.log(fibonnaciS(25));

 

