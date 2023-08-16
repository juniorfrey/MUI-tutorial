
import {Typography} from '@mui/material';
const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>H1 Heading</Typography>
        <Typography variant='h2'>H2 Heading</Typography>
        <Typography variant='h3'>H3 Heading</Typography>
        <Typography variant='h4' component='h1' gutterBottom>H4 Heading</Typography>
        <Typography variant='h5'>H5 Heading</Typography>
        <Typography variant='h6'>H6 Heading</Typography>

        <Typography variant='subtitle1'>Sub title 1</Typography>
        <Typography variant='subtitle2'>Sub title 2</Typography>

        <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita aliquid possimus debitis ad neque similique deserunt culpa cumque repellendus fuga inventore, illo aliquam soluta commodi sint ducimus odio, laudantium deleniti!</Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita aliquid possimus debitis ad neque similique deserunt culpa cumque repellendus fuga inventore, illo aliquam soluta commodi sint ducimus odio, laudantium deleniti!</Typography>

    </div>
  )
}

export default MuiTypography