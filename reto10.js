// Crear una funcion que tome 2 parametros, (numero, longitud) y regrse un array de longitud 
// cantidad de numeros multiplos del numero por parametro
// arrayMultiplos(2, 10) -> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// arrayMultiplos(17, 6) -> [17, 34, 51, 68, 85, 102]

const Multiplos = (number, long) =>{
    let arrayM = [];
    for(let i=1;i<=long*number;i++){
        if(i%number==0){
            console.log(` The number ${i} is multiplo of ${number} `);
            arrayM[i] = i;
        }
    }
    console.log(" The final array is: ["+arrayM.filter(el => el != null)+"]");
}

// Multiplos(2,10);

// Escrbir una funcion que descubra si el array es dominante positivo
// Un array es positivo dominante cuando la mayoria de sus elementos 
// son positivos -> [1, -2, 55, 10]
// positiveDom([-1, -3, -5, 4, 6767]) -> false

let array = [-1, -2, 55, 10];
const dominantArray = (array) =>{
    let contP = 0;
    let contN = 0;
    for(let i=0;i<array.length;i++){
        if(array[i]>0){
            contP++;
        }else{
            contN++;
        }
    }
    console.log(contN);
    //intenta con un switch
    if(contP > contN){
        console.log(`The array ${array} is a Positive dominant`);
    }else{
        console.log(`The array ${array} is not  a  Positive dominant`);
    }
}

dominantArray(array);