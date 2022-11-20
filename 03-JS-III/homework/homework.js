// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

////////////////////////FUNCIONES PARA UTILIZAR EN LA HOMEWORK//////////////

  function esPar(num) {

    if (num%2==0){
      return true ;

    }else{
      return false;
    }
  }

//////////////////////////

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var suma=0;
    for (var i = 1; i <= 10; i++) {
      suma=suma+i;
    }

    return suma;
}

function encuentraPares(array){

  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  
 var lista=array;

  var listapares=[];


  for (var i = 0 ; i< lista.length; i++) {


    var numpar=esPar(lista[i]);

    if (numpar===true){
      listapares.push(lista[i]);

    }


  }
  return(listapares);


}



function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:

  var lista=array;

  var listacuadrado=[];


  for (var i = 0 ; i< lista.length; i++) {


    listacuadrado.push(lista[i]**2);



  }
  return(listacuadrado);

}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  var lista=array;

  var total=0;


  for (var i = 0 ; i< lista.length; i++) {


    total= total + lista[i];



  }
  return(total);
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  return num.toString().length;


}

  // No modificar nada debajo de esta línea
  // --------------------------------
  encuentraPares([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
  elevaAlCuadrado([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
  sumaArray([1,2,3,4,5,6,7,8,9,10]);
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };


