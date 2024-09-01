import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box, Button, Container, Grid2 as Grid } from "@mui/material";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";

const Section3: React.FC = () => (
  <Box component={"section"} p={4}>
    <Grid container spacing={0} rowSpacing={4} py={8}>
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
          <Typography variant="h3" textAlign={"center"}>
            Scheduled, hourly Joy
          </Typography>
          <Typography variant="body1" textAlign={"center"} maxWidth={"50rem"}>
            {
              "You'll get a regular dose of joy when your favorite seiyuu pops up in your feed. It's a great way to stay connected to your “oshi”!"
            }
          </Typography>
          <Button
            variant="text"
            color="info"
            endIcon={<ArrowSquareOut />}
            href={"https://bot.acupinchure.com/bot/status/"}
          >
            See the post interval of each account
          </Button>
        </Stack>
      </Grid>
    </Grid>
  </Box>
);

export default Section3;
