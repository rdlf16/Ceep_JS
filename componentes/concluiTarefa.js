
const BotaoConclui = (id, atualizar) => { 
    const botaoConclui = document.createElement('button')  
    
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'

    botaoConclui.addEventListener('click', () => concluirTarefa(id, atualizar))

    return botaoConclui

}

const concluirTarefa = (id, atualiza) => {
    const local = JSON.parse(localStorage.getItem('Tarefas'))

    local[id].concluido = !local[id].concluido

    localStorage.setItem('Tarefas', JSON.stringify(local))
    atualiza()
}

export default BotaoConclui

