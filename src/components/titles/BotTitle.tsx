"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Button, useMediaQuery, useTheme } from "@mui/material";
import ScrollToButton from "../ScrollToButton";

const BotTitle: React.FC = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  function handleLoad() {
    setStartAnimation(true);
  }

  useEffect(() => {
    setTimeout(() => {
      handleLoad();
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
          <Image
            src={"/images/bot/bot_logo.svg"}
            alt={"Lovelive Seiyuu Bot"}
            height={isMobile ? 67.5 : 90}
            width={((isMobile ? 67.5 : 90) / 5492) * 23201}
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        </Box>
        <Image
          src={"/images/bot/bot_L_logo.svg"}
          alt={"Image Bot-Logo"}
          height={isMobile ? 67.5 : 90}
          width={((isMobile ? 67.5 : 90) / 5492) * 3884}
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      </Box>
      <Stack
        direction={"column"}
        alignItems={"center"}
        spacing={2}
        sx={{
          opacity: startAnimation ? 1 : 0,
          transition: "opacity 1s ease 0.5s",
        }}
      >
        <Typography
          variant="h5"
          fontWeight={"light"}
          textAlign={"center"}
          color={"staticColor.whiteText"}
        >
          Twitter accounts for
          {isMobile ? <br /> : " "}
          Lovelive Seiyuu images archive
        </Typography>
        <ScrollToButton
          component="button"
          elementId="page-foot"
          buttonProps={{
            size: "large",
            variant: "contained",
            sx: {
              backgroundColor: "staticColor.lightMain",
              color: "rgba(0,0,0,0.87)",
            },
          }}
        >
          View on Twitter
        </ScrollToButton>
      </Stack>
    </Stack>
  );
};

export default BotTitle;
