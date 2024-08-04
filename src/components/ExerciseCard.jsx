import React from "react";
import { Link } from "react-router-dom";
import { Stack, Button, Typography } from "@mui/material";
const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercises/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          className="exercise-btn"
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#35FF34",
            fontSize: "14px",
            borderRadius: "20px",
            TextTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          className="exercise-btn"
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#1B89FF",
            fontSize: "14px",
            borderRadius: "20px",
            TextTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="24px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
