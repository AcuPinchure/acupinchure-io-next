"use client";

import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
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
      spacing={1}
    >
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={isMobile ? 0 : "0.75rem"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography
          variant="h3"
          textAlign={isMobile ? "center" : "right"}
          color="inherit"
          sx={
            isMobile
              ? {
                  transition: "height 1s ease",
                  height: startAnimation ? "3rem" : 0,
                  overflow: "hidden",
                }
              : {
                  transition: "width 1s ease",
                  width: startAnimation ? "15.5rem" : 0,
                  overflow: "hidden",
                }
          }
        >
          AcuPinchure
        </Typography>
        <Image
          src="/images/minecraft_logo.svg"
          alt="Minecraft Logo"
          height={40}
          width={40}
        />
        <Typography
          variant="h3"
          color="inherit"
          textAlign={isMobile ? "center" : "left"}
          sx={
            isMobile
              ? {
                  transition: "height 1s ease",
                  height: startAnimation ? "3rem" : 0,
                  overflow: "hidden",
                }
              : {
                  transition: "width 1s ease",
                  width: startAnimation ? "9rem" : 0,
                  overflow: "hidden",
                }
          }
        >
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
        Vanilla Minecraft experience
        {isMobile ? <br /> : " "}
        with stunning landscape
      </Typography>
    </Stack>
  );
};

export default MCServerTitle;
