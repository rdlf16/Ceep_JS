const BotaoDeleta = (id, atualiza) => { 
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', () => deletarTarefa(id, atualiza))

    return botaoDeleta
}

const deletarTarefa = (id, atualiza) => { 
    const local = JSON.parse(localStorage.getItem('Tarefas'))

    local.splice(id, 1)

    localStorage.setItem('Tarefas', JSON.stringify(local))
    atualiza()

}

export default BotaoDeleta