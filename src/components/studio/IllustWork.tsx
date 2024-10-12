"use client";

import {
  Button,
  Grid2 as Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import IllustrationFrame from "./IllustrationFrame";

export interface IllustWorkProps {
  src: string;
  title: string;
  aspectRatio: number;
  date: string;
  padding?: number;
  device?: string;
  software?: string;
  description?: string;
  inverted?: boolean;
  pixivLink?: string;
}

const IllustWork: React.FC<IllustWorkProps> = ({
  src,
  title,
  aspectRatio,
  date,
  padding,
  device,
  software,
  description,
  inverted,
  pixivLink,
}) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const img = (
    <Grid
      size={{
        xs: 12,
        md: 6,
      }}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <IllustrationFrame
        aspectRatio={aspectRatio}
        src={src}
        alt={title}
        padding={isSmallScreen ? undefined : padding}
      />
    </Grid>
  );

  const meta = (
    <Grid
      size={{
        xs: 12,
        md: 6,
      }}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={isMobile || inverted ? "flex-end" : "flex-start"}
      p={4}
    >
      <Typography
        variant="h4"
        mb={2}
        textAlign={isMobile || inverted ? "right" : "left"}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        textAlign={isMobile || inverted ? "right" : "left"}
      >
        {date}
      </Typography>
      {(device || software) && (
        <Typography
          variant="body1"
          textAlign={isMobile || inverted ? "right" : "left"}
        >
          {[software, device].join(" - ")}
        </Typography>
      )}
      {description && (
        <Typography
          variant="body1"
          textAlign={isMobile || inverted ? "right" : "left"}
        >
          {description}
        </Typography>
      )}
      {pixivLink && (
        <Button color="info" href={pixivLink}>
          View on Pixiv
        </Button>
      )}
    </Grid>
  );

  return (
    <Grid container spacing={0} rowGap={4}>
      {!isMobile && inverted ? [meta, img] : [img, meta]}
    </Grid>
  );
};

export default IllustWork;
