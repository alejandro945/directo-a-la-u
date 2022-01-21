const rows = [
    {
        id: 1,
        Dia: 'Lunes',
        Ida: false,
        Regreso: false
    },
    {
        id: 2,
        Dia: 'Martes',
        Ida: false,
        Regreso: false
    },
    {
        id: 3,
        Dia: 'Miercoles',
        Ida: false,
        Regreso: false
    },
    {
        id: 4,
        Dia: 'Jueves',
        Ida: false,
        Regreso: false
    },
    {
        id: 5,
        Dia: 'Viernes',
        Ida: false,
        Regreso: false
    }
]
export default rows

export function upperFormat(value) {
    return (typeof value === 'string' ? value.toUpperCase() : value);
}

export function getRow(editRowsModel) {
    let Ivalue = null
    let Rvalue = null
    let i = 0
    for (let index = 1; index < 6; index++) {
        if (editRowsModel[index]) {
            Ivalue = editRowsModel[index].Ida.value
            Rvalue = editRowsModel[index].Regreso.value
            i = index
        }
    }
    if (Ivalue != null) {
        const Ida = { 'Ida': Ivalue }
        const Regreso = { 'Regreso': Rvalue }
        const prop = { ...Ida, ...Regreso }
        return [prop, i]
    }
    return null
}
