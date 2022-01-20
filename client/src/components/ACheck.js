import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import BusAlertOutlinedIcon from '@mui/icons-material/BusAlertOutlined';
import BusAlertIcon from '@mui/icons-material/BusAlert';
import { Box, FormControlLabel } from '@mui/material';
import AppContext from '../context/AppContext';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ACheck({ message }) {
    return (
        <AppContext.Consumer>
            {({ agreement, setAgreement }) => (
                <Box sx={{ textAlign: 'left', mb: 2 }}>
                    <FormControlLabel
                        value="end"
                        control={
                            <Checkbox
                                {...label}
                                icon={<BusAlertOutlinedIcon />}
                                checkedIcon={<BusAlertIcon />}
                                checked={agreement}
                                onChange={setAgreement}
                            />}   
                        label={message}
                        labelPlacement="end"
                    />
                </Box>
            )}
        </AppContext.Consumer>

    );
}
