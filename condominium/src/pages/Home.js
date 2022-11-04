import React, { Component } from "react";
 
import { Typography } from "@mui/material";
import logo from "../assets/logo.svg";


class Home extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h3" component="h1" gutterBottom>
          Hola
        </Typography>
      </div>
    );
  }
}
 
export default Home;