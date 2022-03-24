import { Container, CssBaseline, Paper, ThemeProvider } from "@material-ui/core";
import HomeScreen from "./screen/HomeScreen";
import { createTheme } from "@material-ui/core";
// import { Store } from './Store';
import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChooseScreen from "./screen/ChooseScreen";
import OrderScreen from "./screen/OrderScreen";

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
          <Routes>
          <Route path="/"  element={<HomeScreen/>} exact={true} ></Route>
          <Route path="/choose" element={<ChooseScreen/>} exact={true}></Route>
          <Route path="/order" element={<OrderScreen/>} exact={true}></Route>
          </Routes>
        </Paper>
      </Container>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
