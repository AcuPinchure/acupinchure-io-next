import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box, Button, Container, Grid2 as Grid } from "@mui/material";

const Section4: React.FC = () => (
  <Box component={"section"} p={4}>
    <Grid container spacing={0} rowSpacing={4} py={8}>
      <Grid
        size={{
          sm: 12,
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
          sm: 12,
          md: 6,
          lg: 4,
        }}
        display={"flex"}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box bgcolor={"lightgray"} width={"80%"} height={300} />
      </Grid>
    </Grid>
  </Box>
);

export default Section4;
