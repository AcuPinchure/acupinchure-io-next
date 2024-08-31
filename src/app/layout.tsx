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
          type="image/svg"
          href="/images/acupinchure_v2.svg"
          sizes="any"
        />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <InitColorSchemeScript attribute="class" />
            <TopBar />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
