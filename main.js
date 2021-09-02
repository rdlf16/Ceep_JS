import { handleNovoItem } from "./componentes/criarTarefa.js"
import { PopularLista } from "./componentes/popularLista.js"

const novaTarefa = document.querySelector('[data-form-button]')
novaTarefa.addEventListener('click', handleNovoItem)

PopularLista()