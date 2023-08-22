import React from "react";
// MUI
import { Box, Grid, Typography } from "@mui/material";
// Components
import projects from "../data/projects";
import ProjectCard from "../components/projectCard";

const Projects = () => {
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
              Projects
            </Typography>
          </Grid>
          {projects.map((project, i) => (
            <Grid item xs={12} sm={6} md={4} sx={{ padding: "2vh" }}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Projects;
