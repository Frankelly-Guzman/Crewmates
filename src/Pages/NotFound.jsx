import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant='h1' gutterBottom>404</Typography>
      <Typography variant="h4" gutterBottom>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        The page you are looking for might have been removed or is temporarily unavailable.
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => navigate('/')} // Navigate to the home page
      >
        Go to Home
      </Button>
    </Container>
  );
};

export default NotFound;