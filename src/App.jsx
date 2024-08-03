import React from "react";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import "./App.css";
const App = () => {
  return (
    <Box width={{ xl: "1488px", xs: "100%" }} margin="auto" right={0}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
