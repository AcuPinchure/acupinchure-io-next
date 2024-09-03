"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import ThemeModeSwitcher from "./ThemeModeSwitcher";
import MainLogoIcon from "./icons/MainLogoIcon";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  SwipeableDrawer,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { List as ListIcon } from "@phosphor-icons/react/dist/ssr";

const TopBar: React.FC = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width:700px)");

  function handleScroll() {
    if (window.scrollY > 10) {
      setIsTransparent(false);
    } else {
      setIsTransparent(true);
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const naviLinks = [
    { label: "Home", href: "/" },
    { label: "Seiyuu Bot", href: "/seiyuu-bot" },
    { label: "Minecraft Server", href: "/minecraft-server" },
    { label: "AcuPinchure Studio", href: "/studio" },
  ];

  const desktopNavi = (
    <nav aria-label="navigation menu" style={{ flex: 1 }}>
      <Stack spacing={2} direction="row" justifyContent={"flex-end"}>
        {naviLinks.map((link) => (
          <Button
            color="inherit"
            component={Link}
            href={link.href}
            key={link.label}
          >
            {link.label}
          </Button>
        ))}
        <ThemeModeSwitcher />
      </Stack>
    </nav>
  );

  const mobileNavi = (
    <SwipeableDrawer
      anchor="right"
      open={drawerOpen}
      onOpen={() => setDrawerOpen(true)}
      onClose={() => setDrawerOpen(false)}
      PaperProps={{
        sx: { bgcolor: "primary.main", color: "primary.contrastText" },
      }}
    >
      <nav aria-label="navigation menu">
        <List>
          {naviLinks.map((link) => (
            <ListItem disableGutters disablePadding key={link.label}>
              <ListItemButton
                component={Link}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
              >
                {link.label}
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disableGutters disablePadding sx={{ px: 1 }}>
            <ThemeModeSwitcher showText />
          </ListItem>
        </List>
      </nav>
    </SwipeableDrawer>
  );

  return (
    <AppBar
      position="fixed"
      color={isTransparent ? "transparent" : "primary"}
      sx={{ transition: "background 0.5s ease" }}
      elevation={isTransparent ? 0 : 3}
      enableColorOnDark
    >
      <Toolbar
        sx={{
          color: isTransparent
            ? "staticColor.whiteText"
            : "primary.contrastText",
        }}
      >
        {isMobile && <Box sx={{ flex: 1 }} />}
        <IconButton
          aria-label="LOGO"
          sx={{ padding: 0 }}
          color="inherit"
          href="/"
        >
          <MainLogoIcon sx={{ fontSize: "3.5rem", color: "inherit" }} />
        </IconButton>
        {isMobile ? (
          <Stack
            spacing={2}
            direction="row"
            justifyContent={"flex-end"}
            flex={1}
          >
            <IconButton onClick={() => setDrawerOpen(true)} color="inherit">
              <ListIcon />
            </IconButton>
          </Stack>
        ) : (
          desktopNavi
        )}
      </Toolbar>
      {isMobile && mobileNavi}
    </AppBar>
  );
};

export default TopBar;
