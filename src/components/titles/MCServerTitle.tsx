"use client";

import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

const MCServerTitle: React.FC = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true);
    }, 500);
  }, []);

  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      color={"staticColor.whiteText"}
    >
      <Stack direction={"row"} spacing={"0.75rem"}>
        <Typography
          variant="h3"
          textAlign={"right"}
          color="inherit"
          sx={{
            transition: "width 1s ease",
            width: startAnimation ? "15.5rem" : 0,
            overflow: "hidden",
          }}
        >
          AcuPinchure
        </Typography>
        <Typography variant="h3" color="inherit">
          Minecraft
        </Typography>
        <Typography variant="h3" textAlign={"left"} color="inherit">
          Server
        </Typography>
      </Stack>
      <Typography
        variant="h5"
        fontWeight={"light"}
        color="inherit"
        sx={{
          opacity: startAnimation ? 1 : 0,
          transition: "opacity 1s ease 0.5s",
        }}
      >
        Vanilla game experience with stunning landscape
      </Typography>
    </Stack>
  );
};

export default MCServerTitle;
