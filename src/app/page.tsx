import Stack from "@mui/material/Stack";
import Banner from "@/components/Banner";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  Box,
  Button,
  Grid2 as Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import WelcomeTitle from "@/components/titles/WelcomeTitle";
import ProjectLink from "@/components/titles/ProjectLink";
import { ArrowRight, Info } from "@phosphor-icons/react/dist/ssr";
import ScrollToButton from "@/components/ScrollToButton";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AcuPinchure",
  description:
    "I am a full stack developer, illustrator, and anime hobbyist. Discover everything about AcuPinchure in this site.",
  keywords: [
    "acupinchure",
    "portfolio",
    "acupinchure studio",
    "full-stack",
    "lovelive",
    "seiyuu bot",
    "illustrator",
  ],
  robots: "index, follow",
  authors: [
    {
      name: "AcuPinchure",
    },
  ],
  other: {
    "revisit-after": "14 days",
    "Content-Type": "text/html; charset=utf-8",
  },
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/icons/favicon-48x48.png",
      sizes: "48x48",
    },
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/icons/favicon.svg",
    },
    {
      rel: "shortcut icon",
      url: "/icons/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/icons/apple-touch-icon.png",
    },
  ],
  manifest: "/icons/site.webmanifest",
  appleWebApp: {
    title: "AcuPinchure",
  },
};

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
            mb={-4}
          >
            <Typography variant="h3" textAlign={"center"}>
              About me
            </Typography>
            <Typography variant="body1" textAlign={"center"}>
              I am a full stack engineer from Taiwan. I love to create fun and
              interesting projects. I am also an illustrator and a fan of
              Lovelive Series. I am always looking for new opportunities to
              learn and grow.
            </Typography>
            <Stack
              gap={2}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <ScrollToButton
                component="button"
                elementId="fun-projects"
                buttonProps={{
                  color: "info",
                  endIcon: <Info />,
                }}
              >
                View My Fun Projects
              </ScrollToButton>
              <Button
                LinkComponent={Link}
                href="/career"
                variant="outlined"
                color="info"
                endIcon={<ArrowRight />}
              >
                View My Career
              </Button>
            </Stack>
          </Stack>
          <Stack
            direction={"column"}
            minHeight={"100vh"}
            alignItems={"stretch"}
            justifyContent={"center"}
            color={"text.primary"}
            spacing={4}
            id={"fun-projects"}
            pt={12}
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
