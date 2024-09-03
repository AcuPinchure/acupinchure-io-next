import Stack from "@mui/material/Stack";
import Banner from "@/components/Banner";
import Typography from "@mui/material/Typography";
import StudioTitle from "@/components/titles/StudioTitle";
import { Box, Container, Grid2 as Grid } from "@mui/material";

const StudioPage: React.FC = () => {
  return (
    <Stack direction={"column"}>
      <Banner
        background={"/images/studio_banner.jpg"}
        brightness={0.7}
        backgroundPosition="80% 50%"
      >
        <Stack direction={"column"} alignItems={"center"}>
          <StudioTitle />
        </Stack>
      </Banner>
      <Box component={"section"} p={4} minHeight={"100vh"}>
        <Container maxWidth={"xl"}>
          <Stack
            direction={"column"}
            height={"100%"}
            alignItems={"stretch"}
            justifyContent={"center"}
            color={"text.primary"}
            spacing={6}
          >
            <Typography variant="h3" textAlign={"center"}>
              My Works
            </Typography>
            <Grid container spacing={0} rowGap={4}>
              <Grid
                size={{
                  sm: 12,
                  md: 6,
                  lg: 4,
                }}
              >
                <Box
                  width={300}
                  height={300}
                  bgcolor={"lightgray"}
                  mx={"auto"}
                />
              </Grid>
              <Grid
                size={{
                  sm: 12,
                  md: 6,
                  lg: 4,
                }}
              >
                <Box
                  width={300}
                  height={300}
                  bgcolor={"lightgray"}
                  mx={"auto"}
                />
              </Grid>
              <Grid
                size={{
                  sm: 12,
                  md: 6,
                  lg: 4,
                }}
              >
                <Box
                  width={300}
                  height={300}
                  bgcolor={"lightgray"}
                  mx={"auto"}
                />
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
};

export default StudioPage;
