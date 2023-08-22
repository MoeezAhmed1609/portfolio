import React from "react";
// MUI
import { Box, Grid, Typography } from "@mui/material";
// Components
import ExperienceCard from "./experienceCard";
import StyledButton from "./styledButton";
import { Link } from "react-router-dom";
import experiences from "../data/experiences";

const Experiences = () => {
  return (
    <Box sx={{ minHeight: "100vh", width: "100%" }}>
      <Grid container sx={{ padding: { xs: "4.5vh", sm: "6vh", md: "9vh" } }}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            sx={{
              textTransform: "uppercase",
              fontWeight: "700",
              textAlign: "center",
              fontFamily: "Poppins , sans-serif",
              marginBottom: "15px",
            }}
          >
            My Experiences
          </Typography>
        </Grid>
        {experiences.slice(0, 3).map((project, i) => (
          <Grid item xs={12} sm={6} md={4} sx={{ padding: "2vh" }}>
            <ExperienceCard project={project} height={"200px"} />
          </Grid>
        ))}
        <Grid item xs={12} sx={{ paddingTop: "20px" }}>
          <Link
            to={"/projects"}
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <StyledButton
              title={"View All"}
              width={{ xs: "90vw", sm: "60vw", md: "35vw" }}
            />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Experiences;