"use client";

import { useColorScheme } from "@mui/material/styles";

import React, { useState } from "react";
import {
  IconButton,
  Popover,
  MenuItem,
  Typography,
  Menu,
  Stack,
  Button,
} from "@mui/material";
import { Sun, Moon } from "@phosphor-icons/react/dist/ssr";

interface ThemeModeSwitcherProps {
  showText?: boolean;
}

const ThemeModeSwitcher: React.FC<ThemeModeSwitcherProps> = ({ showText }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const { mode, systemMode, setMode } = useColorScheme();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleModeChange(mode: "light" | "dark" | "system") {
    setMode(mode);
    handleClose();
  }

  const open = Boolean(anchorEl);
  const id = open ? "dark-mode-popover" : undefined;

  const icon = (systemMode || mode) === "dark" ? <Moon /> : <Sun />;

  return (
    <Stack alignItems={"center"} direction="row" justifyContent={"flex-start"}>
      {showText ? (
        <Button
          startIcon={icon}
          onClick={handleClick}
          sx={{ fontSize: "1rem", fontWeight: 300, color: "text.primary" }}
        >
          Theme Mode
        </Button>
      ) : (
        <IconButton onClick={handleClick} aria-describedby={id} color="inherit">
          {icon}
        </IconButton>
      )}

      <Menu
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 37,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
      >
        <MenuItem onClick={() => handleModeChange("light")}>Light</MenuItem>
        <MenuItem onClick={() => handleModeChange("dark")}>Dark</MenuItem>
        <MenuItem onClick={() => handleModeChange("system")}>System</MenuItem>
      </Menu>
    </Stack>
  );
};

export default ThemeModeSwitcher;
