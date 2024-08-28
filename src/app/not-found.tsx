import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const ErrorPage: React.FC = () => {
  return (
    <Stack direction={"column"} alignItems={"center"} mt={5} spacing={2}>
      <Typography variant="h4">404 Not Found</Typography>
      <Typography variant="body1">
        The page your are looking for does not exists
      </Typography>
      <Button variant="contained" color="primary" component={Link} href="/">
        Go To Home
      </Button>
    </Stack>
  );
};

export default ErrorPage;
