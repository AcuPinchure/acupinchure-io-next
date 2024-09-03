"use client";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorPage: React.FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <Stack direction={"column"} alignItems={"center"} mt={5} spacing={2}>
      <Typography variant="h4">Something went wrong!</Typography>
      <Typography variant="body1">Reason: {`${error.cause}`}</Typography>
      <Button variant="contained" color="primary" onClick={reset}>
        Try Again
      </Button>
      <Button variant="contained" color="secondary" component={Link} href="/">
        Go To Home
      </Button>
    </Stack>
  );
};

export default ErrorPage;
