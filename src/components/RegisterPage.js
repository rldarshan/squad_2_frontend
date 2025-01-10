import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Container, Grid2 as Grid , Typography, FormHelperText, CircularProgress, AppBar, Toolbar, Box } from '@mui/material';
import { useRegisterUserMutation } from '../store/api/authApi';

const RegisterPage = () => {

    const [registerUser, { isLoading, error: isError }] = useRegisterUserMutation();

    const [formData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        cPassword: '',
        role: '',
    });

    const [error, setError] = useState({
        name: '',
        email: '',
        bloodGroup: '',
        role: '',
        dob: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let isValid = true;
        let errors = {};

        if (!formData.name) {
            errors.name = 'Name is required';
            isValid = false;
        }
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Valid email is required';
            isValid = false;
        }
        if (!formData.bloodGroup) {
            errors.bloodGroup = 'Blood Group is required';
            isValid = false;
        }
        if (!formData.role) {
            errors.role = 'Role is required';
            isValid = false;
        }
        if (!formData.password) {
            errors.password = 'Password is required';
            isValid = false;
        }
        if (!formData.cPassword) {
            errors.cPassword = 'Confirm password is required';
            isValid = false;
        }

        if (formData.password !== formData.cPassword) {
            errors.password = 'Password and Confirm password should be match';
            errors.cPassword = 'Password and Confirm password should be match';
            isValid = false;
        }

        setError(errors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form Submitted', formData);

            registerUser({ email: formData.email, name: formData.name, bloodGroup: formData.bloodGroup, role: formData.role, dob: formData.dob })
                .unwrap()
                .then((response) => {
                    console.log('Registered:', response);
                })
                .catch((err) => {
                    console.error('Registration error:', err);
                });
        }
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
            <Box display={'flex'} justifyContent={'center'} alignContent={'center'} marginY={10} overflowY={"scroll"}>
                <Container maxWidth="xs">
                    <Typography variant="h5" gutterBottom>
                        Register
                    </Typography>
                    {error && <Typography color="error">{error.message}</Typography>}
                    <form onSubmit={handleSubmit}>

                        <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            margin="normal"
                            error={!!error.name}
                            helperText={error.name}
                        />

                        {/* Email Field */}
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            margin="normal"
                            error={!!error.email}
                            helperText={error.email}
                        />

                        {/* Blood Group Dropdown */}
                        <FormControl fullWidth margin="normal" error={!!error.bloodGroup}>
                            <InputLabel>Blood Group</InputLabel>
                            <Select
                                label="Blood Group"
                                name="bloodGroup"
                                value={formData.bloodGroup}
                                onChange={handleChange}
                            >
                                <MenuItem value="A+">A+</MenuItem>
                                <MenuItem value="A-">A-</MenuItem>
                                <MenuItem value="B+">B+</MenuItem>
                                <MenuItem value="B-">B-</MenuItem>
                                <MenuItem value="O+">O+</MenuItem>
                                <MenuItem value="O-">O-</MenuItem>
                                <MenuItem value="AB+">AB+</MenuItem>
                                <MenuItem value="AB-">AB-</MenuItem>
                            </Select>
                            {error.bloodGroup && <FormHelperText>{error.bloodGroup}</FormHelperText>}
                        </FormControl>

                        {/* Role Dropdown */}
                        <FormControl fullWidth margin="normal" error={!!error.role}>
                            <InputLabel>Role</InputLabel>
                            <Select
                                label="Role"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                            >
                                <MenuItem value="patient">Patient</MenuItem>
                                <MenuItem value="provider">Provider</MenuItem>
                            </Select>
                            {error.role && <FormHelperText>{error.role}</FormHelperText>}
                        </FormControl>

                        {/* Password Field */}
                        <TextField
                            fullWidth
                            label="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            margin="normal"
                            error={!!error.password}
                            helperText={error.password}
                        />

                        {/* Confirm password Field */}
                        <TextField
                            fullWidth
                            label="Confirm Password"
                            name="cPassword"
                            type="password"
                            value={formData.cPassword}
                            onChange={handleChange}
                            margin="normal"
                            error={!!error.cPassword}
                            helperText={error.cPassword}
                        />

                        {/* Submit Button */}
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Register
                        </Button>

                    </form>
                </Container>
            </Box>

        </div>

    );
};

export default RegisterPage;
