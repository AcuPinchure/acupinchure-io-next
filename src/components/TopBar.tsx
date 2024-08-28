import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import ThemeModeSwitcher from "./ThemeModeSwitcher";

const TopBar: React.FC = () => {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={{ textDecoration: "none" }}
          color={"inherit"}
        >
          AcuPinchure
        </Typography>
        <Stack
          spacing={2}
          direction="row"
          justifyContent={"flex-end"}
          flexGrow={1}
        >
          <Button color="inherit" component={Link} href="/">
            Home
          </Button>
          <Button color="inherit" component={Link} href="/seiyuu-bot">
            Seiyuu Bot
          </Button>
          <Button color="inherit" component={Link} href="/minecraft-server">
            Minecraft Server
          </Button>
          <Button color="inherit" component={Link} href="/studio">
            AcuPinchure Studio
          </Button>
          <ThemeModeSwitcher />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
