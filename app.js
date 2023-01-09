import madificador from "./madificador.js";

var ingredientes = ['mel', 'agua', 'sal', 'mostarda'];
var resultadoCaptalizado = madificador.capitalizar(ingredientes);
var resultadoOrdenado = madificador.ordenar(resultadoCaptalizado);
var restoCaixaAlta = madificador.caixaAlta(ingredientes);

console.log(resultadoCaptalizado);
console.log(resultadoOrdenado);
console.log(restoCaixaAlta);