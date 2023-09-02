import  NavigateNextIcon  from '@mui/icons-material/NavigateNext';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';

import React from 'react'

export const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
        <Breadcrumbs aria-label='breadcrumb' 
                     separator={<NavigateNextIcon fontSize='small' />}
                     maxItems={3}
                     itemsBeforeCollapse={2}
            >
            <Link underline='hover' href='#'>Home</Link>
            <Link underline='hover' href='#'>Catalog</Link>
            <Link underline='hover' href='#'>Accesories</Link>
            <Typography color='text.secondary'>Shoes</Typography>
        </Breadcrumbs>
    </Box>
  )
}
