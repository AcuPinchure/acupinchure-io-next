import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box, Grid2 as Grid } from "@mui/material";

const Section6: React.FC = () => (
  <Box component={"section"} minHeight={"400px"}>
    <Grid container spacing={0} rowSpacing={4} py={8}>
      <Grid
        size={{
          sm: 12,
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
              Purely for friends
            </Typography>
          </Stack>
          <Typography variant="body1" textAlign={"center"} maxWidth={"50rem"}>
            {
              "Our bot is designed solely to benefit fans. You'll never see ads or sponsored posts - just great images."
            }
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  </Box>
);

export default Section6;
