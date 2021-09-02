import BotaoConclui from './concluiTarefa.js'
import BotaoDeleta from './deletaTarefa.js'
import { PopularLista } from './popularLista.js'

export const handleNovoItem = (evento) => {

    evento.preventDefault()

    const tarefas = JSON.parse(localStorage.getItem('Tarefas')) || []
    const input = document.querySelector('[data-form-input]')
    const valor = input.value
    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value);
    const dataFormatada = data.format('DD/MM/YYYY')
    const concluido = false;
    const horario = data.format('HH:mm')
    
    const dados = { valor, dataFormatada, horario, concluido }

    tarefas.push(dados)
    localStorage.setItem('Tarefas', JSON.stringify(tarefas))


    input.value = '';

    PopularLista()
}

export const Tarefa = ({ valor, horario, concluido }, id) => {

    const tarefa = document.createElement('li')
    const conteudo = `<p class="content">${horario} * ${valor}</p>`
    if (concluido) {
        tarefa.classList.add('done')
    } 
    tarefa.classList.add('task')

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui(id, PopularLista))
    tarefa.appendChild(BotaoDeleta(id, PopularLista))

    return tarefa
}