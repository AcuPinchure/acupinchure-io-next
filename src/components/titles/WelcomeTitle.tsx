"use client";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import { useEffect, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

const WelcomeTitle: React.FC = () => {
  const [startAnimation, setStartAnimation] = useState({
    welcome: false,
    subtitle: false,
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setStartAnimation((prev) => ({ ...prev, welcome: true }));
    setTimeout(() => {
      setStartAnimation((prev) => ({ ...prev, subtitle: true }));
    }, 500);
  }, []);

  return (
    <Stack direction={"column"} alignItems={"center"}>
      <Collapse in={startAnimation.welcome} orientation="vertical">
        <Typography
          variant={"h2"}
          fontWeight={400}
          color={"staticColor.whiteText"}
        >
          AcuPinchure
        </Typography>
      </Collapse>
      <Collapse in={startAnimation.subtitle} orientation="vertical">
        <Typography
          variant={"h5"}
          fontWeight={"light"}
          color={"staticColor.whiteText"}
          textAlign={"center"}
        >
          Full-stack
          {isMobile ? <br /> : ", "}Gamer
          {isMobile ? <br /> : ", "}Anime hobbyist
        </Typography>
      </Collapse>
    </Stack>
  );
};

export default WelcomeTitle;
