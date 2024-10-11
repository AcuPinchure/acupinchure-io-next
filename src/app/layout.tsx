import type { Metadata } from "next";
import "./globals.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import TopBar from "@/components/TopBar";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { CssBaseline } from "@mui/material";

export const metadata: Metadata = {
  title: "AcuPinchure",
  description:
    "Discover everything about AcuPinchure in this personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <link
          rel="icon"
          type="image/png"
          href="/icons/favicon-48x48.png"
          sizes="48x48"
        />
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="AcuPinchure" />
        <link rel="manifest" href="/icons/site.webmanifest" />

        <meta name="title" content="AcuPinchure" />
        <meta
          name="description"
          content="I am a full stack developer, illustrator, and anime hobbyist. Discover everything about AcuPinchure in this site."
        />
        <meta
          name="keywords"
          content="acupinchure, portfolio, acupinchure studio, full-stack, lovelive, seiyuu bot, illustrator"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="14 days" />
        <meta name="author" content="AcuPinchure" />
        <style></style>
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <InitColorSchemeScript attribute="class" />
            <TopBar />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
