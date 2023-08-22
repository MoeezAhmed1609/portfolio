import React from "react";
// MUI
import { Box, Grid, Typography, Tooltip } from "@mui/material";
// // Components
import projects from "../data/projects";
import { Link, useParams } from "react-router-dom";

const Project = () => {
  const { id } = useParams();
  let project;
  projects.filter((p) => {
    if (p._id === id) {
      project = p;
    }
  });
  console.log({ project });
  return (
    <>
      <Box sx={{ height: "15vh", width: "100%" }}></Box>
      <Box sx={{ minHeight: "83vh", width: "100%" }}>
        <Grid
          container
          sx={{
            padding: { xs: "4.5vh", sm: "3vh 6vh", md: "4vh 9vh" },
            paddingBottom: { xs: "4.5vh", sm: "6vh", md: "9vh" },
          }}
        >
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Link
              to={project.link}
              state={{ image: project.image, link: project._id }}
              target={
                ["/", "/confidential"].indexOf(project.link) != -1
                  ? "_self"
                  : "_blank"
              }
            >
              <img src={project?.logo} alt="Logo" style={{ height: "25vh" }} />
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ padding: { xs: "3vh", sm: "4vh", md: "6vh" } }}
          >
            <Typography variant="h6" sx={{fontFamily: "Poppins , sans-serif"}}>{project.description}</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "15px",
              padding: { xs: "0 4.5vh", sm: "0 6vh", md: "0 9vh" },
            }}
          >
            {project.languages.map((lang, i) => (
              <Tooltip title={lang.title} key={i} followCursor>
                <Link to={lang.link} style={{ color: "black" }} target="_blank">
                  <Typography variant="h4">{lang.icon}</Typography>
                </Link>
              </Tooltip>
            ))}
          </Grid>
          {project.snapshots.map((snap, i) => (
            <>
              <Grid
                xs={12}
                sm={6}
                key={i}
                sx={{
                  padding: { md: "25px", xs: "10px" },
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img src={snap.image} alt="home" width={"100%"} />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: "600",
                    fontFamily: "Poppins , sans-serif",
                    paddingTop: "12px",
                  }}
                >
                  {i + 1}. {snap.title}
                </Typography>
              </Grid>
            </>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Project;
