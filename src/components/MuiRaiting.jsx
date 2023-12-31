import {useState} from 'react'
import {Stack, Rating} from '@mui/material'

import  FavoriteIcon from '@mui/icons-material/Favorite';
import  FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const MuiRaiting = () => {

    const [value, setvalue] = useState(3)
    console.log({value})
    const handleChange = (e, newValue) => {
        setvalue(newValue);
    }

  return (
    <Stack spacing={2}>
        <Rating value={value} onChange={handleChange} precision={0.5} size='large'
                icon={<FavoriteIcon fontSize='inherit' color='error'/>} 
                emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
                /*readOnly*/
                highlightSelectedOnly
         />
    </Stack>
  )
}
