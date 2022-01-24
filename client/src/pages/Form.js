import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import ACard from '../components/ACard';
import Title from '../components/Title';
import { DataGrid } from '@mui/x-data-grid';
import rows, { getRow, upperFormat } from '../utils'
import SendIcon from '@mui/icons-material/Send';
import ASelect from '../components/ASelect';
import AMixim from '../components/AMixim';
import { addPassanger } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [editRowsModel, setEditRowsModel] = React.useState({});
    let navigate = useNavigate();

    const [passenger, setPassenger] = useState({
        name: '',
        lastName: '',
        phone: '',
        address: '',
        origin: '',
        destination: '',
        Schedules: [
            {
                dia: 'LUNES',
                ida: false,
                regreso: false
            },
            {
                dia: 'MARTES',
                ida: false,
                regreso: false
            },
            {
                dia: 'MIERCOLES',
                ida: false,
                regreso: false
            },
            {
                dia: 'JUEVES',
                ida: false,
                regreso: false
            },
            {
                dia: 'VIERNES',
                ida: false,
                regreso: false
            }
        ]
    })

    const handleEditRowsModelChange = (model) => {
        setEditRowsModel(model);
        var result = getRow(editRowsModel)
        if (result) {
            setPassenger((prev) => ({
                ...prev,
                'Schedules': [
                    ...prev.Schedules.slice(0, result[2]),
                    {
                        ...prev.Schedules[result[2]],
                        'ida': result[0],
                        'regreso': result[1]
                    },
                    ...prev.Schedules.slice(result[2] + 1, prev.Schedules.length)
                ]
            }))
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPassenger((prev) => ({
            ...prev,
            [name]: upperFormat(value)
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addPassanger(passenger).then(res => {
            console.log(res);
            if (res.status === 200) {
                AMixim('Estamos listos te esperamos en la ruta!', 'success');
                navigate("../", { replace: true });
            } else {
                AMixim('Server Error', 'error')
                    }
        }).catch(err => { AMixim('Tenemos Sobrecarga, vuelve a intentar', 'warning') })
    }

    return (
        <div className="container p-4">
            <form onSubmit={onSubmit}>
                <ACard>
                    <Title title={"Datos basicos del pasajero 👤"} subtitle={"Disfruta de tu recorrido confiando en Especiales AltaGama"} />
                    <div className="row mt-3">
                        <div className="col-md-6 p-2">
                            <TextField fullWidth name="name" value={passenger.name} label="Nombres" variant="outlined" required={true} size="small" onChange={handleChange} />
                        </div>
                        <div className="col-md-6 p-2">
                            <TextField fullWidth name="lastName" value={passenger.lastName} label="Apellidos" variant="outlined" required={true} size="small" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6 p-2">
                            <TextField fullWidth name="phone" type={'number'} value={passenger.phone} label="Celular" variant="outlined" required={true} size="small" onChange={handleChange} />
                        </div>
                        <div className="col-md-6 p-2">
                            <TextField fullWidth name="address" value={passenger.address} label="Direccion" variant="outlined" required={true} size="small" onChange={handleChange} />
                        </div>
                    </div>
                </ACard>
                <ACard>
                    <Title title={"Ve, ¿en donde te recogemos y para donde vas? 🚧"} subtitle={"Pilas selecciona nuestro lugar de encuentro y destino."} />
                    <ASelect data={["Versalles", "Parque del azucar", "Llanogrande"]} label="Origen" name={"origin"} handle={handleChange} />
                    <ASelect data={["Valle", "Libre", "Autonoma", "Javeriana", "Icesi", "San Buenaventura"]} label="Destino" name={"destination"} handle={handleChange} />
                </ACard>
                <ACard>
                    <Title title={"Selecciona los dias que tomaras nuestro servicio 🚐"} subtitle={"Ojala sean todos los dias (ida y regreso) 😬"} />
                    <div className='my-4 container-sm text-center' style={{ height: 300 }}>
                        <DataGrid columns={[{ field: 'Dia', width: 200 }, { field: 'ida', type: 'boolean', width: 150, editable: true }, { field: 'regreso', type: 'boolean', width: 150, editable: true }]}
                            rows={rows}
                            editMode="row"
                            editRowsModel={editRowsModel}
                            onEditRowsModelChange={handleEditRowsModelChange} />
                    </div>
                </ACard>
                <div className='container-sm text-center'>
                    <Button variant="contained" sx={{ mb: "3.5rem", width: '50%' }} size="medium" endIcon={<SendIcon />} type="submit">Enviar</Button>
                </div>
            </form>
        </div>
    )
};

export default Form;
