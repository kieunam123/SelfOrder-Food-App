import { Container, CssBaseline, Paper, ThemeProvider, StylesProvider } from "@material-ui/core";
import HomeScreen from "./screen/HomeScreen";
import { createTheme } from "@material-ui/core";
// import { Store } from './Store';
import React, { useContext } from 'react';
const theme = createTheme({
  typography:{
    h1:{fontWeight: 'bold'},
    h2:{
      fontSize:'2rem',
      color:'black',
    },
    h3:{
      fontSize:'1.8 rem',
      fontWeight:'bold',
      color:'white',
    },
  },
  palette:{
    primary:{main: '#ff1744'},
    secondary:{
      main:'#118e16',
      contrastText: '#ffffff',
    },
  },
});

function App() {
  // const { state } = useContext(Store);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Container maxWidth="sm">
        <Paper>
          <HomeScreen>

          </HomeScreen>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
