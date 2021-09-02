import { Tarefa } from './criarTarefa.js';

export const criaData = (data) => {
    const dataTopo = document.createElement('li')
    const dataMoment = moment(data, 'DD/MM/YYY')
    const conteudo = `<p class="content-data">${dataMoment.format('DD/MM/YYYY')}</p>`
    const tarefas = JSON.parse(localStorage.getItem('Tarefas')) || [];

    dataTopo.innerHTML = conteudo;

    tarefas.forEach((tarefa, id) => {
        const dia = tarefa.dataFormatada
        if(dia === data) {
            dataTopo.appendChild(Tarefa(tarefa, id))
        }
    })

    return dataTopo;
}