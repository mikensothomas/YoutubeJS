var ingredientes = ['mel', 'agua', 'sal', 'mostarda'];

function capitalizado(ingredientes){

    var modificado = [];

    for ( var i = 0; i < ingredientes.length; i++){
        var letraInicial = ingredientes[i].charAt(0).toUpperCase();
        var restoTexto = ingredientes[i].slice(1);
        var resultado = letraInicial + restoTexto;
        console.log(resultado);
    
        modificado[i] = resultado;
    }
    return modificado;
}

function ordenar(ingredientes){
    var ordenado = ingredientes.sort(function(a,b){
        return a.localeCompare(b);
    });
    return ordenado;
}

var resultadoCaptalizado = capitalizado(ingredientes);
var resultadoOrdenado = ordenar(resultadoCaptalizado);

console.log(resultadoCaptalizado);
//console.log(resultadoOrdenado);