import React, { useState } from 'react'
import Nav from '../partials/Nav'
import { Box, TextField, Button } from '@mui/material';
import { AddUsers, } from '../../Api/Api';
import { useNavigate } from "react-router-dom";


function Adduser() {
    const navigate = useNavigate();
    const initialState = {
        name: '',
        user_name: '',
        age: '',
        phone_num: ''
    }
    const [user, setuser] = useState(initialState)

    const setValue = (e) => {
        e.preventDefault();
        setuser({ ...user, [e.target.name]: e.target.value })
    }
    const addUser = () => {
        AddUsers('http://localhost:3004/users', user)
        navigate("/");
    }

    return (
        <div>
            <Nav></Nav>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    marginTop: '3rem',
                    '& > :not(style)': { m: '.8rem auto', width: '40%' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="standard-basic" label="Name" variant="standard" name='name' onChange={(e) => { setValue(e) }} value={user.name} />
                <TextField id="standard-basic" label="User Name" variant="standard" name='user_name' onChange={(e) => { setValue(e) }} value={user.user_name} />
                <TextField id="standard-basic" label="Age" variant="standard" name='age' onChange={(e) => { setValue(e) }} value={user.age} />
                <TextField id="standard-basic" label="Phone Number" variant="standard" name='phone_num' onChange={(e) => { setValue(e) }} value={user.phone_num} />
                <Button variant="contained" onClick={() => { addUser() }}>Add user</Button>
            </Box>
        </div>
    )
}

export default Adduser
