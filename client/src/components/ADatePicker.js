import * as React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export default function ADatePicker({name,handle}) {

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        openTo="day"
        value={value}
        shouldDisableDate={isWeekend}
        onChange={(event,value) =>( handle({ target: { name, value: value } }))}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
