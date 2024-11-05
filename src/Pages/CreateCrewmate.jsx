import React, { useState } from 'react';
import { supabase } from '../client';
import { 
  Container, 
  Card, 
  CardHeader, 
  CardMedia, 
  CardContent, 
  Typography, 
  TextField, 
  FormLabel, 
  RadioGroup, 
  FormControlLabel, 
  Radio, 
  Slider, 
  Button, 
  Box, 
  Modal 
} from '@mui/material';
import characterBlue from '../assets/character-blue.png';
import characterRed from '../assets/character-red.png';
import characterGreen from '../assets/character-green.png';
import characterBlack from '../assets/character-black.png';
import characterYellow from '../assets/character-yellow.png';
import characterCyan from '../assets/character-cyan.webp';
import characterOrange from '../assets/character-orange.png';
import characterLime from '../assets/character-lime.png';
import { useNavigate } from 'react-router-dom';

const CreateCrewmate = () => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('blue');
  const [role, setRole] = useState('Crewmate');
  const [speed, setSpeed] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const colorImages = {
    blue: characterBlue,
    red: characterRed,
    green: characterGreen,
    black: characterBlack,
    yellow: characterYellow,
    cyan: characterCyan,
    orange: characterOrange,
    lime: characterLime,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Perform the POST request to Supabase
    const { error } = await supabase
      .from('crew-mate') // Replace with your table name
      .insert([{ name, color, role, speed }]);

    if (!error) {
      setOpenModal(true); // Open the modal on successful POST
      // Redirect after 3 seconds
      setTimeout(() => {
        navigate('/gallery'); // Change this to your actual gallery route
      }, 3000);
    } else {
      console.error('Error inserting data:', error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card sx={{ mb: 4 }}>
        <CardHeader title={name || 'Crewmate Name'} align="center" />
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <CardMedia
            component="img"
            image={colorImages[color]} // Use mapped image based on color
            alt={`${color} crewmate`}
            sx={{
              width: 150,
              height: 150,
              objectFit: 'contain',
            }}
          />
        </Box>
        <CardContent>
          <Typography variant="h6" align="center">{role}</Typography>
          <Typography variant="body1" align="center">Speed: {speed}</Typography>
        </CardContent>
      </Card>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Crewmate Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 3 }}
        />

        {/* Color Radio Buttons */}
        <FormLabel component="legend">Color</FormLabel>
        <RadioGroup row value={color} onChange={(e) => setColor(e.target.value)} sx={{ mb: 3 }}>
          {Object.keys(colorImages).map((colorOption) => (
            <FormControlLabel
              key={colorOption}
              value={colorOption}
              control={<Radio />}
              label={colorOption.charAt(0).toUpperCase() + colorOption.slice(1)}
            />
          ))}
        </RadioGroup>

        {/* Role Radio Buttons */}
        <FormLabel component="legend">Role</FormLabel>
        <RadioGroup row value={role} onChange={(e) => setRole(e.target.value)} sx={{ mb: 3 }}>
          <FormControlLabel value="Crewmate" control={<Radio />} label="Crewmate" />
          <FormControlLabel value="Imposter" control={<Radio />} label="Imposter" />
        </RadioGroup>

        {/* Speed Slider */}
        <FormLabel component="legend">Speed</FormLabel>
        <Slider
          value={speed}
          onChange={(e, newValue) => setSpeed(newValue)}
          step={1}
          marks
          min={1}
          max={10}
          sx={{ mb: 3 }}
        />

        {/* Submit Button */}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Create Crewmate
        </Button>
      </form>

      {/* Success Modal */}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box
          sx={{
            bgcolor: '#1f1f1f',
            p: 4,
            borderRadius: 2,
            boxShadow: 24,
            textAlign: 'center', // Center text and content
          }}
        >
          <Typography variant="h6" align="center" color="text.primary">
            Crewmate created successfully!
          </Typography>

          {/* Adding the GIF below the text */}
          <Box sx={{ mt: 2 }}>
            <iframe
              src="https://giphy.com/embed/li6fUAPIbMhpwDcvEN"
              width="480"
              height="480"
              frameBorder="0"
              allowFullScreen
              style={{ display: 'block', margin: '0 auto' }} // Center the iframe
            ></iframe>
            <Typography variant="body2" color="text.secondary" mt={1}>
              <a href="https://giphy.com/gifs/freakmeaning-freak-meaning-fre4k-li6fUAPIbMhpwDcvEN" style={{ color: 'inherit' }}>
                via GIPHY
              </a>
            </Typography>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default CreateCrewmate;