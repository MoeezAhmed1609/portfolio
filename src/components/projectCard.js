import React from "react";
// MUI
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  Box,
  Tooltip,
} from "@mui/material";
// Components
import StyledButton from "./styledButton";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <Card
      sx={{
        width: "100%",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      <Tooltip title={project.link} followCursor>
        <Link
          to={project.link}
          state={{ image: project.image, link: project._id }}
          target={
            ["/", "/confidential"].indexOf(project.link) != -1
              ? "_self"
              : "_blank"
          }
        >
          <CardMedia
            component="img"
            alt={project.title}
            sx={{ objectFit: "contain" }}
            image={project.image}
          />
        </Link>
      </Tooltip>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "600", fontFamily: "Poppins , sans-serif" }}
        >
          {project.title}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          {project.languages.map((lang, i) => (
            <Tooltip title={lang.title} key={i} followCursor>
              <Link to={lang.link} style={{ color: "black" }} target="_blank">
                <Typography variant="h6">{lang.icon}</Typography>
              </Link>
            </Tooltip>
          ))}
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontFamily: "Poppins , sans-serif",
            marginBottom: "8px",
            height: "18vh",
          }}
        >
          {project.description}
        </Typography>
        <Link
          to={project.link === "/" ? project.link : `/projects/${project?._id}`}
          style={{ textDecoration: "none" }}
        >
          <StyledButton title={"Details"} size={"small"} />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
