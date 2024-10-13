import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid2 as Grid } from "@mui/material";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const Section3: React.FC = () => (
  <Box component={"section"}>
    <Grid container spacing={0} rowSpacing={4} py={8}>
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
            src={"/images/bot/about_images/noti_s.png"}
            fill
            alt="Twitter Notification"
            objectFit={"cover"}
            objectPosition={"center"}
          />
        </Box>
      </Grid>
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
          <Typography variant="h3" textAlign={"center"}>
            Scheduled, hourly Joy
          </Typography>
          <Typography variant="body1" textAlign={"center"} maxWidth={"50rem"}>
            {
              "You'll get a regular dose of joy when your favorite seiyuu pops up in your feed. It's a great way to stay connected to your “oshi”!"
            }
          </Typography>
          <Button
            variant="outlined"
            color="info"
            endIcon={<ArrowSquareOut />}
            target="_blank"
            href={"https://bot.acupinchure.com/status/"}
          >
            See the post interval of each account
          </Button>
        </Stack>
      </Grid>
    </Grid>
  </Box>
);

export default Section3;
