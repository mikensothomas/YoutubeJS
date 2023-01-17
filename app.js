import modificador from "./modificador.js";
import ingredientes from "./ingredientes.js";

let ingerdientesOrdenados = modificador.ordenar(ingredientes, 'nome');
let contenairIngredientes = document.getElementById('container-ingredientes');

for(let ingrediente of ingerdientesOrdenados){
    let texttoHTML =`
        <div class="ingredientes">
            <img src="img/${ingrediente.img}" />
            <p class="nome-ingredientes">${ingrediente.nome}</p>
        </div>
    `;

    contenairIngredientes.innerHTML += texttoHTML;
}

/*
<div class="ingredientes">
    <img src="img/aborada.jpg" />
    <p class="nome-ingredientes">aborada</p>
</div>
*/
// modificador.capitalizarNovo(ingredientes, 'nome');

// console.log(ingredientes);
// console.log(typeof ingredientes);
// console.log(Array.isArray(ingredientes));

// console.log(ingredientes[0]);
// console.log(ingredientes[1].nome);
// console.log(ingredientes[2].valor);

// var ingredientes = ['mel', 'agua', 'sal', 'mostarda'];
// var resultadoCaptalizado = madificador.capitalizar(ingredientes);
// var resultadoOrdenado = madificador.ordenar(resultadoCaptalizado);
// var restoCaixaAlta = madificador.caixaAlta(ingredientes);

// console.log(resultadoCaptalizado);
// console.log(resultadoOrdenado);
// console.log(restoCaixaAlta);