import React, { useState } from 'react';
import {Box, TextField, MenuItem, Stack} from '@mui/material';

const MuiSelect = () => {
    const [country, setCountry] = useState('');
    const [countries, setCountries] = useState([]);

    const handleChangeUno = (event) => {
        setCountry(event.target.value);
        console.log(event.target.value);
    };

    const handleChange = (event) => {
        const value = event.target.value;
        setCountries(typeof value === 'string' ? value.split(',') : value);
        console.log(event.target.value)
    }

  return (
    <Box width='250px'>
        <TextField label='Select multiple' size='small'
            select value={countries} 
            onChange={handleChange} 
            fullWidth
            SelectProps={{
                multiple: true
            }}
            helperText='Select your country'
            color='success'
            error
            >
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='AU'>Australia</MenuItem>
        </TextField>
        <h6>Select sencillo</h6>
        <TextField label='Select Country' 
            select value={country} 
            onChange={handleChangeUno} 
            fullWidth
            color='info'
            size='small'
            helperText='Select your country'
            >
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='AU'>Australia</MenuItem>
        </TextField>
    </Box>

    
  )
}

export default MuiSelect