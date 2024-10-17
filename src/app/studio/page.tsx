import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box, Container, Divider, Grid2 as Grid } from "@mui/material";
import IllustWork from "@/components/studio/IllustWork";
import {
  commissionedIllustrations,
  oldIllustrations,
  selfIllustrations,
} from "@/store/illustrations";
import StudioBanner from "@/components/banners/StudioBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AcuPinchure Studio - AcuPinchure",
  description:
    "Discover the works of AcuPinchure Studio. From self-illustrations to commissioned works, explore the journey of AcuPinchure's artistry.",
  keywords: ["acupinchure", "illustrations", "studio", "love live", "lovelive"],
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
  appleWebApp: {
    title: "AcuPinchure",
  },
};

const StudioPage: React.FC = () => {
  return (
    <Stack direction={"column"}>
      <StudioBanner />
      <Box component={"section"} minHeight={"100vh"}>
        <Container maxWidth={"xl"} id={"my-works"}>
          <Stack
            direction={"column"}
            height={"100%"}
            alignItems={"stretch"}
            justifyContent={"center"}
            color={"text.primary"}
            spacing={12}
            my={6}
          >
            <Typography variant="h3" textAlign={"center"}>
              Recent Works
            </Typography>
            {selfIllustrations.map((illustration, index) => (
              <IllustWork
                key={index}
                src={`/images/studio/works/${illustration.src}.jpg`}
                title={illustration.title}
                date={illustration.date}
                device={illustration.device}
                software={illustration.software}
                aspectRatio={illustration.aspectRatio}
                inverted={index % 2 === 1}
                padding={illustration.padding}
              />
            ))}
          </Stack>
          <Divider />
          <Stack
            direction={"column"}
            height={"100%"}
            alignItems={"stretch"}
            justifyContent={"center"}
            color={"text.primary"}
            spacing={12}
            my={6}
          >
            <Typography variant="h3" textAlign={"center"}>
              Commissioned Works
            </Typography>
            {commissionedIllustrations.map((illustration, index) => (
              <IllustWork
                key={index}
                src={`/images/studio/works/${illustration.src}.jpg`}
                title={illustration.title}
                date={illustration.date}
                device={illustration.device}
                software={illustration.software}
                aspectRatio={illustration.aspectRatio}
                inverted={index % 2 === 1}
                padding={illustration.padding}
              />
            ))}
          </Stack>
          <Divider />
          <Stack
            direction={"column"}
            height={"100%"}
            alignItems={"stretch"}
            justifyContent={"center"}
            color={"text.primary"}
            spacing={12}
            my={6}
          >
            <Typography variant="h3" textAlign={"center"}>
              Early Day Works
            </Typography>
            {oldIllustrations.map((illustration, index) => (
              <IllustWork
                key={index}
                src={`/images/studio/works/${illustration.src}.jpg`}
                title={illustration.title}
                date={illustration.date}
                device={illustration.device}
                software={illustration.software}
                aspectRatio={illustration.aspectRatio}
                inverted={index % 2 === 1}
                padding={illustration.padding}
              />
            ))}
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
};

export default StudioPage;
