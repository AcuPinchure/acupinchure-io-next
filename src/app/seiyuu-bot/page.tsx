import Stack from "@mui/material/Stack";
import Banner from "@/components/Banner";
import Typography from "@mui/material/Typography";
import BotTitle from "@/components/titles/BotTitle";

const SeiyuuBotPage: React.FC = () => {
  return (
    <Stack direction={"column"}>
      <Banner background={"/images/minecraft_banner.jpg"}>
        <BotTitle />
      </Banner>
      <Typography variant="h3" color={"text.primary"}>
        Studio
      </Typography>
      <Typography variant="body1" color={"text.primary"}>
        This page is under construction.
      </Typography>
    </Stack>
  );
};

export default SeiyuuBotPage;
