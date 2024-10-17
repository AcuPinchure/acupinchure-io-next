"use client";

import { Button } from "@mui/material";

interface ScrollToButtonProps {
  component: "button" | "a";
  buttonProps?: Omit<React.ComponentProps<typeof Button>, "onClick">;
  anchorStyle?: React.CSSProperties;
  elementId: string;
  children: React.ReactNode;
}

const ScrollToButton: React.FC<ScrollToButtonProps> = ({
  component,
  elementId,
  children,
  buttonProps,
  anchorStyle,
}) => {
  const handleClick = () => {
    const target = document.getElementById(elementId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return component === "button" ? (
    <Button {...buttonProps} onClick={handleClick}>
      {children}
    </Button>
  ) : (
    <a onClick={handleClick} style={anchorStyle}>
      {children}
    </a>
  );
};

export default ScrollToButton;
