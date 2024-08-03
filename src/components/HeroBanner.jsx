import React from "react";
import Banner from "../assets/images/banner.png";
import { Box, Button, Stack, Typography } from "@mui/material";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
        mr: 0,
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#ff2625" fontWeight="600" fontSize="26px">
        fitness club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> And Repeat{" "}
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Cheeck out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        color="success"
        href="#exercises"
        sx={{ p: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        fontSize="200px"
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", sm: "none" },
        }}
      >
        Exercise
      </Typography>
      <img src={Banner} alt="banner image" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
