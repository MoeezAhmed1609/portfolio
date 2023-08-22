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

const ExperienceCard = ({ project, height }) => {
  return (
    <Card
      sx={{
        width: "100%",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      <CardMedia
        component="img"
        alt={project.title}
        height={height ? height : "100%"}
        sx={{ objectFit: "contain" }}
        image={project.image}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontWeight: "600",
            fontFamily: "Poppins , sans-serif",
          }}
        >
          {project.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "6px",
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontFamily: "Poppins , sans-serif" }}
          >
            {project.period}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontFamily: "Poppins , sans-serif" }}
          >
            Duration: {project.duration}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontFamily: "Poppins , sans-serif", marginBottom: "15px" }}
        >
          Learned Key: {project.key}
        </Typography>
        <Link
          to={`/experiences/${project.link}`}
          style={{ textDecoration: "none" }}
        >
          <StyledButton title={"Details"} size={"small"} />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
