//1.- Tamaño Grande - Dado un array, escribe una función que cambie todos los números
//    positivos en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, 
//    “big”, “big”, -5].

function grande(arr){
    for(var i=0;0<arr.length;i++){
        if(arr[i]>0){
            arr[i]="big";
        }
    }
    return arr;
}
console.log(grande([-1,3,5,-5]));

//2.- Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un
//    array de números. La función debería imprimir (print) el menor valor del array, y
//    devolver (return) el mayor. 

function imprimeRetorna(arr){
    var min = arr[0]; 
    var max = arr[0];
    for(var i =0; i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
        if(arr[i]>max){
            max=arr[i];
        }
    }
    console.log(min);
    return max;
}
console.log(imprimeRetorna([5,4,7,9,11]));

//3.- Imprime (print) uno, devuelve (return) otro- Crea una función para un 
//    array de números. La función debería imprimir (print) el penúltimo 
//    valor y devolver (return) el primer valor impar.

function unoOtro(arr){
    var impar =0;
    console.log(arr[arr.length-2]);
    for(var i =0;i<arr.length;i++){
        if(arr[i]%2!=0){
             impar = arr[i];
             break;            
        }
    }
    return impar;
}
console.log(unoOtro([2,4,7,3,9]));

//4.- Doble Visión - Dado un array, crea una función que devuelva 
//    un nuevo array donde cada valor se duplique. Entonces, doble([1,2,3]) 
//    debiera devolver [2, 4, 6] sin cambiar el array original. 

function Doble(arr){
    var arrreglo =[];
    for(var i = 0; i<arr.length; i++){
        arrreglo.push(arr[i]*2);
    }
    return arrreglo;
}
console.log(Doble([1,2,3]));

// 5.- Contar Positivos -  Dado un array de números, crea una función 
//     para reemplazar el último valor con el número de valores positivos 
//     encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) 
//     cambia el array original y devuelve [-1,1,1,3].

function contarPositivos(arr){

    var contador = 0; 
    for (var i=0;i<arr.length;i++){
        if(arr[i]>0){
            contador++;
        }
    }
    arr[arr.length-1]=contador; 
    return arr; 
}
console.log(contarPositivos([-1,1,1,1]));

//6.- Pares e Impares - Crea una función que acepte un array. 
//    Cada vez que ese array tenga 3 valores impares seguidos, 
//    imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 
//    pares seguidos, imprime (print) “¡Es para bien!”.

function paresImpares(arr){
    var par = 0; 
    var impar = 0; 
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            par++; 
            impar =0; 
        }else {
            impar ++; 
            par =0; 
        }
        if(par == 3){
            console.log("¡es para bien!");
        }
        if(impar ==3){
            console.log("¡Qué imparcial!");
        }
    }
}
paresImpares([1,2,3,4,6,8,7,9,11,12,14,16]);

//7.- Incrementa los Segundos - Dado un array de números arr, 
//    agrega 1 a cualquier otro elemento, específicamente a aquellos 
//    cuyo índice es impar (arr[1], arr[3], arr[5], etc). 
//    Luego, console.log cada valor del array y devuelve arr. 

function incrementar(arr){

    for(var i=0;i<arr.length;i++){

        


    }


}