form = document.getElementById(`form-add-item`)

const btnAdicionar = document.getElementById(`btn-adicionar`)
const btnEditar = document.getElementById(`btn-editar`)
const btnPesquisar = document.getElementById(`btn-pesquisar`)
const btnVender = document.getElementById(`btn-vender`)
const tabelaOutput = document.getElementById(`tabela-output`)
const tabelaOutputPesquisa = document.getElementById(`tabela-output-pesquisa`)

var printsTable = 0

var produtos = []

class Produto {
    nome
    quantidade
    preco
    constructor(nome, quantidade, preco){
        this.nome = nome
        this.quantidade = quantidade
        this.preco = preco
    }
}

function printTable(){
    tabelaOutput.innerHTML += 
    `
        <tr>
            <td id="nome-produtos${printsTable}">${produtos[printsTable].nome}</td>
            <td id="quantidade-produtos${printsTable}">${produtos[printsTable].quantidade}</td>
            <td id="preco-produtos${printsTable}">${produtos[printsTable].preco}</td>
        </tr>
    `
    printsTable++
}

function editTable(indice){
    let quantidadeEdit = document.getElementById(`quantidade-produtos${indice}`)
    let precoEdit = document.getElementById(`preco-produtos${indice}`)

    quantidadeEdit.innerHTML = produtos[indice].quantidade
    precoEdit.innerHTML = produtos[indice].preco
}

function printTablePesquisa(indice){
    tabelaOutputPesquisa.innerHTML = 
    `
    <table>
        <tr>
            <td id="nome-produtos${indice}">${produtos[indice].nome}</td>
            <td id="quantidade-produtos${indice}">${produtos[indice].quantidade}</td>
            <td id="preco-produtos${indice}">${produtos[indice].preco}</td>
        </tr>
    </table>
    `
}

function adicionar(){
    let nomeValue = document.getElementById(`input-nome`).value.toLowerCase()
    let quantidadeValue = document.getElementById(`input-quantidade`).value.toLowerCase()
    let precoValue = document.getElementById(`input-preco`).value.toLowerCase()

    if(nomeValue == "" || quantidadeValue == "" || precoValue == ""){
        alert(`Preencha os campos!`)
    }else if(produtos.some(e => e.nome == nomeValue)){
        alert(`Este produto já foi cadastrado!`)
    }else{
        produtos.push(new Produto(nomeValue, quantidadeValue, precoValue))
    }
    console.log(produtos)
    printTable()
}

function editar(){
    let nomeValue = document.getElementById(`input-nome`).value.toLowerCase()
    let quantidadeValue = document.getElementById(`input-quantidade`).value.toLowerCase()
    let precoValue = document.getElementById(`input-preco`).value.toLowerCase()

    if(nomeValue == ``){
        alert(`Preencha o campo de nome!`)
    }else if(quantidadeValue == `` && precoValue == ``){
        alert(`Preencha o valor que você quer alterar!`)
    }else{
        produtos.forEach((e, indice) => {
            if(e.nome == nomeValue){
                if(quantidadeValue != ``){
                    e.quantidade = quantidadeValue
                }
                if(precoValue != ``){
                    e.preco = precoValue
                }
                editTable(indice)
                console.log(produtos)
            }else{
                alert(`Este produto não foi cadastrado`)
            }
        })
    }
}

function pesquisar(){
    let nomeValue = document.getElementById(`input-nome`).value.toLowerCase()
    let resultado = []

    if(nomeValue == ``){
        alert(`Insira o nome do produto que deseja pesquisar!`)
    }else{
        resultado = produtos.filter((e) => {
            e.nome == nomeValue
        })

        console.log(`resultado = ${resultado}`)
        resultadoPesquisa.classList.add(`resultado-pesquisa-open`)
        printTablePesquisa(resultado)
    }

}

function vender(){
    
}

form.addEventListener(`submit`, e => {
    e.preventDefault()
    adicionar()
})

btnEditar.addEventListener(`click`, e => editar())

btnPesquisar.addEventListener(`click`, e => pesquisar())