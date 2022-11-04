import React from "react";

import Routes from "./routes/Routes";
import NavBar from "./components/Navbar";
import { Container } from "@mui/system";





function App() {
  return (
    <Container disableGutters>
      <NavBar/>
      {/* <Routes/> */}
    </Container>
  );
}

export default App;
