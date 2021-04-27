//1.- Obtén del 1 al 255: Escribe una función que devuelve un array 
//    con todos los números del 1 al 255.

function devuelve(){
    var arreglo=[];
    for(var i=1; i<=255; i++){
        arreglo.push(i);
    }

    return arreglo; 
}

console.log(devuelve());

//2.- Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 
//    1 al 1000 - Puedes usar un operador de módulo para este ejercicio. 


function pares(){
    suma=0; 
    for(var i =1;i<=1000; i++){
        if (i%2==0){
            suma = suma+i;
        }
    }
    return suma; 
}
console.log(pares());

//3.- Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los
//    números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).

function impares(){
    suma=0; 
    for(var i =1;i<=5000; i++){
        if (i%2!=0){
            suma = suma+i;
        }
    }
    return suma; 
}
console.log(impares());

//4.- Itera un array: Escribe una función que devuelva la suma de todos los valores
//    dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 


function iterar(arreglo){
    var suma = 0; 
    for(var i=0; i<arreglo.length; i++){
        suma = suma+arreglo[i];
    }
    return suma;
}
console.log(iterar([1,2,5]));
console.log(iterar([-5,2,5,12]));

//5.- Encuentra el mayor (max): Dado un array con múltiples valores, escribe una  
//    función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor 
//    (max) es 7). 

function max (arr){
    max = arr[0];
    for(var i=0; i<arr.length;i++){
        if(max<arr[i]){
            max = arr[i];
        }
    }
    return max; 
}
console.log(max([-3,3,5,7]));

//6.-Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una 
//   función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio 
//   es 7.2).
function avg(arr){
    var suma=0; 
    for(var i=0; i<arr.length;i++){
        suma = suma +arr[i];
    }
    var avg = avg = suma/arr.length;
    return avg; 
}
console.log(avg([1,3,5,7,20]));

//7.- Array de impares: Escribe una función que devuelva un array de 
//    todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). 
//    Pista: Usa el método ‘push’.

function arreglosImpares(){
    var arreglo=[];
    for(var i=1;i<=50;i++){
        if(i%2!=0){

            arreglo.push(i);
        }
    }
return arreglo; 
}
console.log(arreglosImpares());

//8.- Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los 
//    valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá
//    2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 

function mayorQue(arr,y){
    cont =0; 
    arreglo =[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]>y){
            cont=cont+1;
            arreglo.push(arr[i]);
        }
    }
    console.log("hay "+cont+" números en el array mayores que "+y+ ", estos son:"+arreglo);
}
mayorQue([1,3,5,7],3);

//9.- Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace 
//    cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).

function cuadrados(arr){
    arreglo=[];
    for(var i=0; i<arr.length;i++){
        arreglo.push(arr[i]*arr[i]);
    }
    return arreglo;
}
console.log(cuadrados([1,5,10,-2]));

//10.- Negativos: Dado un array con múltiples valores, escribe una función que 
//     reemplace cualquier número negativo dentro del array por 0. 
//     Cuando el programa esté listo,el array no debiera contener números negativos
//     (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).

function negativos(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]=0;
        }
    }
return arr;
}
console.log(negativos([1,5,10,-2]));

//11.- Max/Min/Avg: Dado un array con múltiples valores, escribe una función 
//     que devuelva un nuevo array que solo contenga el valor mayor (max), 
//     menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] 
//     devolverá [10,-2,3.5]).

function maxMinAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var suma = 0; 
    var arreglo=[];
    for (var i=0;i<arr.length;i++){
        if(max<arr[i]){
            max= arr[i];
        }
        if(min>arr[i]){
            min = arr[i];
        }
        suma = suma+arr[i];
    }
    var avg = suma/arr.length;
    arreglo.push(max);
    arreglo.push(min);
    arreglo.push(avg);
    return arreglo;
}
console.log(maxMinAvg([1,5,10,-2]));

//12.- Intercambia Valores: Escribe una función que intercambie el primer y el último
//     valor de cualquier array. La extensión mínima predeterminada del array es 2 
//     (ej: [1,5,10,-2] será [-2,5,10,1]). 

function intercambio(arr){
    var contenedor=arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1]= contenedor; 
return arr;
}
console.log(intercambio([1,5,10,-2]));

//13.- De Número a String: Escribe una función que tome un array de números y reemplace
//     cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el 
//     array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].

function string (arr){
    for(var i=0; i<arr.length;i++){
        if(arr[i]<0){
            arr[i]="Dojo";
        }
    }
    return arr;
}
console.log(string([-1,-3,2]));