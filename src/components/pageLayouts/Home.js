import React, { useEffect, useState } from 'react'
import Nav from '../partials/Nav'
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { GetUsers, Deleteuser } from '../../Api/Api';
import { Link as routerLink } from "react-router-dom";


function Home() {
    const [users, setusers] = useState([])
    useEffect(() => {
        GetAllUsers('http://localhost:3004/users')

    }, [])
    const GetAllUsers = async (url) => {
        const Alldata = await GetUsers(url)
        setusers(Alldata.data)
    }
    const DeleteuserData = async (id) => {
        await Deleteuser(`http://localhost:3004/users/${id}`)
        console.log(id);
        GetAllUsers('http://localhost:3004/users')
    }
    return (
        <div>
            <Nav></Nav>
            <Container maxWidth={"xl"}>

                <Typography mt={4} ml={2} variant="h4">
                    All Users
                </Typography>
                <TableContainer component={Paper} elevation={5} sx={{ mt: "10px" }} >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 1 } }}>
                                <TableCell align="center">Id</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">User name</TableCell>
                                <TableCell align="center">Age</TableCell>
                                <TableCell align="center">Phone Number</TableCell>
                                <TableCell align="center">User Action</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user, index) => {
                                return (<TableRow key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" align='center'>{index + 1}</TableCell>
                                    <TableCell align="center">{user.name}</TableCell>
                                    <TableCell align="center">{user.user_name}</TableCell>
                                    <TableCell align="center">{user.age}</TableCell>
                                    <TableCell align="center">{user.phone_num}</TableCell>
                                    <TableCell align="center"><Button color="inherit" component={routerLink} sx={{ bgcolor: 'text.secondary', color: 'white', m: 1 }} to={`/edituser/${user.id}`}>Edit</Button>
                                        <Button sx={{ bgcolor: 'error.main', color: 'white', m: 1 }} onClick={() => { DeleteuserData(user.id) }}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                                )
                            }
                            )}

                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div >
    )
}

export default Home

