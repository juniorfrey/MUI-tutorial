import React from 'react'
import {Stack, Link, Typography} from '@mui/material';

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction='row' m={4}>
        <Link href='#'>Link</Link>
        <Link href='#' color='secondary' underline='hover'>Secondary</Link>
        <Link href='#' color='secondary' underline='none'>None</Link>
        <Typography variant='h6'>
            <Link href='#' color='info' underline='none'>
                Typography
            </Link>
        </Typography>
        <Link href='#' color='success' underline='none' variant='h4'>None</Link>
    </Stack>
  )
}
