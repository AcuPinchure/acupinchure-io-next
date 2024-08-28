"use client";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ArrowRight } from "@phosphor-icons/react";
import { useState } from "react";

interface ModalTriggerProps {
  trigger: React.ReactNode;
  title?: React.ReactNode;
  content: React.ReactNode;
}

const ModalTrigger: React.FC<ModalTriggerProps> = ({
  trigger,
  title,
  content,
}) => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Button
        variant="text"
        color="secondary"
        endIcon={<ArrowRight />}
        onClick={() => setOpen(true)}
      >
        {trigger}
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        scroll="paper"
        fullScreen={isMobile}
      >
        {title && <DialogTitle>{title}</DialogTitle>}
        {content && <DialogContent>{content}</DialogContent>}
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalTrigger;
