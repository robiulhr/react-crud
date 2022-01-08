import React from 'react'
import { Link as routerLink } from "react-router-dom";
import { Box, Paper, Typography, Button } from '@mui/material';

function PageNotfound() {
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        width: '100vw',
                        height: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column'
                    },
                }}
            >
                <Paper elevation={3} >
                    <Typography variant='h4'>Page Not Found</Typography>
                    <Button color="inherit" component={routerLink} sx={{ bgcolor: 'text.secondary', m: 3 }} to="/" >GO BACK TO HOME</Button>

                </Paper>
            </Box>
        </div>
    )
}

export default PageNotfound
