import { Button, TextField } from '@mui/material';
import React from 'react';
import ACard from '../components/ACard';
import ARadio from '../components/ARadio';
import Title from '../components/Title';
import { DataGrid } from '@mui/x-data-grid';
import rows from '../utils'
import SendIcon from '@mui/icons-material/Send';

const Form = () => {
    return (
        <div className="container p-4">
            <form>
                <ACard>
                    <Title title={"Datos basicos del pasajero 👤"} subtitle={"Disfruta de tu recorrido confiando en Especiales AltaGama"} />
                    <div className="row mt-3">
                        <div className="col-md-6 p-2">
                            <TextField fullWidth id="name" label="Nombres" variant="outlined" required={true} size="small" />
                        </div>
                        <div className="col-md-6 p-2">
                            <TextField fullWidth id="lastName" label="Apellidos" variant="outlined" required={true} size="small" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6 p-2">
                            <TextField fullWidth id="telephone" label="Celular" variant="outlined" required={true} size="small" />
                        </div>
                        <div className="col-md-6 p-2">
                            <TextField fullWidth id="address" label="Direccion" variant="outlined" required={true} size="small" />
                        </div>
                    </div>
                </ACard>
                <ACard>
                    <Title title={"Ve, ¿en donde te recogemos y para donde vas? 🚧"} subtitle={"Pilas selecciona nuestro lugar de encuentro y destino."} />
                    <ARadio values={["Versalles", "Parque del azucar", "Llanogrande"]} title="Paradas establecidas" />
                    <ARadio values={["Valle","Libre", "Autonoma", "Javeriana", "Icesi"]} title="Universidades" />
                </ACard>
                <ACard>
                    <Title title={"Selecciona los dias que tomaras nuestro servicio 🚐"} subtitle={"Ojala sean todos los dias (ida y regreso) 😬"} />
                    <div className='my-4 container-sm text-center' style={{ height: 300 }}>
                        <DataGrid columns={[{ field: 'Dia',width:200 }, { field: 'Ida', type:'boolean', width:150,editable: true }, { field: 'Regreso',type:'boolean',width:150,editable: true }]} rows={rows} editMode="row"/>
                    </div>
                </ACard>
                <div className='container-sm text-center'>
                <Button variant="contained" sx={{ mb: "3.5rem", width:'50%'}} size="medium" endIcon={<SendIcon />}>Enviar</Button>
                </div>
            </form>
        </div>
    )
};

export default Form;
