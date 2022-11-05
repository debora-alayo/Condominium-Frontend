import React from "react";

import { Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Container } from "@mui/system";
import ResponsiveAppBar from "./components/AppBar";
import Stuff from "./pages/Stuff";

function App() {
  return (
    <Container disableGutters>
      
      <ResponsiveAppBar/>
      <Routes>        
        <Route path='/Home' element={< Home />}/> 
        <Route path='Contact' element={< Contact />}/>
        <Route path='Stuff' element={< Stuff />}/>
      </Routes>
      
    </Container>
  );
}
//En path='/Home' Deberia ser solo /, pero si no se añade el Home no manda a ninguna parte, ver si podria afectar a futuro
export default App;
