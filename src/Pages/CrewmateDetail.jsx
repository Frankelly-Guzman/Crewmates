import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import { Container, Card, CardHeader, CardContent, Typography, Box, CardMedia } from '@mui/material';
import characterBlue from '../assets/character-blue.png';
import characterRed from '../assets/character-red.png';
import characterGreen from '../assets/character-green.png';
import characterBlack from '../assets/character-black.png';
import characterYellow from '../assets/character-yellow.png';
import characterCyan from '../assets/character-cyan.webp';
import characterOrange from '../assets/character-orange.png';
import characterLime from '../assets/character-lime.png';

const CrewmateDetail = () => {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);
  const [loading, setLoading] = useState(true); // State to track loading

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

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase
        .from('crew-mate')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching crewmate:', error);
      } else {
        setCrewmate(data);
      }
      setLoading(false); // Set loading to false after fetching
    };

    fetchCrewmate();
  }, [id]);

  if (loading) return <div>Loading...</div>; // Optional loading state

  if (!crewmate) {
    return <div>No crewmate found.</div>; // Handle case when no crewmate is found
  }

  let speedStatement; // Define speedStatement before use

  if (crewmate.speed <= 3) {
    speedStatement = 'You may want to find a crewmate with a faster speed. This one is slow! 😬';
  } else if (crewmate.speed >= 4 && crewmate.speed <= 6) {
    speedStatement = 'This crewmate has an average speed. Not too fast, not too slow. 😌';
  } else {
    speedStatement = 'This crewmate is super fast! You should definitely keep them around! 🚀';
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card sx={{ mb: 4 }}>
        <CardHeader title={crewmate.name || 'Crewmate Name'} align="center" />
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <CardMedia
            component="img"
            image={colorImages[crewmate.color]} // Use mapped image based on color
            alt={`${crewmate.color} crewmate`}
            sx={{
              width: 150,
              height: 150,
              objectFit: 'contain',
            }}
          />
        </Box>
        <CardContent>
          <Typography variant="h6" align="center">{crewmate.role}</Typography>
          <Typography variant="body1" align="center">Speed: {crewmate.speed}</Typography>
          <Typography variant="body2" align="center">{speedStatement}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CrewmateDetail;