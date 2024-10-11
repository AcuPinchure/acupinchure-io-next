"use client";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const CareerTitle: React.FC = () => {
  function scrollToExperience() {
    document
      .getElementById("experience")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Stack direction={"column"} alignItems={"center"}>
      <Typography
        variant={"h2"}
        fontWeight={400}
        color={"staticColor.whiteText"}
        textAlign={"center"}
      >
        Engineering
        <br />
        Smarter, Faster, Better
      </Typography>
      <Stack direction={"column"} alignItems={"center"} spacing={2} mt={2}>
        <Typography
          variant={"body1"}
          fontWeight={"light"}
          color={"staticColor.whiteText"}
          textAlign={"center"}
          maxWidth={"50rem"}
        >
          Crafting tailored solutions that drive efficiency, scalability, and
          performance across full-stack systems—transforming complex challenges
          into optimized outcomes.
        </Typography>
        <Button
          size="large"
          onClick={scrollToExperience}
          sx={{
            border: "1px solid",
            borderColor: "staticColor.lightMain",
            bgcolor: "transparent",
            color: "staticColor.lightMain",
          }}
        >
          View My Work History
        </Button>
      </Stack>
    </Stack>
  );
};

export default CareerTitle;
