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
    caixaAlta : FnCaixaAlta
};