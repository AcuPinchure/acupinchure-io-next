import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box, Grid2 as Grid } from "@mui/material";
import ModalTrigger from "@/components/bot/ModalTrigger";
import Image from "next/image";
import ScrollToButton from "@/components/ScrollToButton";

const Section1: React.FC = () => {
  return (
    <Box component={"section"}>
      <Grid container spacing={0} rowSpacing={4} py={8}>
        <Grid
          size={{
            xs: 12,
            md: 6,
            lg: 4,
          }}
          display={"flex"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            position={"relative"}
            height={"350px"}
            width={"250px"}
            overflow={"hidden"}
            p={2}
            borderRadius={2}
          >
            <Image
              src={"/images/bot/about_images/tweet_demo.jpg"}
              fill
              alt="Twitter Notification"
              objectFit={"cover"}
              objectPosition={"center"}
            />
          </Box>
        </Grid>
        <Grid
          size={{
            xs: 12,
            md: 6,
            lg: 8,
          }}
          display={"flex"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack
            direction={"column"}
            height={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            color={"text.primary"}
            spacing={4}
          >
            <Typography variant="h3" textAlign={"center"}>
              Discover Random Surprise
            </Typography>
            <Typography variant="body1" textAlign={"center"} maxWidth={"50rem"}>
              {`Lovelive Seiyuu Bot is `}
              <ScrollToButton
                component="a"
                elementId="page-foot"
                anchorStyle={{
                  cursor: "pointer",
                  color: "var(--mui-palette-info-main)",
                  fontWeight: "bold",
                }}
              >
                a series of bot accounts
              </ScrollToButton>
              {` randomly picks Lovelive seiyuu images and posts them on
                  twitter. You'll never miss that perfect profile pic, moments
                  or meme!`}
            </Typography>
            <ModalTrigger
              trigger={"Learn more about how we collect images"}
              title={"How we collect images ?"}
              content={
                <>
                  <Typography variant="body1">
                    All images and clips are collected from the following
                    source.
                    <ul>
                      <li>
                        Social media such as Twitter, Instagram, YouTube, etc.
                      </li>
                      <li>News websites</li>
                      <li>Official websites</li>
                      <li>Other public source</li>
                    </ul>
                  </Typography>
                  <Typography variant="body1">
                    Media from the following source will not be included.
                    <ul>
                      <li>Fan clubs</li>
                      <li>Magazine or photobook scans</li>
                      <li>Paid streaming service or Blu-ray Disc</li>
                      <li>Other paid source</li>
                      <li>Anything marked as redistribution prohibited</li>
                    </ul>
                  </Typography>
                </>
              }
            />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section1;
