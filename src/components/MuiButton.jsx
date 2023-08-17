import {Stack,Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlineIcon from '@mui/icons-material/FormatUnderlined';
import { useState, useEffect } from 'react';

const MuiButton = () => {

    const [formats, setFormats] = useState([]);
    const handleFormatChange = (e,newSelectedValues) =>{
        setFormats(newSelectedValues);
    }

    useEffect(() => {
        console.log(formats);
    }, [formats]);
    

  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button variant='text'>Text</Button>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>Outlined</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='contained'color='primary'>Primary</Button>
            <Button variant='contained'color='secondary'>Primary</Button>
            <Button variant='contained'color='error'>Primary</Button>
            <Button variant='contained'color='warning'>Primary</Button>
            <Button variant='contained'color='info'>Primary</Button>
            <Button variant='contained'color='success'>Primary</Button>
        </Stack>
        <Stack display='block' spacing={2} direction='row'>
            <Button variant='contained' size='small'>Small</Button>
            <Button variant='contained' size='medium'>Medium</Button>
            <Button variant='contained' size='large'>Large</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='contained' startIcon={<SendIcon />} disableElevation>Send</Button>
            <Button variant='contained' endIcon={<SendIcon />} disableRipple>Send</Button>
            <IconButton aria-label='send' color='success' size='small'>
                <SendIcon />
            </IconButton>
        </Stack>
        <Stack direction='row' spacing={2}>
            <ButtonGroup variant='text'>
                <Button >Left</Button>
                <Button >Center</Button>
                <Button >Right</Button>
            </ButtonGroup>
            <ButtonGroup variant='outlined'>
                <Button startIcon={<SendIcon />} color='secondary'>Left</Button>
                <Button  color='success'>Center</Button>
                <Button color='error'>Right</Button>
            </ButtonGroup>
            <ButtonGroup variant='contained' >
                <Button >Left</Button>
                <Button >Center</Button>
                <Button >Right</Button>
            </ButtonGroup>
        </Stack>
        <Stack direction='row'>
            <ButtonGroup variant='text' orientation='vertical' size='small' aria-label='alignment button group'>
                <Button endIcon={<SendIcon />} onClick={() => alert('Left click')}>Left</Button>
                <Button startIcon={<SendIcon />}>Center</Button>
                <Button >Right</Button>
            </ButtonGroup>
        </Stack>
        <Stack direction='row'>
            <ToggleButtonGroup arial-label='text formatting' 
                value={formats}
                exclusive
                onChange={handleFormatChange}>
                <ToggleButton value='bold' arial-label='bold'><FormatBoldIcon /></ToggleButton>
                <ToggleButton value='italic' arial-label='italic'><FormatItalicIcon /></ToggleButton>
                <ToggleButton value='underlined' arial-label='underlined'><FormatUnderlineIcon /></ToggleButton>
            </ToggleButtonGroup>
        </Stack>
        
    </Stack>
      )
}

export default MuiButton