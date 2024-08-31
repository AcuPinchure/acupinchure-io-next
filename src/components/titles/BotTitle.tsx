/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";

const BotTitle: React.FC = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true);
    }, 500);
  }, []);

  return (
    <Stack direction={"column"} alignItems={"center"} spacing={1}>
      <Box
        position={"relative"}
        height={isMobile ? 67.5 : 90}
        width={startAnimation ? (isMobile ? 300 : 400) : 0}
        sx={{ transition: "width 1s ease" }}
      >
        <Box
          overflow={"hidden"}
          position={"absolute"}
          top={0}
          left={"50%"}
          sx={{ transition: "all 1s ease", transform: `translateX(-50%)` }}
          width={startAnimation ? (isMobile ? 300 : 400) : 0}
          height={isMobile ? 67.5 : 90}
        >
          <img
            src={"/images/bot/bot_logo.svg"}
            alt={"Lovelive Seiyuu Bot"}
            height={isMobile ? 67.5 : 90}
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        </Box>
        <img
          src={"/images/bot/bot_L_logo.svg"}
          alt={"Image Bot-Logo"}
          height={isMobile ? 67.5 : 90}
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      </Box>
      <Typography
        variant="h5"
        fontWeight={"light"}
        sx={{
          opacity: startAnimation ? 1 : 0,
          transition: "opacity 1s ease 0.5s",
        }}
        textAlign={"center"}
        color={"staticColor.whiteText"}
      >
        Twitter(X) accounts for
        {isMobile ? <br /> : " "}
        Lovelive Seiyuu images archive
      </Typography>
    </Stack>
  );
};

export default BotTitle;
