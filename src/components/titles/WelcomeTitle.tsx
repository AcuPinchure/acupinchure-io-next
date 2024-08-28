"use client";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import { useEffect, useState } from "react";

const WelcomeTitle: React.FC = () => {
  const [startAnimation, setStartAnimation] = useState({
    welcome: false,
    subtitle: false,
  });

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
          Welcome
        </Typography>
      </Collapse>
      <Collapse in={startAnimation.subtitle} orientation="vertical">
        <Typography
          variant={"h5"}
          fontWeight={300}
          color={"staticColor.whiteText"}
        >
          A place for all things AcuPinchure
        </Typography>
      </Collapse>
    </Stack>
  );
};

export default WelcomeTitle;
