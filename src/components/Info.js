import React from "react";
// MUI
import { Box, Grid, Tooltip, Typography } from "@mui/material";
// Icons
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoMongodb,
  BiLogoHtml5,
  BiLogoNodejs,
  BiLogoBootstrap,
  BiLogoFirebase,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress, SiMui, SiCanva } from "react-icons/si";

const Info = () => {
  const skills = [
    { icon: <BiLogoHtml5 />, title: "HTML 5" },
    { icon: <BiLogoCss3 />, title: "CSS 3" },
    { icon: <BiLogoJavascript />, title: "Javascript" },
    { icon: <BiLogoReact />, title: "React JS" },
    { icon: <BiLogoMongodb />, title: "MongoDB" },
    { icon: <BiLogoNodejs />, title: "Node JS" },
    { icon: <TbBrandNextjs />, title: "Next JS" },
    { icon: <SiExpress />, title: "Express JS" },
    { icon: <SiMui />, title: "Material UI" },
    { icon: <BiLogoBootstrap />, title: "Bootstrap 5" },
    { icon: <BiLogoFirebase />, title: "Firebase" },
    { icon: <SiCanva />, title: "Canva" },
  ];
  const softSkills = [
    "Self Learning",
    "Chat GPT",
    "Github",
    "Freelancing",
    "Graphics Designing",
    "UI / UX",
    "Fluent in English",
    "Project Management",
    "Problem Solving",
    "Time Management",
    "Continuous Integration and Continuous Deployment (CICD)",
  ];
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Grid container sx={{ padding: { xs: "4.5vh", sm: "6vh", md: "9vh" } }}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            sx={{
              textTransform: "uppercase",
              fontWeight: "700",
              textAlign: "center",
              fontFamily: "Poppins , sans-serif",
            }}
          >
            My Skills
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5} sx={{ padding: "3vh 0", textAlign: "left" }}>
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{
                height: "40%",
                width: "100%",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                padding: "4vh",
                borderRadius: "10px",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "600",
                  fontFamily: "Poppins , sans-serif",
                }}
                gutterBottom
              >
                Academic Qualification
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontFamily: "Poppins , sans-serif" }}
              >
                Intermediate
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontFamily: "Poppins , sans-serif" }}
              >
                Pre-Engineering
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontFamily: "Poppins , sans-serif" }}
              >
                2022
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  padding: "4vh",
                  marginTop: "15px",
                  paddingBottom: "5px",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: "600",
                    fontFamily: "Poppins , sans-serif",
                  }}
                  gutterBottom
                >
                  Soft Skills
                </Typography>
                <ul
                  style={{
                    width: "100%",
                    display: "flex",
                    flexWrap: "wrap",
                    padding: "0 10px",
                    marginTop: "0",
                  }}
                >
                  {softSkills.map((skill, i) => {
                    if (i + 1 === softSkills.length) {
                      return (
                        <li
                          key={i}
                          style={{ width: "95%", marginLeft: "10px" }}
                        >
                          <Typography
                            variant="subtitle1"
                            sx={{ fontFamily: "Poppins , sans-serif" }}
                          >
                            {skill}
                          </Typography>
                        </li>
                      );
                    } else {
                      return (
                        <li
                          key={i}
                          style={{ width: "45%", marginLeft: "10px" }}
                        >
                          <Typography
                            variant="subtitle1"
                            sx={{ fontFamily: "Poppins , sans-serif" }}
                          >
                            {skill}
                          </Typography>
                        </li>
                      );
                    }
                  })}
                </ul>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Grid
            container
            sx={{
              padding: { xs: "2vh", sm: "5vh" },
              marginTop: { xs: "10px", sm: "0" },
            }}
          >
            {skills.map((skill, i) => (
              <Grid
                item
                xs={4}
                key={i}
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Tooltip title={skill.title} followCursor>
                  <Typography sx={{ fontSize: "12vh" }}>
                    {skill.icon}
                  </Typography>
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Info;
