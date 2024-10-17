import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import MCBanner from "@/components/banners/MCBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minecraft Server - AcuPinchure",
  description:
    "Join the AcuPinchure Minecraft server! We accept both Java and Bedrock versions.",
  keywords: ["acupinchure", "minecraft", "minecraft server", "whitelist"],
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

const MinecraftServerPage: React.FC = () => {
  return (
    <Stack direction={"column"}>
      <MCBanner />
      <Box component={"section"}>
        <Container maxWidth={"xl"}>
          <Stack
            direction={"column"}
            minHeight={"100vh"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"text.primary"}
            spacing={4}
          >
            <Typography variant="h3" textAlign={"center"}>
              Server IP
            </Typography>
            <Box
              borderColor={"primary.contrastText"}
              border={"1px solid"}
              borderRadius={2}
              bgcolor={"primary.light"}
              py={2}
              px={4}
            >
              <Typography variant="body1" textAlign={"center"}>
                minecraft.acupinchure.com
              </Typography>
            </Box>
            <Typography variant="body1" textAlign={"center"} lineHeight={2}>
              - Whitelist invitation required
              <br />- Accepted both Java and Bedrock (via Geyser) version
              <br />
              * Java 1.20.6 or later
              <br />* Bedrock 1.20.81 or later
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
};

export default MinecraftServerPage;
