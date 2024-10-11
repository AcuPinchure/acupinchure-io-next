import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import MCBanner from "@/components/minecraft/MCBanner";

const MinecraftServerPage: React.FC = () => {
  return (
    <Stack direction={"column"}>
      <MCBanner />
      <Box component={"section"} p={4}>
        <Container maxWidth={"xl"}>
          <Stack
            direction={"column"}
            minHeight={"100vh"}
            m={-4}
            alignItems={"center"}
            justifyContent={"center"}
            color={"text.primary"}
            spacing={4}
          >
            <Typography variant="h3" textAlign={"center"}>
              Server IP
            </Typography>
            <Box
              borderColor={"primary.contrastText"}
              border={"1px solid"}
              borderRadius={2}
              bgcolor={"primary.light"}
              py={2}
              px={4}
            >
              <Typography variant="body1" textAlign={"center"}>
                minecraft.acupinchure.com
              </Typography>
            </Box>
            <Typography variant="body1" textAlign={"center"} lineHeight={2}>
              - Whitelist invitation required
              <br />- Accepted both Java and Bedrock (via Geyser) version
              <br />
              * Java 1.20.6 or later
              <br />* Bedrock 1.20.81 or later
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
};

export default MinecraftServerPage;
