import {Box, Card, CardContent, Typography, Button, CardActions, CardMedia} from '@mui/material'

export const MuiCard = () => {
  return (
    <Box width='300px'>
        <Card>
            <CardMedia component='img' height='140px' 
                        image='https://cdn.ferrari.com/cms/network/media/img/resize/649d5effff73dc0024751a3e-ferrari-sf90-xx-stradale2023-rullo-2?width=530&height=597'
                        alt='Image' />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>React</Typography>
                <Typography variant='body2' color='text.secondary'>
                    lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, 
                    consectetur adip, lorem ipsum dolor sit amet, consectetur adip
                </Typography>
            </CardContent>
            <CardActions >
                <Button size='small'>Share</Button>
                <Button size='small'>Learn more</Button>
            </CardActions>
        </Card>
    </Box>
  )
}
