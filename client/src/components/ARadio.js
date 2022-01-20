import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';

const ARadio = ({ values, title }) => {
    return (
        <FormControl sx={{ m: ".5rem", width: 'auto' }}>
            <FormLabel required>{title}</FormLabel>
            <RadioGroup>
                {values.map((value,key) => (
                    <FormControlLabel key={key} value={value} control={<Radio color="secondary" />} label={value} />
                ))}
            </RadioGroup>
        </FormControl>
    );
};

export default ARadio;
