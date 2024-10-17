import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const WelcomeTitle: React.FC = () => {
  return (
    <Stack direction={"column"} alignItems={"center"}>
      <Typography
        variant={"h2"}
        fontWeight={400}
        color={"staticColor.whiteText"}
      >
        AcuPinchure
      </Typography>
      <Typography
        variant={"h5"}
        fontWeight={"light"}
        color={"staticColor.whiteText"}
        textAlign={"center"}
      >
        <Box
          component={"span"}
          sx={{
            display: {
              xs: "block",
              sm: "inline",
            },
            "&::after": {
              xs: {
                content: '""',
              },
              sm: {
                content: '", "',
              },
            },
          }}
        >
          Full-stack
        </Box>

        <Box
          component={"span"}
          sx={{
            display: {
              xs: "block",
              sm: "inline",
            },
            "&::after": {
              xs: {
                content: '""',
              },
              sm: {
                content: '", "',
              },
            },
          }}
        >
          Illustrator
        </Box>
        <Box
          component={"span"}
          sx={{
            display: {
              xs: "block",
              sm: "inline",
            },
          }}
        >
          Anime hobbyist
        </Box>
      </Typography>
    </Stack>
  );
};

export default WelcomeTitle;
