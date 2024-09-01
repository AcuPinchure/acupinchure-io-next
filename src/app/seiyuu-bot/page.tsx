import Stack from "@mui/material/Stack";
import Banner from "@/components/Banner";
import Typography from "@mui/material/Typography";
import BotTitle from "@/components/titles/BotTitle";
import { Box, Button, Container, Grid2 as Grid } from "@mui/material";
import ModalTrigger from "@/components/bot/ModalTrigger";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";
import PageFoot from "./sections/PageFoot";

const SeiyuuBotPage: React.FC = () => {
  return (
    <Stack direction={"column"}>
      <Banner
        background={"/images/bot_banner.jpg"}
        backgroundPosition="0% 0%"
        brightness={0.5}
      >
        <BotTitle />
      </Banner>
      <Container maxWidth={"xl"}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </Container>
      <PageFoot />
    </Stack>
  );
};

export default SeiyuuBotPage;
