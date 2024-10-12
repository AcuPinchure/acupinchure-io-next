import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box, Grid2 as Grid } from "@mui/material";
import Image from "next/image";

const Section2: React.FC = () => (
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
              Stay up-to-date
            </Typography>
            <Typography variant="h4" fontWeight={300} textAlign={"center"}>
              while
            </Typography>
            <Typography variant="h3" textAlign={"center"}>
              Keeping the old
            </Typography>
          </Stack>
          <Typography variant="body1" textAlign={"center"} maxWidth={"50rem"}>
            While we continuously update with new images, older gems still
            remain. You always have chances to rediscover those gorgeous moments
            years later.
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
            src={"/images/bot/about_images/collage_s.jpg"}
            fill
            alt="Image Collage"
            objectFit={"cover"}
            objectPosition={"center"}
          />
        </Box>
      </Grid>
    </Grid>
  </Box>
);

export default Section2;
