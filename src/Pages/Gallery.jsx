import React, { useEffect, useState } from 'react';
import { supabase } from '../client'; // Ensure this path is correct
import CrewmateCard from '../Components/CrewmateCard'; // Adjust the import according to your file structure
import { Container, Grid, Button, Box, Typography } from '@mui/material'; // Use Box to wrap buttons
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const [crewmates, setCrewmates] = useState([]);
  const [filteredMates, setFilteredMates] = useState([]);
  const [filter, setFilter] = useState('all'); // State to manage the current filter
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase
        .from('crew-mate') // Make sure this is the correct table name
        .select('*'); // Adjust fields as necessary

      if (error) {
        console.error('Error fetching crewmates:', error);
      } else {
        setCrewmates(data);
        setFilteredMates(data); // Initialize filtered mates with all crewmates
      }
    };

    fetchCrewmates();
  }, []);

  useEffect(() => {
    const filterCrewmates = () => {
      if (filter === 'all') {
        setFilteredMates(crewmates); // Show all crewmates
      } else {
        const filtered = crewmates.filter((crewmate) => crewmate.role === filter);
        setFilteredMates(filtered); // Filter based on selected role
      }
    };

    filterCrewmates();
  }, [filter, crewmates]); // Run filtering when filter or crewmates change

  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ mb: 2, textAlign: 'center' }}>
        <Button variant={filter === 'all' ? 'contained' : 'outlined'} onClick={() => setFilter('all')}>
          All
        </Button>
        <Button variant={filter === 'crewmate' ? 'contained' : 'outlined'} onClick={() => setFilter('Crewmate')}>
          Crewmates
        </Button>
        <Button variant={filter === 'imposter' ? 'contained' : 'outlined'} onClick={() => setFilter('Imposter')}>
          Imposters
        </Button>
      </Box>
      {filteredMates.length === 0 ? (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h6">
            No crewmates available. Please add some to the database!
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => navigate('/create-crewmate')} 
            sx={{ mt: 2 }}
          >
            Create a Crewmate
          </Button>
        </Box>
      ) : (
        <Grid container spacing={2}>
          {filteredMates.map((crewmate) => (
            <Grid item xs={12} sm={6} md={4} key={crewmate.id}>
              <CrewmateCard
                id={crewmate.id}
                name={crewmate.name}
                color={crewmate.color}
                role={crewmate.role}
                speed={crewmate.speed}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Gallery;