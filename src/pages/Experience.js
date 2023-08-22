import React from "react";
// MUI
import { Box, Grid, Typography } from "@mui/material";
// Components
import { Link, useParams } from "react-router-dom";
import experiences from "../data/experiences";

const Experience = () => {
  const { id } = useParams();
  let experience;
  experiences.filter((exp) => {
    if (exp.link === id) {
      experience = exp;
    }
  });
  console.log({ experience });
  return (
    <>
      <Box sx={{ height: "10vh", width: "100%" }}></Box>
      <Box sx={{ minHeight: "90vh", width: "100%" }}>
        <Grid
          container
          sx={{
            padding: { xs: "5.5vh", sm: "3vh 6vh", md: "4vh 9vh" },
            paddingBottom: { xs: "4.5vh", sm: "6vh", md: "9vh" },
          }}
        >
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <img src={experience.image} alt="Logo" style={{ height: "20vh" }} />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                fontWeight: "700",
                fontFamily: "Poppins , sans-serif",
              }}
            >
              {experience.description}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={5}
            md={4}
            sx={{
              marginTop: "20px",
              paddingRight: { xs: "0", sm: "8px" },
            }}
          >
            <Box
              sx={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                marginTop: "20px",
                padding: "5vh",
                borderRadius: "10px",
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", fontFamily: "Poppins , sans-serif" }}
              >
                {experience.client}
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontFamily: "Poppins , sans-serif" }}
              >
                {experience.title}
              </Typography>
              <Typography
                sx={{ fontFamily: "Poppins , sans-serif", paddingTop: "8px" }}
              >
                {experience.period}
              </Typography>
              <Typography
                sx={{ fontFamily: "Poppins , sans-serif", paddingTop: "8px" }}
              >
                Duration: {experience.duration}
              </Typography>
              <Typography
                sx={{ fontFamily: "Poppins , sans-serif", paddingTop: "8px" }}
              >
                Email: {experience.email}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={7}
            md={8}
            sx={{
              marginTop: "20px",
              paddingLeft: { xs: "0", sm: "8px" },
            }}
          >
            <Box
              sx={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                marginTop: "20px",
                padding: "5vh",
                borderRadius: "10px",
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", fontFamily: "Poppins , sans-serif" }}
              >
                Key Aspects
              </Typography>
              <Grid container sx={{ marginTop: "10px" }}>
                {experience.keys.map((key, i) => (
                  <Grid
                    item
                    xs={6}
                    sm={3}
                    md={2}
                    key={i}
                    sx={{ padding: "8px" }}
                  >
                    <Box
                      sx={{
                        borderRadius: "10px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h4">{key.icon}</Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: "bold",
                          fontFamily: "Poppins , sans-serif",
                          textAlign: "center",
                        }}
                      >
                        {key.title}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Experience;
