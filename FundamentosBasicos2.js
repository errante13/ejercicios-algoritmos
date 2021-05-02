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
        if(i%2!=0){
            arr[i]=arr[i]+1;
        }
        console.log(arr[i]);    
    }
return arr;
}
console.log(incrementar([1,2,3,4,5]));

// 8.-Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ 
//    o ‘dado un array’) que contiene strings, reemplaza cada string con un 
//    número de acuerdo cantidad de letras (longitud) del string anterior. 
//    Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería 
//    devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?

function longitudes(arr){
   for(var i=arr.length-1;i>0; i--) {
    arr[i]=arr[i-1].length;
   }
return arr;
}
console.log(longitudes(["programar","dojo","genial"]));

// 9.- Agrega Siete - Construye una función que acepte un array. 
//     Devuelve un nuevo array con todos los valores del original, 
//     pero sumando 7 a cada uno. No alteres el array original. 
//     Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. 

function agregaSiete(arr){
    var arreglo=[];
    for(var i=0;i<arr.length;i++){
        arreglo.push(arr[i]+7);
    }
return arreglo;
}
console.log(agregaSiete([1,2,3]));

// 10.-Array Inverso - Dado un array, escribe una función que invierte sus 
//     valores en el lugar. Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo 
//     array pero con sus valores al revés, es decir [2,4,6,1,3]. Haz esto sin 
//     crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).

function inverso(arr){
    for (var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
console.log(inverso([3,1,6,4,2,5]));

// 11.-Negativa - Dado un array crear y devuelve uno nuevo que contenga todos
//     los valores del array original, pero negativos (no simplemente multiplicando 
//     por -1). Dado [1,-3,5], devuelve [-1,-3,-5].

function perspectiva(arr){
 var arreglo=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]>0){
           arreglo.push(arr[i]*-1);
        }else{
            arreglo.push(arr[i]);
        }
    }
return arreglo;
}
console.log(perspectiva([1,-3,5,7,-7,6]));

//12.- Siempre hambriento - Crea una función que acepte un array e imprima 
//     (print) “yummy” cada vez que alguno de los valores sea “comida”. 
//     Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 

function hambriento(arr){
    var comida=0;
    for(var i=0; i<arr.length;i++){
        if(arr[i]=="comida"){
            console.log("yummy");
            comida++;
        }
    }
    if(comida==0){
        console.log("tengo hambre");
    }
}
hambriento(["comida","gato","comida"]);
hambriento([1,2,3,4]);

//13.- Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, 
//     el tercero con el ante penútimo, etc. Ejemplo: 
//     cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a 
//     [“pizza¨, 42, “Ada”, 2, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) cambia 
//     el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez


function centro(arr){
    for (var i = 0; i < arr.length/2; i+=2){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
console.log(centro(["true",42,"Ada",2,"pizza"]));

//14.- Escala el Array - Dado un array arr y un número num, multiplica todos 
//     los valores en el array arr por el número num, y devuelve el array arr 
//     modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].

function escala(arr,y){
    for(var i=0;i<arr.length; i++){
        arr[i]=arr[i]*y;
    }
    return arr;
}
console.log(escala([1,2,3],3));