'use strict';

function BinarioADecimal(num) {

  var suma = 0;
  var exponente = num.length-1;
    
  for (let i = 0; i < num.length; i++) {
    suma = suma + num[i]*Math.pow(2,exponente)
    exponente--;
    
    }
 return suma;
}

function DecimalABinario(num) {

   var binario = "";

    while (num > 0) {
      var residuo=num%2;
      binario= residuo+binario;
      num = Math.floor(num/2);
    }

   return binario;

}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
