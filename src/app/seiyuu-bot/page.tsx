import Stack from "@mui/material/Stack";
import Banner from "@/components/Banner";
import Typography from "@mui/material/Typography";
import BotTitle from "@/components/titles/BotTitle";
import { Box, Container, Grid2 as Grid } from "@mui/material";
import ModalTrigger from "@/components/bot/ModalTrigger";

const SeiyuuBotPage: React.FC = () => {
  return (
    <Stack direction={"column"}>
      <Banner background={"/images/minecraft_banner.jpg"}>
        <BotTitle />
      </Banner>
      <Container maxWidth={"xl"}>
        <Box component={"section"} p={4}>
          <Grid container spacing={0} rowSpacing={4}>
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
                  Discover Random Surprise
                </Typography>
                <Typography
                  variant="body1"
                  textAlign={"center"}
                  maxWidth={"50rem"}
                >
                  {`Lovelive Seiyuu Bot is `}
                  <a href="#page-footer" style={{ cursor: "pointer" }}>
                    a series of bot accounts
                  </a>
                  {` randomly picks Lovelive seiyuu images and posts them on
                  twitter. You'll never miss that perfect profile pic, moments
                  or meme!`}
                </Typography>
                <ModalTrigger
                  trigger={"Learn more about how we collect images"}
                  title={"How we collect images ?"}
                  content={
                    <>
                      <Typography variant="body1">
                        All images and clips are collected from the following
                        source.
                        <ul>
                          <li>
                            Social media such as Twitter, Instagram, YouTube,
                            etc.
                          </li>
                          <li>News websites</li>
                          <li>Official websites</li>
                          <li>Other public source</li>
                        </ul>
                      </Typography>
                      <Typography variant="body1">
                        Media from the following source will not be included.
                        <ul>
                          <li>Fan clubs</li>
                          <li>Magazine or photobook scans</li>
                          <li>Paid streaming service or Blu-ray Disc</li>
                          <li>Other paid source</li>
                          <li>Anything marked as redistribution prohibited</li>
                        </ul>
                      </Typography>
                    </>
                  }
                />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Stack>
  );
};

export default SeiyuuBotPage;
