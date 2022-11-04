import React from "react";

import Routes from "./routes/Routes";

import Home from "./pages/Home";
import NavBar from "./components/Navbar";
import { Container } from "@mui/system";

function App() {
  return (
    <Container disableGutters>
      {/* <NavBar/> */}
      <Home/>
      {/* <Routes/> */}
    </Container>
  );
}

export default App;
