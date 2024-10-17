import { Box, Stack } from "@mui/material";
import Image from "next/image";

interface IllustrationFrameProps {
  src: string;
  aspectRatio: number;
  alt: string;
  padding?: number;
}

const IllustrationFrame: React.FC<IllustrationFrameProps> = ({
  src,
  alt,
  aspectRatio,
  padding = 16,
}) => {
  return (
    <Box
      maxWidth={`calc(100% - ${padding * 2}px - 16px)`}
      sx={{
        width: {
          xs:
            aspectRatio > 1
              ? `calc(100% - ${16 * 2}px - 16px)`
              : `calc(70vh * ${aspectRatio})`,
          sm:
            aspectRatio > 1
              ? `calc(100% - ${padding * 2}px - 16px)`
              : `calc(70vh * ${aspectRatio})`,
        },
        maxWidth: {
          xs: `calc(100% - ${16 * 2}px - 16px)`,
          sm: `calc(100% - ${padding * 2}px - 16px)`,
        },
        backgroundColor: "#ddc",
        border: "solid 16px",
        borderBottomColor: "#9b733f",
        borderLeftColor: "#8E6127",
        borderRightColor: "#8E6127",
        borderTopColor: "#82500f",
        borderRadius: "2px",
        boxShadow:
          "0 0 5px 0 rgba(0,0,0,0.25) inset, 0 5px 10px 5px rgba(0,0,0,0.25)",
        boxSizing: "border-box",
        display: "inline-block",
        padding: {
          xs: "16px",
          sm: `${padding}px`,
        },
        margin: "16px",
        position: "relative",
        textAlign: "center",
        "&:before": {
          borderRadius: "2px",
          bottom: "-8px",
          boxShadow: "0 2px 5px 0 rgba(0,0,0,0.25) inset",
          content: '""',
          left: "-8px",
          position: "absolute",
          right: "-8px",
          top: "-8px",
        },
        "&:after": {
          borderRadius: "2px",
          bottom: "-10px",
          boxShadow: "0 2px 5px 0 rgba(0,0,0,0.25)",
          content: '""',
          left: "-10px",
          position: "absolute",
          right: "-10px",
          top: "-10px",
        },
      }}
    >
      <Box position={"relative"} sx={{ aspectRatio: aspectRatio }}>
        <Image
          fill
          src={src}
          alt={alt}
          style={{
            border: "solid 2px",
            borderBottomColor: "#ffe",
            borderLeftColor: "#eed",
            borderRightColor: "#eed",
            borderTopColor: "#ccb",
          }}
        />
      </Box>
    </Box>
  );
};

export default IllustrationFrame;
