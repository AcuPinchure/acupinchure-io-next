import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Link from "next/link";
import Image from "next/image";

interface ProjectLinkProps {
  href: string;
  title: string;
  description: string;
  logoURL?: string;
  logoPadding?: number;
}

const ProjectLink: React.FC<ProjectLinkProps> = ({
  href,
  title,
  description,
  logoURL,
  logoPadding = 0,
}) => {
  return (
    <Stack
      component={Link}
      href={href}
      direction={"column"}
      width={300}
      alignItems={"center"}
      color={"text.primary"}
      sx={{
        textDecoration: "none",
        "&:hover": { transform: "scale(1.1)" },
        transition: "transform 0.2s ease",
        cursor: "pointer",
      }}
    >
      {logoURL ? (
        <Box p={`${logoPadding}px`}>
          <Image
            src={logoURL}
            height={300 - logoPadding * 2}
            width={300 - logoPadding * 2}
            alt={title}
          />
        </Box>
      ) : (
        <Box bgcolor={"lightgray"} width={300} height={300} />
      )}
      <Typography variant={"h5"} textAlign={"center"}>
        {title}
      </Typography>
      <Typography variant={"body1"} textAlign={"center"}>
        {description}
      </Typography>
    </Stack>
  );
};

export default ProjectLink;
