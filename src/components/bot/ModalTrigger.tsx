"use client";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type { TransitionProps } from "@mui/material/transitions";
import { Info } from "@phosphor-icons/react/dist/ssr";
import { forwardRef, useState } from "react";

interface ModalTriggerProps {
  trigger: React.ReactNode;
  title?: React.ReactNode;
  content: React.ReactNode;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
        color="info"
        endIcon={<Info />}
        onClick={() => setOpen(true)}
      >
        {trigger}
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        scroll="paper"
        fullScreen={isMobile}
        TransitionComponent={isMobile ? Transition : undefined}
      >
        {title && <DialogTitle>{title}</DialogTitle>}
        {content && <DialogContent>{content}</DialogContent>}
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(false)}
            fullWidth={isMobile}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalTrigger;
