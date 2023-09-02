import { useState } from 'react';
import {AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem} from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const MuiNavbar = () => {
const [anchorEl, setAnchorEl] = useState(null)
const open = anchorEl;
const handleClick = (e) => {
  setAnchorEl(e.currentTarget);
}

const handleClose = () => {
  setAnchorEl(null);
};

  return (
    <AppBar position='static' sx={{width:'100%'}}>
        <Toolbar color='info'>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                <CatchingPokemonIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{flexGrow:1}}>
                POKEMONAPP
            </Typography>
            <Stack direction='row' spacing={2}>
                <Button color='inherit' startIcon={<SendIcon />}>Feactures</Button>
                <Button color='inherit' startIcon={<SendIcon />}>Pricing</Button>
                <Button color='inherit' startIcon={<SendIcon />}>About</Button>
                <Button color='inherit' endIcon={<KeyboardArrowDownIcon />} id='resource-button'
                        onClick={handleClick} aria-control={open ? 'resource-menu': undefined}
                        aria-aria-haspopup='true'
                        aria-expanded={open ? 'true': undefined}>
                        Resource</Button>
                <Button color='inherit'>Login</Button>
            </Stack>
            <Menu id='resource-menu' anchorEl={anchorEl} 
                  open={open} 
                  MenuListProps={{'aria-labelledby':'resource-button'}}
                  onClose={handleClose}
                  anchorOrigin={{
                     vertical:'bottom',
                     horizontal:'right',
                  }}
                  transformOrigin={{
                     vertical:'top',
                     horizontal:'right'
                  }}>
              <MenuItem onClick={handleClose}>Blog</MenuItem>
              <MenuItem onClick={handleClose}>Podcast</MenuItem>
            </Menu>
        </Toolbar>
    </AppBar>
  )
}
