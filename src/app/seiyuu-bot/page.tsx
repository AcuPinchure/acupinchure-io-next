import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";
import PageFoot from "./sections/PageFoot";
import BotBanner from "@/components/banners/BotBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lovelive Seiyuu Bot - AcuPinchure",
  description:
    "Lovelive Seiyuu Bot is a series of twitter bot accounts that randomly picks Lovelive seiyuu images and posts them.",
  keywords: [
    "acupinchure",
    "lovelive",
    "lovelive seiyuu",
    "lovelive seiyuu bot",
    "twitter bot",
    "lovelive seiyuu images",
    "seiyuu",
    "seiyuu bot",
    "meme",
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
      url: "/icons/bot/favicon-48x48.png",
      sizes: "48x48",
    },
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/icons/bot/favicon.svg",
    },
    {
      rel: "shortcut icon",
      url: "/icons/bot/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/icons/bot/apple-touch-icon.png",
    },
  ],
  appleWebApp: {
    title: "AcuPinchure",
  },
};

const SeiyuuBotPage: React.FC = () => {
  return (
    <Stack direction={"column"}>
      <BotBanner />
      <Container maxWidth={"xl"}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </Container>
      <PageFoot />
    </Stack>
  );
};

export default SeiyuuBotPage;
