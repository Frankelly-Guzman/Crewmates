import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        pt: 6,
        pb: 6,
        borderTop: 1,
        borderColor: 'divider',
        mt: 4,
      }}
      component="footer"
    >
      <Container maxWidth="lg" sx={{textAlign: 'center'}}>
        <Typography variant="h6" align="center" gutterBottom>
          CREWMATES
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Built with love and React
        </Typography>
        <Typography 
            variant='subtitle1'
            align='center'
            color='text.secondary'
            component='p'
        >
            Powered by Supabase
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <IconButton color="inherit" href="https://github.com/frankelly-guzman" target='_blank'>
            <GitHubIcon />
          </IconButton>
          <IconButton color="inherit" href="https://linkedin.com/in/frankelly-guzman" target='_blank'>
            <LinkedInIcon />
          </IconButton>
        </Box>

        <Copyright sx={{ mt: 4 }} />
      </Container>
    </Box>
  );
}

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        CREWMATES
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Footer;