import Stack from "@mui/material/Stack";
import Banner from "@/components/Banner";
import Typography from "@mui/material/Typography";
import StudioTitle from "@/components/titles/StudioTitle";
import { Box, Container, Divider, Grid2 as Grid } from "@mui/material";
import IllustWork from "@/components/studio/IllustWork";
import {
  commissionedIllustrations,
  oldIllustrations,
  selfIllustrations,
} from "@/store/illustrations";

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
        <Container maxWidth={"xl"} id={"my-works"}>
          <Stack
            direction={"column"}
            height={"100%"}
            alignItems={"stretch"}
            justifyContent={"center"}
            color={"text.primary"}
            spacing={12}
            mb={6}
          >
            <Typography variant="h3" textAlign={"center"}>
              Recent Works
            </Typography>
            {selfIllustrations.map((illustration, index) => (
              <IllustWork
                key={index}
                src={`/images/studio/works/${illustration.src}.jpg`}
                title={illustration.title}
                date={illustration.date}
                device={illustration.device}
                software={illustration.software}
                aspectRatio={illustration.aspectRatio}
                inverted={index % 2 === 1}
                padding={illustration.padding}
              />
            ))}
          </Stack>
          <Divider />
          <Stack
            direction={"column"}
            height={"100%"}
            alignItems={"stretch"}
            justifyContent={"center"}
            color={"text.primary"}
            spacing={12}
            my={6}
          >
            <Typography variant="h3" textAlign={"center"}>
              Commissioned Works
            </Typography>
            {commissionedIllustrations.map((illustration, index) => (
              <IllustWork
                key={index}
                src={`/images/studio/works/${illustration.src}.jpg`}
                title={illustration.title}
                date={illustration.date}
                device={illustration.device}
                software={illustration.software}
                aspectRatio={illustration.aspectRatio}
                inverted={index % 2 === 1}
                padding={illustration.padding}
              />
            ))}
          </Stack>
          <Divider />
          <Stack
            direction={"column"}
            height={"100%"}
            alignItems={"stretch"}
            justifyContent={"center"}
            color={"text.primary"}
            spacing={12}
            my={6}
          >
            <Typography variant="h3" textAlign={"center"}>
              Early Day Works
            </Typography>
            {oldIllustrations.map((illustration, index) => (
              <IllustWork
                key={index}
                src={`/images/studio/works/${illustration.src}.jpg`}
                title={illustration.title}
                date={illustration.date}
                device={illustration.device}
                software={illustration.software}
                aspectRatio={illustration.aspectRatio}
                inverted={index % 2 === 1}
                padding={illustration.padding}
              />
            ))}
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
};

export default StudioPage;
