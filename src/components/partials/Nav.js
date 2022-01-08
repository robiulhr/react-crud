import React from 'react'
import { Link as routerLink } from "react-router-dom";
import { Container, AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


function Nav() {
    return (
        <Box sx={{ flexGrow: 1 }}>

            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="white" component={routerLink} sx={{ flexGrow: 1, textTransform: 'uppercase', textDecoration: 'none' }} to="/">
                            Crud App
                        </Typography>
                        <Button color="inherit" component={routerLink} sx={{ bgcolor: 'text.secondary' }} to="/adduser" >Add User</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>

    );
}

export default Nav
