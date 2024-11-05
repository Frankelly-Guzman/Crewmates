import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import characterBlue from '../assets/character-blue.png';
import characterRed from '../assets/character-red.png';
import characterGreen from '../assets/character-green.png';
import characterBlack from '../assets/character-black.png';
import characterYellow from '../assets/character-yellow.png';
import characterCyan from '../assets/character-cyan.webp';
import characterOrange from '../assets/character-orange.png';
import characterLime from '../assets/character-lime.png';

const CrewmateCard = ({ id, name, color, role, speed }) => {
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

  const handleEditClick = () => {
    navigate(`/edit-crewmate/${id}`);
  };

  const handleDetailClick = () => {
    navigate(`/crewmate/${id}`); // Navigate to detail page
  };

  return (
    <Card sx={{ mb: 4, height: 350, width: 300 }}>
      <CardHeader title={name || 'Crewmate Name'} align="center" />
      <CardMedia
        component="img"
        image={colorImages[color]}
        alt={`${color} crewmate`}
        sx={{ width: 150, height: 150, margin: 'auto', cursor: 'pointer' }} // Make it look clickable
        onClick={handleDetailClick} // Make the image clickable
      />
      <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Typography variant="h6" align="center">{role}</Typography>
        <Typography variant="body1" align="center">Speed: {speed}</Typography>
        <Button variant="contained" color="primary" onClick={handleEditClick} sx={{ mt: 2 }}>
          Edit
        </Button>
        <Button variant="contained" color="secondary" onClick={handleDetailClick} sx={{ mt: 2 }}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default CrewmateCard;