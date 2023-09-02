import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';

export const MuiMenuAcordion = () => {
  return (
    <div style={{ width: '300px', margin: '20px auto' }}>
    <Accordion variant='h4'>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} >
        <Typography variant='body1'>
            Nivel 1 - Item A
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemText primary="Sub-item A1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Sub-item A2" />
          </ListItem>
        </List>
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        Nivel 1 - Item B
      </AccordionSummary>
      <AccordionDetails>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Nivel 2 - Sub-item B1
          </AccordionSummary>
          <AccordionDetails>
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemText primary="Sub-item B1.1" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Sub-item B1.2" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </AccordionDetails>
    </Accordion>
    </div>
  )
}

