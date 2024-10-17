"use client";

import { Avatar, Popover } from "@mui/material";
import { useState } from "react";

interface ParticipantAvatarProps {
  name: string;
  short: string;
  color: string;
}

const ParticipantAvatar: React.FC<ParticipantAvatarProps> = ({
  name,
  short,
  color,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  function handleClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);

  return (
    <>
      <Avatar
        sx={{
          fontWeight: "bold",
          bgcolor: color,
          cursor: "pointer",
        }}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        {short}
      </Avatar>
      <Popover
        open={open}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        anchorEl={anchorEl}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              padding: 1,
            },
          },
        }}
      >
        {name}
      </Popover>
    </>
  );
};

export default ParticipantAvatar;
