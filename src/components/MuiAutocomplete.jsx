import {useState} from 'react'
import {Stack, Autocomplete, TextField} from '@mui/material'


const skills = ['HTML','CSS','Javascript','TypeScript','React'];

const skillOptions = skills.map((skill, index) => ({
    id:index + 1,
    label:skill
}))


export const MuiAutocomplete = () => {

    const [value, setValue] = useState(null);
    const [skill, setSkill] = useState(null);
    console.log({skill})
    //console.log(skill.id, skill.label);
    /* console.log(skill.id, skill.label); */

   /*  const handleChange = (e, newValue) => {
        setValue(newValue);
    }; */

  return (
    <Stack spacing={2} width='250px'>
        <Autocomplete options={skills} 
                      renderInput={(params) => <TextField {...params} label='Skills'/>}
                      value={value}
                      onChange={(event, newValue) => setValue(newValue)}
                      freeSolo />
        <Autocomplete options={skillOptions} 
                      renderInput={(params) => <TextField {...params} label='Skills'/>}
                      value={skill}
                      onChange={(event, skill) => setSkill(skill)}
                      freeSolo />
        {/* <div>Seleccionó : {skill.label}</div> */}
    </Stack>
  )
}
