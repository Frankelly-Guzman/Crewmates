import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const LandingPage = () => {
  return (
    <Container sx={{ mt: 6, textAlign: 'center'}}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h2" align="center" gutterBottom>
          Welcome to Crewmates!
        </Typography>
        <Typography variant="h5" align="center" sx={{ mb: 3 }}>
          Create your own crewmate and share it with the world
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexDirection: 'column', alignItems: 'center'}}>
        <img
          src="https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png"
          alt="Crewmates"
          style={{ width: '100%', maxWidth: '250px', borderRadius: '8px' }}
        />
        <img
          src="https://shimmering-stardust-c75334.netlify.app/assets/spaceship.3d8f767c.png"
          alt="Spaceship"
          style={{ width: '100%', maxWidth: '250px', borderRadius: '8px' }}
        />
      </Box>
    </Container>
  );
};

export default LandingPage;