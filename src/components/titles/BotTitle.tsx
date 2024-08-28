"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const BotTitle: React.FC = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true);
    }, 500);
  }, []);

  return (
    <Stack direction={"column"} alignItems={"center"}>
      <Box
        position={"relative"}
        height={122}
        width={startAnimation ? 400 : 0}
        sx={{ transition: "all 1s ease" }}
      >
        <Box
          overflow={"hidden"}
          position={"absolute"}
          top={0}
          left={"50%"}
          sx={{ transition: "all 1s ease", transform: `translateX(-50%)` }}
          width={startAnimation ? 400 : 0}
          height={122}
        >
          <Image
            src={"/images/bot/bot_logo.svg"}
            alt={"Lovelive Seiyuu Bot"}
            height={122}
            width={(122 * 224.3) / 68.21}
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        </Box>
        <Image
          src={"/images/bot/bot_L_logo.svg"}
          alt={"Image Bot-Logo"}
          height={90}
          width={(90 * 31.41) / 49.18}
          style={{ position: "absolute", top: 13, left: 0 }}
        />
      </Box>
      <Typography
        variant="h5"
        sx={{
          opacity: startAnimation ? 1 : 0,
          transition: "opacity 1s ease 0.5s",
        }}
        textAlign={"center"}
        color={"staticColor.whiteText"}
      >
        We gather the gems, so you don’t have to dig.
      </Typography>
    </Stack>
  );
};

export default BotTitle;
