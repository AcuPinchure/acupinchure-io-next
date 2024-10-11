"use client";

import Stack from "@mui/material/Stack";
import Banner from "@/components/Banner";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box, Grid2 as Grid, useMediaQuery, useTheme } from "@mui/material";
import WelcomeTitle from "@/components/titles/WelcomeTitle";
import ProjectLink from "@/components/titles/ProjectLink";

const HomePage: React.FC = () => {
  const links = [
    {
      title: "Lovelive Seiyuu Bot",
      description:
        "Series of Twitter(X) bot accounts posting Lovelive Seiyuu images",
      href: "/seiyuu-bot",
      logoURL: "/images/bot/bot_L_logo.svg",
      logoPadding: 40,
    },
    {
      title: "Minecraft Server",
      description: "Vanilla game experience with stunning landscape",
      href: "/minecraft-server",
      logoURL: "/images/minecraft_logo.svg",
      logoPadding: 40,
    },
    {
      title: "AcuPinchure Studio",
      description: "Illustration for favorite characters and original works",
      href: "/studio",
      logoURL: "/images/studio_logo.png",
    },
  ];

  return (
    <Stack direction={"column"}>
      <Banner background={"/images/home_banner.jpg"} brightness={0.5}>
        <WelcomeTitle />
      </Banner>
      <Box component={"section"} p={2}>
        <Container maxWidth={"xl"}>
          <Stack
            direction={"column"}
            minHeight={"100vh"}
            alignItems={"stretch"}
            justifyContent={"center"}
            color={"text.primary"}
            spacing={4}
          >
            <Typography variant="h3" textAlign={"center"}>
              About me
            </Typography>
            <Typography variant="body1" textAlign={"center"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              quos in eos, error libero cupiditate accusantium, odio repudiandae
              doloribus quam modi sed doloremque recusandae repellat saepe vitae
              quis distinctio atque.
            </Typography>
          </Stack>
          <Stack
            direction={"column"}
            minHeight={"100vh"}
            alignItems={"stretch"}
            justifyContent={"center"}
            color={"text.primary"}
            spacing={4}
          >
            <Typography variant="h3" textAlign={"center"}>
              Some Fun Projects
            </Typography>
            <Grid
              container
              spacing={0}
              rowGap={4}
              justifyContent={"center"}
              columns={12}
            >
              {links.map((link) => (
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
                  key={link.title}
                >
                  <ProjectLink {...link} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
};

export default HomePage;
