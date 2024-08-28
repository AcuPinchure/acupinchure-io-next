import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Link from "next/link";

const BotLink: React.FC = () => {
  return (
    <Stack
      component={Link}
      href="/seiyuu-bot"
      direction={"column"}
      width={300}
      mx={"auto"}
      alignItems={"center"}
      color={"text.primary"}
      spacing={2}
      sx={{
        textDecoration: "none",
        "&:hover": { transform: "scale(1.1)" },
        transition: "transform 0.2s ease",
        cursor: "pointer",
      }}
    >
      <Box bgcolor={"lightgray"} width={300} height={300} />
      <Typography variant={"h5"} textAlign={"center"}>
        Lovelive Seiyuu Bot
      </Typography>
      <Typography variant={"body1"} textAlign={"center"}>
        Series of Twitter(X) bot accounts posting Lovelive Seiyuu images
      </Typography>
    </Stack>
  );
};

export default BotLink;
