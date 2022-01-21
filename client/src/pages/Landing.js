import React, { useState } from 'react';

import { Button, Divider, Typography } from '@mui/material';
import TAlert from '../components/TAlert';
import AChip from '../components/AChip';
import ACheck from '../components/ACheck';
import AppContext from '../context/AppContext';
import AImageList from '../components/AImageList';
import AAccordion from '../components/AAccordion';
import ATimeline from '../components/ATimeline';


export default function Landing() {
    const [disabled, setdisabled] = useState(false)
    const state = { agreement: disabled, setAgreement: () => setdisabled(!disabled) }
    return (
        <div className='container p-4 text-center'>
            <Typography variant='h2'>¿Porque elegirnos?</Typography>
            <AAccordion/>
            <Typography variant='h2'>Nuestros vehiculos</Typography>
            <AImageList/>
            <AChip data={["Seguridad", "Comfort", "Amabilidad"]} />
            <Divider variant="middle" />
            <Typography variant='h2'>Horarios</Typography>
            <ATimeline/>
            <TAlert message={"⏱ El tiempo en cada punto de recogida es de maximo 5 minutos. Por favor estar a tiempo!"} type={'info'} />
            <Divider variant="middle" />
            <Typography variant='h2'>Medios de pago</Typography>
            <img style={{ width: 400 }} src='/images/MEDIOS_DE_PAGO.png' loading="lazy" alt="props"></img>
            <TAlert message={"💰 El servicio tiene un costo de $10,000 pesos por trayecto (10,000 la ida y 10,000 el retorno)"} type={'warning'} />
            <AppContext.Provider value={state}>
                <ACheck message={"Aceptar tanto nuestros terminos y condiciones como las politcas de privacidad"} />
            </AppContext.Provider>
            <Button sx={{ mb: '3rem', width: '50%' }} variant='outlined' href='form' disabled={!disabled}>
                Empezar
            </Button>
        </div>
    );
}

