import React from "react";
// MUI
import { Grid, Box, Tooltip, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// Assets
// import face from "../assets/face.png";
import name from "../assets/title.png";
// Component
import connections from "../data/connections";
import StyledButton from "./styledButton";
import { GrDocumentPdf } from "react-icons/gr";
import resume from "../assets/MyResume.pdf";

const Me = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          // backgroundImage: `url(${face})`,
          // backgroundSize: { xs: "76vh", sm: "128vh" },
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "bottom",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            height: "100vh",
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src={name} alt="Moeez Ahmed" style={{ height: "150px" }} />
          <a
            href={resume}
            download="MoeezAhmedResume"
            target="_blank"
            style={{ textDecoration: "none", color: "black" }}
          >
            <StyledButton
              title={
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <GrDocumentPdf
                    style={{ fontSize: "24px", paddingRight: "8px" }}
                  />{" "}
                  Download Resume
                </Typography>
              }
              mode={"light"}
            />
          </a>
        </Box>
        <Box
          sx={{
            height: "100vh",
            display: { xs: "flex", sm: "none", md: "none" },
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={name}
            alt="Moeez Ahmed"
            style={{ height: "70px", marginTop: "-30%" }}
          />
          <a
            href={resume}
            download="MoeezAhmedResume"
            target="_blank"
            style={{ textDecoration: "none", color: "black" }}
          >
            <StyledButton
              title={
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <GrDocumentPdf
                    style={{ fontSize: "24px", paddingRight: "8px" }}
                  />{" "}
                  Download Resume
                </Typography>
              }
              mode={"light"}
            />
          </a>
        </Box>
        <Box
          sx={{
            height: "100vh",
            display: { xs: "none", sm: "flex", md: "none" },
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src={name} alt="Moeez Ahmed" style={{ height: "110px" }} />
          <a
            href={resume}
            download="MoeezAhmedResume"
            target="_blank"
            style={{ textDecoration: "none", color: "black" }}
          >
            <StyledButton
              title={
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <GrDocumentPdf
                    style={{ fontSize: "24px", paddingRight: "8px" }}
                  />{" "}
                  Download Resume
                </Typography>
              }
              mode={"light"}
            />
          </a>
        </Box>
      </Grid>
      <Grid
        item
        xs={2}
        sx={{
          height: "30vh",
          position: "absolute",
          top: { xs: "calc(50% + 2.5vh)", sm: "calc(50% - 15vh)" },
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
