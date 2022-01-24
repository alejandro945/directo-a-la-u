import React, { useState, useEffect } from 'react';
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Avatar, Button } from '@mui/material';
import { filter } from '../services/api';
import ACard from '../components/ACard';
import ASelect from '../components/ASelect';
import ADatePicker from '../components/ADatePicker';

const columns = [
  { field: 'name', headerName: 'Nombres', width: 180 },
  { field: 'lastName', headerName: 'Apellidos', width: 180 },
  { field: 'phone', headerName: 'Telefono', width: 130 },
  { field: 'address', headerName: 'Direccion', width: 130 },
  { field: 'origin', headerName: 'Origen' },
  { field: 'destination', headerName: 'Destino' },
  { field: 'day', headerName: 'Dia' },//filtro
  { field: 'way', headerName: 'Trayecto' },//filtro
  { field: 'assist', headerName: 'Confirmado', type: 'boolean', editable: true },
  { field: 'hasPaid', headerName: 'Pagado', type: 'boolean', editable: true },
  { field: 'remark', headerName: 'Observaciones', editable: true, width: 230 },
];
const rows = [
  {
    id: 1,
    name: "alejo",
    lastName: "varela",
    phone: 32344,
    address: "cll",
    origin: "somewherre",
    destination: "icesi",
    day: "lunes",
    way: "ida",
    assist: true,
    hasPaid: false,
    remark: "something"
  }
];

export default function Payment() {
  const [data, setData] = useState({}); //table data
  const [filterData, setFilter] = useState({
    date: '',
    way: 'IDA'
  })

  useEffect(() => {
  }, [])

  const handleFilter = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRowUpdate = (newData, oldData, resolve) => {


  }

  const handleRowAdd = (newData, resolve) => {

  }

  return (
    <div className='container p-4' >
      <ACard>
        <div className="row mt-3">
          <div className="col-md-6 p-4">
            <ADatePicker />
          </div>
          <div className="col-md-6">
            <ASelect data={["IDA", "REGRESO"]} label="Trayecto" name={"way"} handle={setFilter} />
          </div>
        </div>
      </ACard>
      <div className='p-4'>
      <Button variant="contained" size='medium' sx={{width:'35%'}}>Crear</Button>
      </div>
      <div className='container mb-4' style={{ height: 500, width: '100%' }}>
        <DataGrid
          title="User list from API"
          columns={columns}
          data={data}
          rows={rows}
          //icons={tableIcons}
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                handleRowUpdate(newData, oldData, resolve);
              }),
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                handleRowAdd(newData, resolve)
              })
          }}
        />
      </div>
    </div>

  );
}
