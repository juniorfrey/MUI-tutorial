import {useState} from 'react'
import {Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup, FormHelperText } from '@mui/material'
import  BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import  BookmarkIcon from '@mui/icons-material/BookmarkBorder';

export const MuiCheckbox = () => {

    const [accept, setAccept] = useState(false);
    const [skills, setsKills] = useState([])
    console.log(skills)

    const handleChange = (event) => {
        setAccept(event.target.checked);
    };

    const handleSkillChange = (event) => {
        const index = skills.indexOf(event.target.value);
        if(index === -1) {
            setsKills([...skills, event.target.value]);
        }else{
            setsKills(skills.filter((skill) => skill !== event.target.value));
        }
    };

  return (
    <Box>
        <Box>
            <FormControlLabel  label='I accept terms and conditions' 
                control={<Checkbox checked={accept} onChange={handleChange} size='small' color='secondary' />} />
        </Box>
        <Box>
            <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />}  
            checked={accept}
            onChange={handleChange} />
        </Box>
        <Box>
            <FormControl error>
                <FormLabel>Skills</FormLabel>
                <FormGroup row>
                    <FormControlLabel label='HTML' 
                    control={<Checkbox value='html' checked={skills.includes('html')}  onChange={handleSkillChange}/>} />

                    <FormControlLabel label='CSS' value='css'
                    control={<Checkbox checked={skills.includes('css')}  onChange={handleSkillChange}/>} />

                </FormGroup>
                <FormHelperText>Invalid action</FormHelperText>
            </FormControl>
        </Box>
    </Box>
  )
}
