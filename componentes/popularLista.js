import { removeDatasRepetidas, ordenarDatas } from "../service/data.js";
import { criaData } from "./criaData.js";

export const PopularLista = () => {
    const lista = document.querySelector('[data-list]')
    const local = JSON.parse(localStorage.getItem('Tarefas')) || []

    lista.innerHTML = "";

    const datasUnicas = removeDatasRepetidas(local)
    ordenarDatas(datasUnicas)
    
    datasUnicas.forEach((dia) => {
        lista.appendChild(criaData(dia))
    })
}