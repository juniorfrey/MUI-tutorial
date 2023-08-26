import {Stack, ImageList, ImageListItem, Box, ImageListItemBar} from '@mui/material';
import React from 'react';

export const MuiImageList = () => {
  return (
    <Stack spacing={4}>
      <ImageList sx={{width:500, height:450}} cols={3} rowHeight={164}>
          {
            itemData.map(item => (
              <ImageListItem key={item.idd}>
                  <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} 
                       alt={item.title} loading='lazy' />
                       <ImageListItemBar title={item.title} />
              </ImageListItem>
            ))
          }
      </ImageList>
      <ImageList variant='woven' sx={{width:500, height:450}} cols={3} gap={8}>
          {
            itemData.map(item => (
              <ImageListItem key={item.idd}>
                  <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} 
                       alt={item.title} loading='lazy' />
              </ImageListItem>
            ))
          }
      </ImageList>
      <Box sx={{width:500, height:450, overflow:'scroll'}}>
        <ImageList variant='masonry'  cols={3} gap={8}>
            {
              itemData.map(item => (
                <ImageListItem key={item.idd}>
                    <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} 
                        alt={item.title} loading='lazy' />
                </ImageListItem>
              ))
            }
        </ImageList>
      </Box>
    </Stack>
  )
}

const itemData = [
  {
    idd:1,
    img:"https://cdn.ferrari.com/cms/network/media/img/resize/5d70e7d4ee5f7e58630608ed-d-2.0-812gts-dynamic-focuson",
    title:"Imagen 1"
  },
  {
    idd:2,
    img:"https://phantom-expansion.unidadeditorial.es/d99e9afff02c3ac173b6d6f827f3a551/crop/0x725/2043x1875/resize/828/f/webp/assets/multimedia/imagenes/2022/05/20/16530388017130.jpg",
    title:"Imagen 2"
  },
  {
    idd:3,
    img:"https://media.revistagq.com/photos/5e3184bc30c3d5000883e308/16:9/w_1280,c_limit/03157667-ferrari-sf90-stradale-5.jpg",
    title:"Imagen 3"
  },
  {
    idd:4,
    img:"https://cdn.ferrari.com/cms/network/media/img/resize/5d70e7d4ee5f7e58630608ed-d-2.0-812gts-dynamic-focuson",
    title:"Imagen 3"
  },
  {
    idd:5,
    img:"https://media.revistagq.com/photos/5e3184bc30c3d5000883e308/16:9/w_1280,c_limit/03157667-ferrari-sf90-stradale-5.jpg",
    title:"Imagen 3"
  },
  {
    idd:6,
    img:"https://media.revistagq.com/photos/5e3184bc30c3d5000883e308/16:9/w_1280,c_limit/03157667-ferrari-sf90-stradale-5.jpg",
    title:"Imagen 3"
  },
  {
    idd:7,
    img:"https://media.revistagq.com/photos/5e3184bc30c3d5000883e308/16:9/w_1280,c_limit/03157667-ferrari-sf90-stradale-5.jpg",
    title:"Imagen 3"
  },
  {
    idd:8,
    img:"https://cdn.ferrari.com/cms/network/media/img/resize/5d70e7d4ee5f7e58630608ed-d-2.0-812gts-dynamic-focuson",
    title:"Imagen 3"
  },
  {
    idd:9,
    img:"https://media.revistagq.com/photos/5e3184bc30c3d5000883e308/16:9/w_1280,c_limit/03157667-ferrari-sf90-stradale-5.jpg",
    title:"Imagen 3"
  }
];
