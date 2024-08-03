import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";
const Navebar = () => {
  return (
    <Stack
      direction="row"
      sx={{ gap: { sm: "112px", xs: "40px" }, mt: { sm: "32px", xs: "20px" } }}
      pl="20px"
    >
      <Link>
        <img
          src={Logo}
          alt="logo"
          style={{
            width: "48px",
            height: "48px",
            margin: "0 20px",
          }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="center">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{
            textDecoration: "none",
            color: "#3a1212",
          }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navebar;
