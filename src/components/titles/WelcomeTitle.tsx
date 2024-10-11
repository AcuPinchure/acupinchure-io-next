"use client";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";

const WelcomeTitle: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack direction={"column"} alignItems={"center"}>
      <Typography
        variant={"h2"}
        fontWeight={400}
        color={"staticColor.whiteText"}
      >
        AcuPinchure
      </Typography>
      <Typography
        variant={"h5"}
        fontWeight={"light"}
        color={"staticColor.whiteText"}
        textAlign={"center"}
      >
        Full-stack
        {isMobile ? <br /> : ", "}Illustrator
        {isMobile ? <br /> : ", "}Anime hobbyist
      </Typography>
    </Stack>
  );
};

export default WelcomeTitle;
