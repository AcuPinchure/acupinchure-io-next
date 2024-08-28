import Stack from "@mui/material/Stack";
import Banner from "@/components/Banner";
import Typography from "@mui/material/Typography";

const MinecraftServerPage: React.FC = () => {
  return (
    <Stack direction={"column"}>
      <Banner background={"/images/minecraft_banner.jpg"}>
        <Stack direction={"column"} alignItems={"center"} color={"white"}>
          <Typography variant="h3">AcuPinchure Minecraft Server</Typography>
          <Typography variant="body1">
            Vanilla game experience with stunning landscape
          </Typography>
        </Stack>
      </Banner>
      <h1>Minecraft Server</h1>
      <p>This page is under construction.</p>
    </Stack>
  );
};

export default MinecraftServerPage;
