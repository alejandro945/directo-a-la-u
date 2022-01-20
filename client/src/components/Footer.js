import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment } from "react";
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import EditRoadTwoToneIcon from '@mui/icons-material/EditRoadTwoTone';

const Footer = () => {
    return (
        <Fragment>
            <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar>
                    <IconButton color="inherit">
                        <EditRoadTwoToneIcon />
                    </IconButton>
                    <div className="container">
                        <div className="text-center">
                            <Typography variant="h4">Copyright Alejandro Varela</Typography>
                        </div>
                    </div>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton color="inherit">
                        <DepartureBoardIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default Footer;