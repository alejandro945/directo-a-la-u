import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AAccordion() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ flexShrink: 0 }}>
                        Experencia
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Referente en el sector con mas de 20 anios de experiencia.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ flexShrink: 0 }}>Seguridad</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Planes de revisiones y mantenimientos exhaustivos de la flota y alta profesionalidad de nuestros conductores.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography>
                        Certificacion Integral
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ color: 'text.secondary' }}>
                        ISO 9001, Seguridad y Salud en el Trabajo: ISO 45001
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ flexShrink: 0 }}>Flexibilidad</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Capacidad de afrontar grandes operaciones de transporte en tiempo récord junto con un servicio personalizado.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

