import React from "react";
// MUI
import { Grid } from "@mui/material";
// Assets
import ahmed from "../assets/ahmed.png";
// Components
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Grid container sx={{ minHeight: "45vh" }}>
      <Grid item xs={12}>
        <Link to={"/"}>
          <img src={ahmed} alt="boomwear" className="sign-logo" />
        </Link>
      </Grid>
    </Grid>
  );
};

export default Footer;
