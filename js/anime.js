const resultadoPesquisa = document.getElementById(`resultado-pesquisa`);
const resultadoVender = document.getElementById(`resultado-vender`);

const btnFecharModal = document.getElementById(`fechar-modal`)
const btnFecharModalVender = document.getElementById(`fechar-modal-vender`)

const btnPesquisarA = document.getElementById(`btn-pesquisar`)
const btnVenderA = document.getElementById(`btn-vender`)

btnFecharModal.addEventListener(`click`, (e) => {
    resultadoPesquisa.classList.remove(`resultado-pesquisa-open`)
})

btnVenderA.addEventListener(`click`, (e) => {
    resultadoVender.classList.add(`resultado-vender-open`)
})

btnFecharModalVender.addEventListener(`click`, (e) => {
    resultadoVender.classList.remove(`resultado-vender-open`)
})