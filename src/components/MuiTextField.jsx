import React, { useState } from 'react';
import {Stack, TextField, InputAdornment} from '@mui/material';

const MuiTextField = () => {
const [value, setValue] = useState('');

  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextField label='Name' variant='outlined'/>
            <TextField label='LastName' variant='filled'/>
            <TextField label='LastName'  variant='standard'/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Small secondary' size='small' color='secondary'/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Form Input' size='small' color='secondary' 
                        required 
                        value={value} 
                        onChange={e => setValue(e.target.value)} error={!value} helperText={!value ? 'Required':'Campo Obligatorio'}/>
            <TextField label='Form Input' size='small' color='secondary' disabled/>
            <TextField label='Password' type='password' size='small' helperText='La contraseña es incorrecta'/>
            <TextField label='Read Only' size='small' color='secondary' InputProps={{readOnly:true}}/>
        </Stack>
        <Stack direction='row' spacing={2}>
        <TextField label='Amount' InputProps={{
            startAdornment:<InputAdornment position='start' >$</InputAdornment>
        }}/>
        <TextField label='Weight' InputProps={{
            endAdornment:<InputAdornment position='end' >KG</InputAdornment>
        }}/>
        </Stack>
    </Stack>
  )
}

export default MuiTextField