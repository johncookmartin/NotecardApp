import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

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
      <div>App</div>
    </ThemeProvider>
  );
};

export default App;
