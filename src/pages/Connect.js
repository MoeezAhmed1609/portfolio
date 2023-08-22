import React, { useState } from "react";
// MUI
import { Box, Grid, Tooltip, Typography } from "@mui/material";
// Component
import connections from "../data/connections";
import { Link } from "react-router-dom";
import StyledTextField from "../components/styledTextFeild";
import StyledButton from "../components/styledButton";
import isEmail from "validator/lib/isEmail";
import emailjs from "@emailjs/browser";

const Connect = () => {
  // Send Email
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = () => {
    if (!name || !email || !message) return;
    if (!isEmail(email)) {
      alert("Enter a valid email!");
      return;
    }
    emailjs
      .send(
        "gmail-16092003",
        "template_trs3j6p",
        { name, email, message },
        "d8lM3SCAOtodcPXpw"
      )
      .then(() => alert("Submitted Successfully!"))
      .catch((err) => {
        alert("Submission Failed!");
        console.log(err);
      });
  };
  return (
    <>
      <Box sx={{ height: "12vh", width: "100%" }}></Box>
      <Box sx={{ minHeight: "83vh", width: "100%" }}>
        <Grid
          container
          sx={{
            padding: { xs: "4.5vh", sm: "3vh 6vh", md: "4vh 9vh" },
            paddingBottom: { xs: "4.5vh", sm: "6vh", md: "9vh" },
          }}
        >
          <Grid
            item
            xs={5}
            sx={{
              padding: { xs: "3vh", sm: "4vh", md: "6vh" },
              minHeight: "70vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid container>
              {connections.map((key, i) => (
                <Grid
                  item
                  xs={6}
                  sm={4}
                  key={i}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100px",
                  }}
                >
                  <Link
                    to={key.link}
                    style={{ color: "black", textDecoration: "none" }}
                    target={"_blank"}
                  >
                    <Tooltip title={key.link} followCursor>
                      <Typography variant="h4" sx={{ textAlign: "center" }}>
                        {key.icon}
                      </Typography>
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
                    </Tooltip>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            xs={7}
            sx={{
              padding: { xs: "3vh", sm: "4vh", md: "1vh 6vh" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontFamily: "Poppins , sans-serif",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              Connect With Me
            </Typography>
            <StyledTextField
              title={"Full Name"}
              type={"text"}
              width={{ xs: "94%", sm: "60%" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <StyledTextField
              title={"Email"}
              type={"email"}
              width={{ xs: "94%", sm: "60%" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Enter your message..."
              className="text-area"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <StyledButton
              title={"Send Mail"}
              width={{ xs: "94%", sm: "60%" }}
              onClick={handleSubmit}
              validation={!name || !email || !message}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Connect;
