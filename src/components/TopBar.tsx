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
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import { List as ListIcon } from "@phosphor-icons/react/dist/ssr";
import NaviItemDropdown from "./NaviItemDropdown";
import { usePathname } from "next/navigation";

const TopBar: React.FC = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const pathname = usePathname();

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
    { label: "Career", href: "/career" },
    {
      label: "Fun Projects",
      child: [
        { label: "Lovelive Seiyuu Bot", href: "/seiyuu-bot" },
        { label: "Minecraft Server", href: "/minecraft-server" },
        { label: "AcuPinchure Studio", href: "/studio" },
      ],
    },
  ];

  const desktopNavi = (
    <nav aria-label="navigation menu" style={{ flex: 1 }}>
      <Stack spacing={2} direction="row" justifyContent={"flex-end"}>
        {naviLinks.map((link) => {
          const activeSX = {
            textDecoration: "underline",
            textUnderlineOffset: "0.3rem",
            textDecorationThickness: "2px",
          };

          if (link.href) {
            return (
              <Button
                color="inherit"
                LinkComponent={Link}
                href={link.href}
                key={link.label}
                sx={
                  (pathname.startsWith(link.href) && link.href !== "/") ||
                  pathname === link.href
                    ? activeSX
                    : undefined
                }
              >
                {link.label}
              </Button>
            );
          } else {
            const children = link.child || [];

            return (
              <NaviItemDropdown
                key={link.label}
                label={link.label}
                child={children}
                isMobile={false}
                buttonSX={
                  children.some((i) => pathname.startsWith(i.href))
                    ? activeSX
                    : undefined
                }
              />
            );
          }
        })}
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
          {naviLinks.map((link) => {
            if (link.href) {
              return (
                <ListItem disableGutters disablePadding key={link.label}>
                  <ListItemButton
                    component={Link}
                    href={link.href}
                    onClick={() => setDrawerOpen(false)}
                  >
                    {link.label}
                  </ListItemButton>
                </ListItem>
              );
            } else {
              return (
                <ListItem disableGutters disablePadding key={link.label}>
                  <NaviItemDropdown
                    key={link.label}
                    label={link.label}
                    child={link.child || []}
                    isMobile={true}
                  />
                </ListItem>
              );
            }
          })}
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
