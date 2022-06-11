function select_prato (elemento) {
    const remove_select = document.querySelector('.prato .select_item');
    if(remove_select !== null){
        remove_select.classList.remove("select_item");
    }
    elemento.classList.add("select_item");
    confirma_pedido(1);
}

function select_bebida (elemento) {
    const remove_select = document.querySelector('.bebida .select_item');
    if(remove_select !== null){
        remove_select.classList.remove("select_item");
    }
    elemento.classList.add("select_item");
    confirma_pedido(2);
}

function select_cookie (elemento) {
    const remove_select = document.querySelector('.cookie .select_item');
    if(remove_select !== null){
        remove_select.classList.remove("select_item");
    }
    elemento.classList.add("select_item");
    confirma_pedido(3);
}

let prato = false;
let beb = false;
let cookie = false;

function confirma_pedido (n_ok) {
    if(n_ok === 1){
        prato = true;
    }else if(n_ok === 2){
        beb = true;
    }else if(n_ok === 3){
        cookie = true;
    }
    if(prato && beb && cookie){
        let confirma = document.querySelector('.pedido button');
        confirma.classList.add("pedido_ok");
        confirma.innerHTML = "<p>Fechar Pedido</p>";
    } 
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
