import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DepartureBoardTwoToneIcon from '@mui/icons-material/DepartureBoardTwoTone';
import DoneIcon from '@mui/icons-material/Done';

export default function AChip({ data }) {
    return (
            <Stack sx={{ mb: 2, justifyContent: 'center'  }} direction="row" spacing={1}>
                {data.map((item, key) => (
                    <Chip key={key} icon={<DepartureBoardTwoToneIcon />} label={item} variant="outlined" onDelete={()=>console.log("jm")} deleteIcon={<DoneIcon />}/>
                ))}
            </Stack>
    );
}