import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '80vh',
            }}>
                <Grid container justifyContent='center' alignItems='center'>
                    <Grid item md={3} className="text-center">
                        <Typography variant="h1" sx={{ fontSize: '10rem' }}>404</Typography>
                    </Grid>
                    <Grid item md={4}>
                        <Typography variant="h2">SORRY!</Typography>
                        <Typography variant="h4">The page you’re looking for was not found.</Typography>
                    </Grid>
                    <Grid item md={12} sx={{ textAlign: 'center' }}>
                        <Link to='/event' style={{ fontWeight: 'bold' }}>Back To Home</Link>
                    </Grid>
                    <Grid item md={12}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold', textAlign: 'center' }}>Copyright © 2018 All rights reserved.</Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default NotFound