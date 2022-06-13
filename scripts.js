
let pedidoWhats = "Olá, gostaria de fazer o pedido:2";
function select_prato (elemento) {
    const remove_select = document.querySelector('.prato .select_item');
    if(remove_select !== null){
        remove_select.classList.remove("select_item");
    }
    elemento.classList.add("select_item");
    veifica_pedido(1);
}

function select_bebida (elemento) {
    const remove_select = document.querySelector('.bebida .select_item');
    if(remove_select !== null){
        remove_select.classList.remove("select_item");
    }
    elemento.classList.add("select_item");
    veifica_pedido(2);
}

function select_cookie (elemento) {
    const remove_select = document.querySelector('.cookie .select_item');
    if(remove_select !== null){
        remove_select.classList.remove("select_item");
    }
    elemento.classList.add("select_item");
    veifica_pedido(3);
}

let prato = false;
let beb = false;
let cookie = false;

function veifica_pedido (n_ok) {
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
        confirma.classList.add("colorButton");
        confirma.innerHTML = "<p>Fechar Pedido</p>";
    } 
}

function confirmaPedido (botao) {
    if(botao.classList.contains("pedido_ok")){
        let esconde_tela = document.querySelector(".transparent_tela");
        esconde_tela.classList.toggle("escondido");
        let pedido_tela = document.querySelector(".confirma");
        pedido_tela.classList.toggle("escondido");
        dadosPedido();
    }
}

function dadosPedido () {
    let selecionados = document.querySelector('.prato .select_item');
    let getText = selecionados.querySelector('p1');
    let nomePrato = getText.innerHTML;
   
    getText = selecionados.querySelector('p3');
    let precoPrato = getText.innerHTML;
    precoPrato = precoPrato.replace('R$ ','');
    precoPrato = precoPrato.replace(',','.');
    let n_precoPrato = Number(precoPrato);

    selecionados = document.querySelector('.bebida .select_item');
    getText = selecionados.querySelector('p1');
    let nomeBeb = getText.innerHTML;
    
    getText = selecionados.querySelector('p3');
    let precoBeb = getText.innerHTML;
    precoBeb = precoBeb.replace('R$ ','');
    precoBeb = precoBeb.replace(',','.');
    let n_precoBeb = Number(precoBeb);

    selecionados = document.querySelector('.cookie .select_item');
    getText = selecionados.querySelector('p1');
    let nomeCookie = getText.innerHTML;
   
    getText = selecionados.querySelector('p3');
    let precoCookie = getText.innerHTML;
    precoCookie = precoCookie.replace('R$ ','');
    precoCookie = precoCookie.replace(',','.');
    let n_precoCookie = Number(precoCookie);

    let totalPedido = n_precoPrato + n_precoBeb + n_precoCookie;
    pedidoWhats = `Olá, gostaria de fazer o pedido:
- Prato: ${nomePrato}
- Bebida: ${nomeBeb}
- Sobremesa: ${nomeCookie}
Total: R$ ${totalPedido.toFixed(2)}`;

    let itensPedido = 
    `<div><span>${nomePrato}</span><span>${precoPrato.replace('.',',')}</span></div>
    <div><span>${nomeBeb}</span><span>${precoBeb.replace('.',',')}</span></div>
    <div><span>${nomeCookie}</span><span>${precoCookie.replace('.',',')}</span></div>
    <div><span><p>TOTAL:</p></span><span><p>R$ ${totalPedido.toFixed(2).replace('.',',')}</p></span></div>`;

    let descricaoPedido = document.querySelector('p5');
    descricaoPedido.innerHTML = itensPedido;
}

function enviaWhats () {
    const nameUser = prompt("Informe seu nome: ");
    const endUser = prompt("Informe seu Endereço: ");
    pedidoWhats += `\n\nNome: ${nameUser}\nEndereço: ${endUser}`;
    alert(pedidoWhats);
    pedidoWhats = encodeURIComponent(pedidoWhats);
    window.open(`https://wa.me/5555991191601?text=${pedidoWhats}`);
}
// function envia () {
//     let elemPedido = document.querySelector(".pedido");

//     alert(elemPedido);
// }
    /*const elemento = document.querySelector(".valor");
        elemento.innerHTML = valorAtual;*/