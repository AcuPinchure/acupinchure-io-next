"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import Vara from "vara";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Banner from "@/components/Banner";

const StudioBanner: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true);
    }, 500);
  }, []);

  useEffect(() => {
    if (
      containerRef?.current?.childNodes &&
      containerRef.current.childNodes.length > 0
    ) {
      return;
    }
    new Vara("#vara-container", "/vara/Parisienne.json", [
      {
        text: "AcuPinchure Studio",
        fontSize: 36,
        strokeWidth: 1.5,
        color: theme.palette.staticColor.whiteText,
        duration: 1500,
        textAlign: "center",
      },
    ]);
  }, []);

  return (
    <Banner
      background={"/images/studio_banner.jpg"}
      brightness={0.7}
      backgroundPosition="80% 50%"
      onLoad={() => setStartAnimation(true)}
    >
      <Stack direction={"column"} alignItems={"center"}>
        <Stack direction={"column"} alignItems={"center"}>
          <Box
            component={"div"}
            id="vara-container"
            width={isMobile ? 320 : 580}
            ref={containerRef}
            aria-label="AcuPinchure Studio"
            role="heading"
            aria-level={1}
          ></Box>
          <Typography
            variant="h5"
            fontWeight={"light"}
            sx={{
              opacity: startAnimation ? 1 : 0,
              transition: "opacity 1s ease 1.2s",
            }}
            color={"staticColor.whiteText"}
            textAlign={"center"}
          >
            My illustration playground
          </Typography>
        </Stack>
      </Stack>
    </Banner>
  );
};

export default StudioBanner;
