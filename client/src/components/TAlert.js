import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

export default function TAlert({ message, type }) {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      <Collapse in={open}>
        <Alert
          severity={type}
          action={
            <IconButton
              aria-label="close"
              color="primary"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          <Box sx={{ textAlign: 'left' }}>
            {message}
          </Box>
        </Alert>
      </Collapse>
    </Box>
  );
}
