import React from "react";
// MUI
import { Grid, Box, Tooltip, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
// Assets
import face from "../assets/face.png";
import name from "../assets/title.png";
// Component
import connections from "../data/connections";

const Me = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          backgroundImage: `url(${face})`,
          backgroundSize: { xs: "76vh", sm: "128vh" },
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundPosition: "bottom",
        }}
      >
        <Box
          sx={{
            height: "100vh",
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={name} alt="Moeez Ahmed" style={{ height: "150px" }} />
        </Box>
        <Box
          sx={{
            height: "100vh",
            display: { xs: "flex", sm: "none", md: "none" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={name}
            alt="Moeez Ahmed"
            style={{ height: "70px", marginTop: "-30%" }}
          />
        </Box>
        <Box
          sx={{
            height: "100vh",
            display: { xs: "none", sm: "flex", md: "none" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={name} alt="Moeez Ahmed" style={{ height: "110px" }} />
        </Box>
      </Grid>
      <Grid
        item
        xs={2}
        sx={{
          height: "30vh",
          position: "absolute",
          top: { xs: "calc(50% + 10vh)", sm: "calc(50% - 15vh)" },
          left: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {connections.slice(0, 4).map((link, i) => (
          <Link to={link.link} key={i} target="_blank">
            <Tooltip title={link.title} placement="right">
              <IconButton size={"large"} sx={{ color: "black" }}>
                {link.icon}
              </IconButton>
            </Tooltip>
          </Link>
        ))}
      </Grid>
    </Grid>
  );
};

export default Me;
