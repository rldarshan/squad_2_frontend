import React from 'react';
import { Card, CardContent, Typography, Avatar } from '@mui/material';

const Testimonial = ({ testimonial }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', mt: 3 }}>
      <CardContent>
        <Avatar 
          src={testimonial.image} 
          alt={testimonial.name} 
          sx={{ width: 56, height: 56, margin: 'auto', mb: 2 }} 
        />
        <Typography variant="h5" component="div" sx={{ textAlign: 'center', mb: 1 }}>
          {testimonial.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
          {testimonial.message}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Testimonial;
