import CountCard from '@/components//CountCard';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid2';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box p={2} textAlign="center">
        <Typography variant="h2">Sample React app</Typography>
        <Grid container mt={2} spacing={2}>
          <CountCard />
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
