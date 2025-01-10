import React from 'react';
import { AppBar, Toolbar, Typography, Button, Card, CardContent, Container, Box, Grid2 as Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import Testimonial from './Testimonial';

const testimonials = [{ name: "John Doe", message: "This product is amazing! It has changed my life.", image: "https://via.placeholder.com/56" }, { name: "Jane Smith", message: "I highly recommend this to everyone.", image: "https://via.placeholder.com/56" }];

const HomePage = () => {
    return (
        <div>
            {/* Header */}
            <AppBar position="sticky" color="primary">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Bayer
                    </Typography>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/login">Login</Button>
                    <Button color="inherit" component={Link} to="/register">Register</Button>
                </Toolbar>
            </AppBar>

            
            <Box sx={{ textAlign: 'center', padding: '50px 0', backgroundColor: '#f4f4f4' }}>
                <Typography variant="h3" gutterBottom>Welcome to Our HealthCare</Typography>
                <Typography variant="h6" paragraph>
                    Providing compassionate care for you and your family. Your health is our top priority.
                </Typography>
            </Box>

            
            <Container sx={{ py: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Our Services
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item size={12} sm={4}>
                        <Card>
                            <CardContent>
                                <MedicalServicesIcon sx={{ fontSize: 60, color: 'primary.main' }} />
                                <Typography variant="h5" gutterBottom>
                                    General Consultation
                                </Typography>
                                <Typography variant="body2">
                                    Our experienced doctors provide general consultations and treatments for common health issues.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item size={12} sm={4}>
                        <Card>
                            <CardContent>
                                <LocalHospitalIcon sx={{ fontSize: 60, color: 'primary.main' }} />
                                <Typography variant="h5" gutterBottom>
                                    Emergency Services
                                </Typography>
                                <Typography variant="body2">
                                    We offer round-the-clock emergency care to handle urgent medical needs.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item size={12} sm={4}>
                        <Card>
                            <CardContent>
                                <AccessibilityIcon sx={{ fontSize: 60, color: 'primary.main' }} />
                                <Typography variant="h5" gutterBottom>
                                    Specialized Care
                                </Typography>
                                <Typography variant="body2">
                                    Our specialists are here to provide the best care in various fields, from cardiology to neurology.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

            
            <Box sx={{ backgroundColor: '#f4f4f4', py: 4 }}>
                <Container>
                    <Typography variant="h4" align="center" gutterBottom>
                        What Our Patients Say
                    </Typography>
                   
                        
                        <div style={{display:'flex'}}> {testimonials.map((testimonial, index) => ( <Testimonial key={index} testimonial={testimonial} /> ))} </div>
                        
                    
                </Container>
            </Box>

            
            <Box sx={{ backgroundColor: '#2c3e50', color: '#fff', py: 2 }}>
                <Container>
                    <Typography variant="body1" align="center">
                        &copy; 2025 Bayer. All Rights Reserved.
                    </Typography>
                </Container>
            </Box>
        </div>
    );
};

export default HomePage;
