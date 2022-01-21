import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ASelect({ data, label,name,handle }) {
    return (
            <Autocomplete
                disablePortal
                getOptionDisabled={(option)=>
                    option===data[5]
                }
                onChange={(event,value) =>( handle({ target: { name, value: value } }))}
                options={data}
                sx={{mt:2}}
                renderInput={(params) => <TextField  required {...params} label={label} />}
            /> 
    );
}

