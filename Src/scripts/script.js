// Define uma função construtora chamada 'Item'.
// Esta função é usada para criar objetos que representam itens a serem adicionados ao carrinho.
function Item(nomeItem, quantidade, preco) {
    this.nomeItem = nomeItem;                   // Define a propriedade 'nomeItem' do objeto.
    this.quantidade = parseInt(quantidade);     // Converte a 'quantidade' de string para número e define a propriedade 'quantidade'.
    this.preco = parseFloat(preco);             // Converte o 'preco' de string para float e define a propriedade 'preco'.
}

// Cria uma lista vazia chamada 'itens' para armazenar os itens adicionados.
var itens = [];

// Define a função 'adicionarItem' que é chamada quando o usuário clica no botão "Adicionar Item".
function adicionarItem() {
    // Pega os valores inseridos pelo usuário nos campos de input.
    var nomeItemNovo = $("#nomeItemId").val();
    var quantidadeNovo = $("#quantidadeId").val();
    var precoNovo = $("#precoId").val();

    // Verifica se algum dos campos está vazio e, se estiver, mostra um alerta e sai da função.
    if (!nomeItemNovo || !quantidadeNovo || !precoNovo) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Cria um novo objeto 'Item' com os valores inseridos pelo usuário.
    var novoItem = new Item(nomeItemNovo, quantidadeNovo, precoNovo);

    // Adiciona o novo item à lista 'itens'.
    itens.push(novoItem);

    // Atualiza a tabela HTML para mostrar o novo item.
    atualizaTabela(novoItem);
}

// Define a função 'atualizaTabela' que é usada para adicionar um novo item à tabela HTML.
function atualizaTabela(item) {
    // Cria uma string HTML para representar o novo item na tabela.
    var htmlFinal = "<tr>";
    htmlFinal += "<td>" + item.nomeItem + "</td>";
    htmlFinal += "<td>" + item.quantidade + "</td>";
    htmlFinal += "<td>" + item.preco.toFixed(2) + "</td>";  // Mostra o preço com 2 casas decimais.
    htmlFinal += "</tr>";

    // Adiciona a string HTML ao final da tabela.
    $("#tabelaItensId").append(htmlFinal);
}

// Define a função 'fecharCompra' que é chamada quando o usuário clica no botão "Fechar Compra".
function fecharCompra() {
    var htmlFinal = "Você comprou: ";
    var soma = 0;   

    // Itera sobre cada item na lista 'itens'.
    for(var i = 0; i < itens.length; i++) {
        // Adiciona detalhes do item à string 'htmlFinal'.
        htmlFinal += itens[i].quantidade + " " + itens[i].nomeItem +  " - ";
        
        // Calcula o custo total do item (quantidade * preço) e adiciona à 'soma'.
        soma += itens[i].quantidade * itens[i].preco; 
    }

    // Adiciona o preço total à string 'htmlFinal'.
    htmlFinal += " Total: R$ " + soma.toFixed(2);  // Mostra o total com 2 casas decimais.

    // Atualiza o label 'fechamentoLabelId' com a string 'htmlFinal'.
    $("#fechamentoLabelId").text(htmlFinal);
}
