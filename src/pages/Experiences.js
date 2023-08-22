import React from "react";
// MUI
import { Box, Grid, Typography } from "@mui/material";
// Component
import ExperienceCard from "../components/experienceCard";
// Data
import experiences from "../data/experiences";

const Experiences = () => {
  return (
    <>
      <Box sx={{ height: "17vh", width: "100%" }}></Box>
      <Box sx={{ minHeight: "83vh", width: "100%" }}>
        <Grid
          container
          sx={{
            padding: { xs: "4.5vh", sm: "3vh 6vh", md: "4vh 9vh" },
            paddingBottom: { xs: "4.5vh", sm: "6vh", md: "9vh" },
          }}
        >
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
              Experiences
            </Typography>
          </Grid>
          {experiences.map((project, i) => (
            <Grid item key={i} xs={12} sm={6} md={4} sx={{ padding: "2vh" }}>
              <ExperienceCard project={project} height={"200px"} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Experiences;
