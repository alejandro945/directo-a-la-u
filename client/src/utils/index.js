const rows = [
    {
        id: 1,
        Dia: 'Lunes',
        ida: false,
        regreso: false
    },
    {
        id: 2,
        Dia: 'Martes',
        ida: false,
        regreso: false
    },
    {
        id: 3,
        Dia: 'Miercoles',
        ida: false,
        regreso: false
    },
    {
        id: 4,
        Dia: 'Jueves',
        ida: false,
        regreso: false
    },
    {
        id: 5,
        Dia: 'Viernes',
        ida: false,
        regreso: false
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
            Ivalue = editRowsModel[index].ida.value
            Rvalue = editRowsModel[index].regreso.value
            i = index
        }
    }
    if (Ivalue != null) {
        return [Ivalue,Rvalue, i-1]
    }
    return null
}
