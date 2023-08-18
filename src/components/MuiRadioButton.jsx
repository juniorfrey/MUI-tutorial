import React, { useState } from 'react';
import {Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText} from '@mui/material';

export const MuiRadioButton = () => {

    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    console.log(value)
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = () => {
        if (!value) {
            setError(true); // Show error if no value is selected when submitting
        } else {
            setError(false); // Reset error if a value is selected
            // Perform any further actions here
        }
    };

  return (
    <Box width='250px'>
        <FormControl error={error}>
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
        <button onClick={handleSubmit}>Submit</button>
    </Box>
  )
}
