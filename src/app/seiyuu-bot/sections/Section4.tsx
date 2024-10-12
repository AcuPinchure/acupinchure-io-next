import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box, Grid2 as Grid } from "@mui/material";
import Image from "next/image";

const Section4: React.FC = () => (
  <Box component={"section"}>
    <Grid container spacing={0} rowSpacing={4} py={8}>
      <Grid
        size={{
          xs: 12,
          md: 6,
          lg: 8,
        }}
        display={"flex"}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          direction={"column"}
          height={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          color={"text.primary"}
          spacing={4}
        >
          <Stack direction={"column"} spacing={1}>
            <Typography variant="h3" textAlign={"center"}>
              Sometimes in Motion!!
            </Typography>
          </Stack>
          <Typography variant="body1" textAlign={"center"} maxWidth={"50rem"}>
            Our libraries include not only static images, but also short clips
            as well. See their personalities and emotions shine through these
            dynamic slices of life!
          </Typography>
        </Stack>
      </Grid>
      <Grid
        size={{
          xs: 12,
          md: 6,
          lg: 4,
        }}
        display={"flex"}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          position={"relative"}
          height={"350px"}
          width={"350px"}
          overflow={"hidden"}
          p={2}
          borderRadius={2}
        >
          <Image
            src={"/images/bot/about_images/motion.gif"}
            fill
            alt="GIF Image"
            objectFit={"cover"}
            objectPosition={"center"}
          />
        </Box>
      </Grid>
    </Grid>
  </Box>
);

export default Section4;
