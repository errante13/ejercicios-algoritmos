// 1.- Dados un array y un valor Y, cuenta e imprime (print) el 
//     número de valores del array que sean mayores que Y. 

function t(x,y){
    var cont =0; 
        for(var i=0; i<x.length;i++){
            if(x[i]>y){
                cont=cont+1;
            }
        }
    return cont;      
}
var j=[1,4,5,1,3,5]
console.log(t(j,2));


// 2.- Dado un array, imprime los valores máximos (max), 
//     mínimos (min) y promedio (average) para el array. 

function todo(x){

    var min = x[0];
    var max = x[0]; 
    var sum = 0; 
    
    for (var i =0; i<x.length;i++){

        if(x[i]<min){
            min = x[i];
        }
        
        if(x[i]>max){
            max = x[i];
        }

        sum = sum+x[i];
    }
    var pro = sum/x.length; 

    console.log("valor mínimo es: "+ min);
    console.log("valor máximo es: "+ max);
    console.log("el promedio es:  "+ pro);
}

todo([1,2,3,5,7,8]);


// 2.- Dado un array de números, crea una función que dé como resultado un nuevo 
//     array donde los valores negativos se reemplacen por el texto (string) ‘Dojo’. Por ejemplo, 
//     reemplazarNegativos([1,2,-3,-5,5]) debiera devolver [1,2, “Dojo”, “Dojo”, 5].


function negativos(arr){

    for(var i = 0; i<arr.length; i++){

        if(arr[i]<0){
            arr[i]="dojo";
        }
    }
    return arr; 

}

console.log(negativos([1,2,-3,-5,5]));

// 4.- Dado un array y su respectivo índice, remueve los valores en el rango del índice 
//     dado( acortando el array). Por ejemplo, removerRango([20,30,(70)40,50(indefinido)|,60,70],2,4)
//     debiera devolver [20,30,70].

function remover(arr,inicio,final){

    var rango = final-inicio+1; //3
    for (var i = inicio; i<=rango; i++){

        arr[i]=arr[i+rango];

    }
    arr.length = arr.length-rango;
    return arr;
}
var resultado = remover([20,30,40,50,60,70],2,4);
console.log(resultado);  



