import React, { useState } from 'react';
import {Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText} from '@mui/material';

export const MuiRadioButton = () => {

    const [value, setValue] = useState('');
    console.log(value)
    const handleChange = (event) => {
        setValue(event.target.value);
    };

  return (
    <Box width='250px'>
        <FormControl error>
            <FormLabel id='job-experience-group-label'>
                Años de Experiencia
            </FormLabel>
            <RadioGroup name='job-experience/group' 
                        aria-labelledby='job-experience-group-label'
                        value={value}
                        onChange={handleChange}
                        row>
                <FormControlLabel  control={<Radio />} label='0-2' value='0-2' size='small' color='info' />
                <FormControlLabel  control={<Radio />} label='3-5' value='3-5'/>
                <FormControlLabel  control={<Radio />} label='6-10' value='6-10'/>
            </RadioGroup>
            <FormHelperText>Seleccion Invalida</FormHelperText>
        </FormControl>
    </Box>
  )
}
