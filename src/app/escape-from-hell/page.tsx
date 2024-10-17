import Banner from "@/components/Banner";
import ScrollToButton from "@/components/ScrollToButton";
import { Stack, Typography } from "@mui/material";
import { ArrowDown } from "@phosphor-icons/react/dist/ssr";
import ParticipantList from "./ParticipantList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Escape from Hell",
  description: "工管部密室逃脱揪團區",
  robots: "noindex, nofollow",
  authors: [
    {
      name: "AcuPinchure",
    },
  ],
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
    title: "Escape from Hell",
  },
};

const EscapePage: React.FC = () => {
  return (
    <>
      <style>{"header {display: none !important;}"}</style>
      <Banner background="/images/escape.jpg" brightness={0.5}>
        <Stack direction={"column"} alignItems={"center"} spacing={2}>
          <Typography
            variant={"h2"}
            fontWeight={400}
            component="h1"
            textAlign="center"
            color={"staticColor.whiteText"}
          >
            工管部密室逃脱揪團區
          </Typography>
          <Stack
            gap={2}
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              minWidth: {
                xs: undefined,
                sm: "400px",
              },
            }}
          >
            <ScrollToButton
              component="button"
              buttonProps={{
                size: "large",
                sx: {
                  border: "1px solid",
                  borderColor: "staticColor.lightMain",
                  bgcolor: "transparent",
                  color: "staticColor.lightMain",
                  flex: 1,
                },
              }}
              elementId="description"
            >
              這次要玩什麼？
            </ScrollToButton>
            <ScrollToButton
              component="button"
              buttonProps={{
                size: "large",
                endIcon: <ArrowDown />,
                sx: {
                  border: "1px solid",
                  borderColor: "staticColor.lightMain",
                  bgcolor: "transparent",
                  color: "staticColor.lightMain",
                  flex: 1,
                },
              }}
              elementId="participants"
            >
              看看有誰要參加
            </ScrollToButton>
          </Stack>
        </Stack>
      </Banner>
      <ParticipantList />
    </>
  );
};

export default EscapePage;
