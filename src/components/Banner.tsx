import Box from "@mui/material/Box";

interface BannerProps {
  children: React.ReactNode;
  background: string;
  brightness?: number;
  backgroundPosition?: string;
}

const Banner: React.FC<BannerProps> = ({
  children,
  background,
  brightness = 0.7,
  backgroundPosition = "center",
}) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      width={"100%"}
      overflow={"hidden"}
      p={2}
    >
      <Box
        height={"100%"}
        width={"100%"}
        position={"absolute"}
        top={0}
        left={0}
        zIndex={-1}
        sx={{
          background: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: backgroundPosition,
          filter: `brightness(${brightness})`,
        }}
      />
      {children}
    </Box>
  );
};

export default Banner;
