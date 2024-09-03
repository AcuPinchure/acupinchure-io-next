import Box from "@mui/material/Box";
import Image from "next/image";

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
      position={"relative"}
      alignItems={"center"}
      height={"100lvh"}
      width={"100%"}
      overflow={"hidden"}
      p={2}
      bgcolor={`#4f4f4f`}
    >
      <Image
        id="banner-background"
        src={background}
        fill
        alt="Banner Background"
        objectFit={"cover"}
        objectPosition={backgroundPosition}
        style={{ filter: `brightness(${brightness})` }}
      />
      <Box zIndex={1}>{children}</Box>
    </Box>
  );
};

export default Banner;
