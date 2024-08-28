import Stack from "@mui/material/Stack";
import Banner from "@/components/Banner";
import Typography from "@mui/material/Typography";
import StudioTitle from "@/components/titles/StudioTitle";

const StudioPage: React.FC = () => {
  return (
    <Stack direction={"column"}>
      <Banner
        background={"/images/studio_banner.jpg"}
        brightness={1}
        backgroundPosition="80% 50%"
      >
        <Stack direction={"column"} alignItems={"center"}>
          <StudioTitle />
        </Stack>
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

export default StudioPage;
