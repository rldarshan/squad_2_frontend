import React, { useState } from 'react';
import { TextField, Button, Typography, Container, CircularProgress, Box, AppBar, Toolbar, } from '@mui/material';
import { useLoginUserMutation } from '../store/api/authApi';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [loginUser, { isLoading, error }] = useLoginUserMutation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(credentials)
            .unwrap()
            .then((response) => {
                console.log('Logged in:', response);
                navigate('/dashboard')
            })
            .catch((err) => {
                console.error('Login error:', err);
            });
    };

    return (
        <div>
            <AppBar position="sticky" color="primary">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Bayer
                    </Typography>

                </Toolbar>
            </AppBar>
            <Box display={'flex'} justifyContent={'center'} alignContent={'center'} marginTop={10}>
                <Container maxWidth="xs">
                    <Typography variant="h5" gutterBottom>
                        Login
                    </Typography>
                    {error && <Typography color="error">{error.message}</Typography>}
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            value={credentials.email}
                            onChange={handleChange}
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            name="password"
                            type="password"
                            value={credentials.password}
                            onChange={handleChange}
                            margin="normal"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            disabled={isLoading}
                            sx={{ mt: 2 }}
                        >
                            {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
                        </Button>
                    </form>
                </Container>
            </Box>
        </div>


    );
};

export default LoginPage;
