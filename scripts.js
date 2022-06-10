function select_prato (n) {
    let todos = document.querySelectorAll('.prato div');
    let item = todos[0];
    for(let i=0; i < todos.length ; i ++){
        item = todos[i];
        item.classList.remove("select_item");
    }
    let elemento = document.querySelector('.prato div:nth-child('+n+')');
    elemento.classList.toggle("select_item");
}

function select_bebida (n) {
    let todos = document.querySelectorAll('.bebida div');
    let item = todos[0];
    for(let i=0; i < todos.length ; i ++){
        item = todos[i];
        item.classList.remove("select_item");
    }
    let elemento = document.querySelector('.bebida div:nth-child('+n+')');
    elemento.classList.toggle("select_item");
}

function select_cookie (n) {
    let todos = document.querySelectorAll('.cookie div');
    let item = todos[0];
    for(let i=0; i < todos.length ; i ++){
        item = todos[i];
        item.classList.remove("select_item");
    }
    let elemento = document.querySelector('.cookie div:nth-child('+n+')');
    elemento.classList.toggle("select_item");

    //confirma pedido rever
    let confirma = document.querySelector('.pedido button');
    confirma.classList.add("pedido_ok");
    confirma.innerHTML = "<p>Fechar Pedido</p> ";
}

// function confere_pedido(caracter){
//     let caracter_pedido = "";
//     let prato = false;
//     let bebida = false;
//     let cookie = false;
//     caracter_pedido = caracter_pedido + caracter;
//     for(let i; i < caracter_pedido.length; i ++){
//         if(caracter_pedido[i] === "p"){
//             prato = true;
//         }
//         if(caracter_pedido[i] === "b"){
//             bebida = true;
//         }
//         if(caracter_pedido[i] === "c"){
//             cookie = true;
//         }
//     }
//     if(prao && bebida && cookie){
//         let elemento = document.querySelector('.pedido button');
//         elemento.classList.add("pedido_ok");
//         elemento.innerHTML("Fechar Pedido");
//     }

// }

// function get_pedido {
//     let name_prato = null;
//     let price_praco = null;

//     let name_bebida  = null;
//     let price_bebida  = null;

//     let name_sobremesa = null;
//     let price_sobremesa = null;
// }
// function spec_pedido {
//     let spec_quant = 0;

//     if(spec_pedido == 3){
//         libera_pedido();
//     }
// }

// libera_pedido () {

// }
