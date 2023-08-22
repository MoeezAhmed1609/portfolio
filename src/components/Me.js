import React from "react";
// MUI
import { Grid, Box, Tooltip, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
// Assets
import face from "../assets/face.png";
import name from "../assets/title.png";
// Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Me = () => {
  const links = [
    {
      icon: <GitHubIcon sx={{ fontSize: "5vh" }} />,
      title: "Github",
      link: "https://github.com/MoeezAhmed1609",
    },
    {
      icon: <LinkedInIcon sx={{ fontSize: "5vh" }} />,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/moiz-ahmed-aa2505194/",
    },
    {
      icon: <WhatsAppIcon sx={{ fontSize: "5vh" }} />,
      title: "WhatsApp",
      link: "https://wa.me/923113868525",
    },
  ];
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
        {links.map((link, i) => (
          <Link to={link.link} key={i} target="_blank">
            <Tooltip title={link.title}>
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
