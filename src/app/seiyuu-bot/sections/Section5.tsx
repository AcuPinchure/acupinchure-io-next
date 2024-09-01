import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box, Button, Container, Grid2 as Grid } from "@mui/material";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import ModalTrigger from "@/components/bot/ModalTrigger";

const Section5: React.FC = () => (
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
            Data-Driven Curation
          </Typography>
          <Typography variant="body1" textAlign={"center"} maxWidth={"50rem"}>
            We analyze the popularity of each post to learn what images resonate
            most with fans. This means our libraries continuously improve to
            feature your favorites.
          </Typography>
          <ModalTrigger
            trigger={"How do we collect data"}
            title={"What data do we collect ?"}
            content={
              <Typography variant="body1">
                In order to better understand the popularity of the posted
                images or clips, the bot records the following data from each
                tweet 72 hours after posting. No personal information from any
                account will be collected.
                <ul>
                  <li>The number of likes</li>
                  <li>The number of retweets (including quotes)</li>
                  <li>The number of followers of the bot account</li>
                </ul>
                {"You can see the statistics of each account in "}
                <a
                  href="https://bot.acupinchure.com/bot/stats/"
                  style={{ cursor: "pointer" }}
                >
                  the statistics page
                </a>
                .
              </Typography>
            }
          />
        </Stack>
      </Grid>
    </Grid>
  </Box>
);

export default Section5;
