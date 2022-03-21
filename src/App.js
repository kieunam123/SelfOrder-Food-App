import { Container, CssBaseline, Paper, ThemeProvider, StylesProvider } from "@material-ui/core";
import HomeScreen from "./screen/HomeScreen";
import { createTheme } from "@material-ui/core";
// import { Store } from './Store';
import React, { useContext } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import ChooseScreen from "./screen/ChooseScreen";


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
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Container maxWidth="sm">
        <Paper>
          <Route path="/" component={HomeScreen} exact={true}></Route>
          <Route path="/choose" component={ChooseScreen} exact={true}></Route>
          <HomeScreen>
              
          </HomeScreen>
        </Paper>
      </Container>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
