import React, { useState } from 'react';
import { Button, Menu, MenuItem, Popover, List, ListItem } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


export const MuiMenuMenuItem = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
      setSubMenuAnchorEl(null);
    };
  
    const handleSubMenuOpen = (event) => {
      setSubMenuAnchorEl(event.currentTarget);
    };

  return (
    <div>
    <Button variant="contained" color="primary" onClick={handleClick}>
      Open Menu
    </Button>
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
      <MenuItem onClick={handleClose}>Nivel 1 - Item A</MenuItem>
      <MenuItem onClick={handleSubMenuOpen}>
        Nivel 1 - Item B <ArrowRightIcon />
      </MenuItem>
      <Popover
        open={Boolean(subMenuAnchorEl)}
        anchorEl={subMenuAnchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <List>
          <ListItem button onClick={handleClose}>
            Nivel 2 - Sub-item B1
          </ListItem>
          <ListItem button onClick={handleClose}>
            Nivel 2 - Sub-item B2
          </ListItem>
        </List>
      </Popover>
    </Menu>
    </div>
  )
}


