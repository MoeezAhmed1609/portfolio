import React from "react";
// MUI
import { Box, Grid, Typography } from "@mui/material";
// Components
import StyledButton from "./styledButton";
import { Link } from "react-router-dom";
// Icons
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";

const Goals = () => {
  const goals = [
    {
      icon: <CheckBoxOutlinedIcon sx={{ fontSize: "50px" }} />,
      title: "MERN Stack Developer",
    },
    {
      icon: <CheckBoxOutlineBlankOutlinedIcon sx={{ fontSize: "50px" }} />,
      title: "Bachelors in Computer Science",
    },
    {
      icon: <CheckBoxOutlineBlankOutlinedIcon sx={{ fontSize: "50px" }} />,
      title: "WEB 3.0 Developer",
    },
    {
      icon: <CheckBoxOutlineBlankOutlinedIcon sx={{ fontSize: "50px" }} />,
      title: "Blockchain Developer",
    },
  ];
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
            Academic Goals
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            padding: "2vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {goals.map((goal, i) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                height: "18vh",
                width: { xs: "96vw", sm: "60vw", md: "30vw" },
              }}
              key={i}
            >
              {goal.icon}
              <Typography variant="h5" sx={{ paddingLeft: "2vw" }}>
                {goal.title}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Goals;
