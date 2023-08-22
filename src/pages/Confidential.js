import React from "react";
// MUI
import { Box, Typography } from "@mui/material";
// Assets
import confidential from "../assets/confidential-r.png";
// Components
import { Link, useLocation } from "react-router-dom";
import StyledButton from "../components/styledButton";

const Confidential = () => {
  const { state } = useLocation();
  console.log({ state });
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "70vh",
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            flexDirection: "column",
          }}
        >
          {/* <img src={state.image} alt="project" style={{ width: "80%" }} /> */}
          <Typography
            variant="h3"
            sx={{
              textTransform: "uppercase",
              fontWeight: "600",
              fontFamily: "Poppins , sans-serif",
            }}
          >
            This Site is
          </Typography>
          <Box
            sx={{
              height: "60%",
              width: "98%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url(${state?.image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              marginBottom: "20px",
            }}
          >
            <img
              src={confidential}
              alt="confidential"
              style={{ width: "55%" }}
            />
          </Box>
          <Link
            to={`/projects/${state?.link}`}
            style={{
              width: "100%",
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <StyledButton title={"Details"} width={"80%"} />
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Confidential;
