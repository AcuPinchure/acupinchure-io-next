"use client";

import Stack from "@mui/material/Stack";
import Banner from "@/components/Banner";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box, Grid2 as Grid, useMediaQuery, useTheme } from "@mui/material";
import BotLink from "@/components/titles/BotLink";
import MCServerLink from "@/components/titles/MCServerLink";
import StudioLink from "@/components/titles/StudioLink";
import WelcomeTitle from "@/components/titles/WelcomeTitle";

const HomePage: React.FC = () => {
  return (
    <Stack direction={"column"}>
      <Banner
        background={"/images/home_banner.jpg"}
        backgroundPosition="60% 50%"
      >
        <WelcomeTitle />
      </Banner>
      <Container maxWidth={"xl"}>
        <Box component={"section"} p={4}>
          <Grid container spacing={0} rowSpacing={4}>
            <Grid
              size={{
                sm: 12,
                md: 6,
                lg: 4,
              }}
              display={"flex"}
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box bgcolor={"lightgray"} width={"80%"} height={300} />
            </Grid>
            <Grid
              size={{
                sm: 12,
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
                  Who is AcuPinchure ?
                </Typography>
                <Typography
                  variant="body1"
                  textAlign={"center"}
                  maxWidth={"50rem"}
                >
                  I am a full-stack developer and amateur illustrator. I am
                  passionate about creating and sharing my works with the world.
                  I am also a fan of anime and seiyuu events.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Box component={"section"} p={4} minHeight={"100vh"}>
          <Stack
            direction={"column"}
            height={"100%"}
            alignItems={"stretch"}
            justifyContent={"center"}
            color={"text.primary"}
            spacing={6}
          >
            <Typography variant="h3" textAlign={"center"}>
              Explore My Projects
            </Typography>
            <Grid container spacing={0} rowGap={4}>
              <Grid
                size={{
                  sm: 12,
                  md: 6,
                  lg: 4,
                }}
              >
                <BotLink />
              </Grid>
              <Grid
                size={{
                  sm: 12,
                  md: 6,
                  lg: 4,
                }}
              >
                <MCServerLink />
              </Grid>
              <Grid
                size={{
                  sm: 12,
                  md: 6,
                  lg: 4,
                }}
              >
                <StudioLink />
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Container>
    </Stack>
  );
};

export default HomePage;
