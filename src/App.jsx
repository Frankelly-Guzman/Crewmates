import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import CreateCrewmate from './Pages/CreateCrewmate'
import EditCrewmate from './Pages/EditCrewmate'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';
import { CssBaseline } from '@mui/material';
import LandingPage from './Pages/LandingPage'
import Gallery from './Pages/Gallery'
import CrewmateDetail from './Pages/CrewmateDetail'
import NotFound from './Pages/NotFound'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: blue[500],
    },
    secondary: {
      main: grey[300],
    },
    background: {
      default: "#000000",
      paper: "#121212",
    },
    text: {
      primary: "#ffffff",
      secondary: grey[500],
    }
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create-crewmate" element={<CreateCrewmate />} />
          <Route path="/edit-crewmate/:id" element={<EditCrewmate />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/crewmate/:id" element={<CrewmateDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App