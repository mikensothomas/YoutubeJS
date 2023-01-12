function captizalizarovo(colocao, atributo){
    if(typeof colocao[0] == 'object'){
        var resultado = colocao.map(function(obj){
            //console.log(obj[atributo]);
            var letraInicial = obj[atributo].charAt(0).toUpperCase();
            var restoTexto = obj[atributo].slice(1);
            obj[atributo] = letraInicial + restoTexto;
            return obj;
        });
        console.log(resultado);
    }
}

function FnCapitalizar(vetor){

    var modificado = [];

    for ( var i = 0; i < vetor.length; i++){
        var letraInicial = vetor[i].charAt(0).toUpperCase();
        var restoTexto = vetor[i].slice(1);
        var resultado = letraInicial + restoTexto;
        console.log(resultado);
    
        modificado[i] = resultado;
    }
    
    return modificado;
}

function FnOrdenar(vetor){
    var ordenado = vetor.sort(function(a,b){
        return a.localeCompare(b);
    });
}

function FnCaixaAlta(vetor){
    var modificado = [];

       for ( var i = 0; i < vetor.length; i++){
            modificado[i] = vetor[i].toUpperCase();
        }
        
    return modificado;
}

export default {
    capitalizar: FnCapitalizar,
    ordenar : FnOrdenar,
    caixaAlta : FnCaixaAlta,
    capitalizarNovo : captizalizarovo
};