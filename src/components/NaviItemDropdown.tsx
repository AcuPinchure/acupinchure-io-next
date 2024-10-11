"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  ButtonBaseProps,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { CaretDown } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";

interface NaviItemDropdownProps {
  label: string;
  child: { label: string; href: string }[];
  isMobile: boolean;
  buttonSX?: ButtonBaseProps["sx"];
}

const NaviItemDropdown: React.FC<NaviItemDropdownProps> = ({
  label,
  child,
  isMobile,
  buttonSX,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const desktopContent = (
    <>
      <Button
        color="inherit"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={buttonSX}
      >
        {label}
      </Button>
      <Menu
        component="nav"
        anchorEl={anchorEl}
        id="project-menu"
        open={open}
        onClose={() => setAnchorEl(null)}
        onClick={() => setAnchorEl(null)}
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
                right: 40,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {child.map((item) => (
          <MenuItem component={Link} key={item.label} href={item.href}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const mobileContent = (
    <>
      <Accordion elevation={0} sx={{ bgcolor: "primary.main" }}>
        <AccordionSummary expandIcon={<CaretDown />}>{label}</AccordionSummary>
        <AccordionDetails
          sx={{
            pt: 0,
          }}
        >
          <nav>
            {child.map((item) => (
              <MenuItem component={Link} key={item.label} href={item.href}>
                {item.label}
              </MenuItem>
            ))}
          </nav>
        </AccordionDetails>
      </Accordion>
    </>
  );

  return isMobile ? mobileContent : desktopContent;
};

export default NaviItemDropdown;
