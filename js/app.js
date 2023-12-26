let listaProdutosCarrinho = ['Celular'];

//funcao pra criar o html do produto a ser inserido no carrinho
function criarHTMLproduto(nomeProduto,preco, quantidade){
    let produto = document.createElement('section');
    let textoAzul = document.createElement('span');
    textoAzul.classList = 'texto-azul';
    let textoAzul2 = document.createElement('span');
    textoAzul2.classList = 'texto-azul';
    produto.appendChild(textoAzul);
    produto.children[0].append(`${quantidade}x`);
    produto.append(nomeProduto);
    produto.appendChild(textoAzul2);
    produto.children[1].append(preco);
    return produto
}


function adicionar(){
    
    let opcoesProdutos = document.getElementById('produto').options;
    let produtoSelecionado = opcoesProdutos[opcoesProdutos.selectedIndex];
    let textoProduto = produtoSelecionado.text.split(' - ');
    //let nomeProduto = textoProduto[0];
    //let estaContidoNaLista = listaProdutosCarrinho.includes(nomeProduto)
    //console.log(textoProduto);
    let quantidadeValor = document.getElementById('quantidade').value > 0 ? document.getElementById('quantidade').value : 1;
    let elementProduto = criarHTMLproduto(textoProduto[0], textoProduto[1], quantidadeValor);
    document.getElementsByClassName('carrinho__produtos__produto')[0].appendChild(elementProduto);
    
    let valorAtualNumeros = +document.getElementById('valor-total').textContent.split('$')[1];
    let valorAdicionar = +textoProduto[1].split('$')[1] * quantidadeValor;
    let novoValor = valorAtualNumeros + valorAdicionar;
    document.getElementById('valor-total').textContent = `R$${novoValor}`;
    document.getElementById('quantidade').value = null;

}

function limpar(){
    document.getElementById('valor-total').textContent = 'R$0';
    let carrinhoProduto = document.getElementById("lista-produtos").children[0];
    document.getElementById('quantidade').value = null;
    while(carrinhoProduto.firstChild){
        carrinhoProduto.removeChild(carrinhoProduto.firstChild);
    }
}