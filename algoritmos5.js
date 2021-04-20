// 1.- Configura un array para que los valores negativos se transformen en 0. 
//     Por ejemplo, resetNegativos([1,2,-1,-3]) debiera dar como resultado [1,2,0,0].Z


function arreglo(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i]=0;
        }
    }
return arr; 
}
var b = arreglo([1,2,-1,-3]);
console.log(b);


// 2.-Dado un array, mueve todos los valores un espacio de derecha a izquierda eliminando 
//    el primer valor y dejando un 0 para el último valor. Por ejemplo, moverAdelante([1,2,3]) 
//    debiera dar como resultado [2,3,0].Z



function moverAdelante(arr){
    for(var i = 0; i < arr.length ; i++){
    arr[i]=arr[i+1];
}
arr[arr.length-1]=0;
return arr; 
}
var b = moverAdelante([1,2,3]);
console.log(b);


// 3.-Configura un array para que el resultado sean los valores en el orden contrario. 
//    Por ejemplo, returnReverso([1,2,3]) debe dar [3,2,1].


function inverso(arr){
    var arreglo = []; 
    for(var i = arr.length-1; i>= 0; i--){
        arreglo.push(arr[i]); 
    }
return arreglo; 
}
var x = inverso([1,2,3]);
console.log(x);


// 4.- Crea una función que cambie un array repitiendo sus valores originales 
//     (manteniendo el mismo orden). Por ejemplo, repetirValores([4,”Ulysses”, 42, false]) 
//     debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].
function repetir(arr){
    var arreglo =[]; 
    for ( var i =0; i<arr.length; i++){
        arreglo.push(arr[i]);
        arreglo.push(arr[i]);
    }
return arreglo; 
}
var mostrar = repetir([4,"Ulysses",42,false]);
console.log (mostrar);