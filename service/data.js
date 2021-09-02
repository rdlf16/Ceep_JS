export const removeDatasRepetidas = (datas) => {
    const datasUnicas = []
    datas.forEach((data) => {
        if(datasUnicas.indexOf(data.dataFormatada) === -1){
            datasUnicas.push(data.dataFormatada)
        }
    })
    return datasUnicas
}

export const ordenarDatas = (datas) => {
    datas.sort((a,b) => {
        const primeiro = moment(a, 'DD/MM/YYYY').format('YYYYMMDD')
        const segundo = moment(b, 'DD/MM/YYYY').format('YYYYMMDD')

        return primeiro - segundo
    })
    
}