import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Login from './pages/Login';
import Home from './pages/Home';

const theme = createTheme({
  palette: {
    primary: {
      main: '#144707',
    },
    secondary: {
      main: '#927F15',
    },
    background: {
      default: '#2a2a2a',
      paper: '#2a2a2a',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
    },
    action: {
      hover: 'rgba(255, 255, 255, 0.25)',
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
